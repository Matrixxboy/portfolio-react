from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from routes.routes import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # 👈 your React dev URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Serve uploaded images
app.mount("/uploads", StaticFiles(directory="./uploads"), name="uploads")

# API routes
app.include_router(router)

@app.get("/")
async def root():
    return {"message": "API working"}
