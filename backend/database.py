from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path
import os

# ✅ Load .env from the same folder (backend/)
env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=env_path)

# Get variables
MONGODB_URL = os.getenv("MONGODB_URL")
MONGODB_HOST = os.getenv("MONGODB_HOST")

# ✅ Debug check
if not MONGODB_URL or not MONGODB_HOST:
    raise ValueError("❌ Environment variables not loaded. Check .env location and variable names.")

# Connect
client = AsyncIOMotorClient(MONGODB_URL)
db = client[MONGODB_HOST]

# Collections
project_collection = db["projects"]
blog_collection = db["blogs"]
