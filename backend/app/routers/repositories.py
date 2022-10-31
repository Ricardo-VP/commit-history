import json
import requests

from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

from ..config.env_manager import get_settings


router = APIRouter()
env_manager = get_settings()


class User(BaseModel):
    username: str
    token: str


class Repository(BaseModel):
    name: str
    owner: str
    token: str


@router.post('/')
async def get_repos(user: User):
    url = 'https://api.github.com/user/repos'
    headers = {"Authorization": f'Bearer {user.token}'}
    response = requests.get(url=url, headers=headers)

    repo_list = response.json()

    return {
        "status": "success",
        "data": repo_list
    }


@router.post('/commits')
async def get_commits(repository: Repository):
    url = f'https://api.github.com/repos/{repository.owner}/{repository.name}/commits'
    headers = {"Authorization": f'Bearer {repository.token}'}
    response = requests.get(url=url, headers=headers)

    commits = response.json()

    return {
        "status": "success",
        "data": commits
    }