from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware


from .routers import users

app = FastAPI(title='secure-store API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

app.include_router(
    users.router,
    prefix="/user",
    tags=['user']
)