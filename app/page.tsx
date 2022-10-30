'use client'

import { settings } from '../config/env'

export const Home = () => {
  const { CLIENT_ID, REDIRECT_URI } = settings

  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?scope=user&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
  }

  return (
    <main>
      <h1 className="text-5xl font-bold">Commit History App</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </main>
  )
}

export default Home
