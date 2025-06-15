from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ProjectModel(BaseModel):
    title: str
    description: str
    image_url: Optional[str] = None
    github_link: Optional[str] = None
    demo_link: Optional[str] = None
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

class BlogModel(BaseModel):
    title: str
    content: str
    image_url: Optional[str] = None
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
