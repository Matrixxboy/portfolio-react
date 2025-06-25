import shutil
import os
from fastapi import APIRouter, UploadFile, File, HTTPException ,Form , Depends , status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from routes.auth import create_access_token, decode_token
from models.models import ProjectModel, BlogModel
from database import project_collection, blog_collection
from uuid import uuid4

router = APIRouter()

UPLOAD_DIR = "backend/uploads"


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="admin/login")

# 👤 Admin credentials from .env
ADMIN_USERNAME = os.getenv("ADMIN_USERNAME")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")

@router.post("/admin/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    if form_data.username != ADMIN_USERNAME or form_data.password != ADMIN_PASSWORD:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    token = create_access_token({"sub": form_data.username})
    return {"access_token": token}

# 🔐 Dependency to check token
async def get_current_admin(token: str = Depends(oauth2_scheme)):
    try:
        payload = decode_token(token)
        username = payload.get("sub")
        if username != ADMIN_USERNAME:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        return username
    except:
        raise HTTPException(status_code=401, detail="Invalid token")


# 🔼 Upload helper
def save_image(file: UploadFile) -> str:
    extension = file.filename.split(".")[-1]
    filename = f"{uuid4().hex}.{extension}"
    path = f"{UPLOAD_DIR}/{filename}"
    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return f"/uploads/{filename}"

# ▶️ Create Project
@router.post("/projects/")
async def create_project(
    title: str = Form(...),
    description: str = Form(...),
    github_link: str = Form(None),
    demo_link: str = Form(None),
    image: UploadFile = File(None)
):
    data = {
        "title": title,
        "description": description,
        "github_link": github_link,
        "demo_link": demo_link,
    }

    if image:
        data["image_url"] = save_image(image)

    result = await project_collection.insert_one(data)
    return {"id": str(result.inserted_id)}


# ▶️ Create Blog
@router.post("/blogs/")
async def create_blog(
    title: str = Form(...),
    content: str = Form(...),
    image: UploadFile = File(None)
):
    data = {
        "title": title,
        "content": content,
    }

    if image:
        data["image_url"] = save_image(image)

    result = await blog_collection.insert_one(data)
    return {"id": str(result.inserted_id)}
