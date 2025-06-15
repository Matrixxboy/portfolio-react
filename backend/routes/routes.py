from fastapi import APIRouter, UploadFile, File, HTTPException
from models.models import ProjectModel, BlogModel
from database import project_collection, blog_collection
import shutil
from uuid import uuid4

router = APIRouter()

UPLOAD_DIR = "backend/uploads"

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
async def create_project(data: ProjectModel, image: UploadFile = File(None)):
    data = data.dict()
    if image:
        data["image_url"] = save_image(image)
    result = await project_collection.insert_one(data)
    return {"id": str(result.inserted_id)}

# ▶️ Create Blog
@router.post("/blogs/")
async def create_blog(data: BlogModel, image: UploadFile = File(None)):
    data = data.dict()
    if image:
        data["image_url"] = save_image(image)
    result = await blog_collection.insert_one(data)
    return {"id": str(result.inserted_id)}
