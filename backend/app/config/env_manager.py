import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    CLIENT_ID: str = os.getenv('CLIENT_ID') or None
    CLIENT_SECRET: str = os.getenv('CLIENT_SECRET') or None
    REDIRECT_URI: str = os.getenv('REDIRECT_URI') or None


def get_settings() -> Settings:
    return Settings()
