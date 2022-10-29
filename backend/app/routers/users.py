import json
import requests

from fastapi import APIRouter, HTTPException

from ..config.env_manager import get_settings


router = APIRouter()
env_manager = get_settings()


@router.get('/{code}')
async def get_user(code):
    access_token = await get_token(code)

    if access_token is None:
        raise HTTPException(status_code=400, detail="Token invalid or expired")

    url = 'https://api.github.com/user'
    headers = {"Authorization": f'token {access_token}'}
    response = requests.get(url=url, headers=headers)

    user_data = response.json()

    return {
        "status": "success",
        "data": user_data
    }


async def get_token(code):
    url = "https://github.com/login/oauth/access_token"
    headers = {
        'accept': 'application/json'
    }
    response = requests.post(url, {
        "client_id": env_manager.CLIENT_ID,
        "client_secret": env_manager.CLIENT_SECRET,
        "code": code,
        "redirect_uri": env_manager.REDIRECT_URI
    }, headers=headers)

    data = response.json()

    if "access_token" in data:
        return data['access_token']
    else:
        return None
