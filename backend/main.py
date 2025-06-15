from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from routes.routes import router

app = FastAPI()

# Serve uploaded images
app.mount("/uploads", StaticFiles(directory="./uploads"), name="uploads")

# API routes
app.include_router(router)

@app.get("/")
async def root():
    return {"message": "API working"}
