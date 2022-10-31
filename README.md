## Commit History App

### Technologies

- Frontend
    - Language: TypeScript
    - Framework: NextJS 13
    - Styles: DaisyUI + TailwindCSS
    - Store library: Zustand
    - Fetching library: React Query
    
- Backend
    - Language: Python
    - Framework: FastAPI
    
### How to run the project

- Requirements
    - Install:
      - Node: https://nodejs.org/es/download/
      - Python: https://www.python.org/downloads/
    - Create an Github OAuth app:
      - https://docs.github.com/es/developers/apps/building-oauth-apps/creating-an-oauth-app

- Steps
    - Create a .env file in the root path:
      - It should have values like this:
      ```
        NEXT_PUBLIC_CLIENT_ID=Here paste your OAuth Client ID
        NEXT_PUBLIC_CLIENT_SECRET=Here paste your OAuth Client Secret
        NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/login
        NEXT_PUBLIC_BACKEND_URI=http://localhost:5000
      ```
    - Create a .env file in the backend folder:'
      - It should have values like this:
      ```
        CLIENT_ID=Here paste your OAuth Client ID
        CLIENT_SECRET=Here paste your OAuth Client Secret
        REDIRECT_URI=http://localhost:3000/login
      ```
    - Run the frontend: 
      ```
      npm install &&
      npm run dev
      ```
    - Run the backend: 
      ```
      cd backend &&
      python3 -m pip install -r requirements.txt &&
      python3 runner.py
      ```
