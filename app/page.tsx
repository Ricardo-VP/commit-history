'use client'

import { settings } from '../config/env'

const Home = () => {
  const { CLIENT_ID, REDIRECT_URI } = settings

  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?scope=user&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
  }

  return (
    <div>
      <h1 className="text-5xl font-bold">Commit History App</h1>
      <p className="py-6">
        The easiest way to see the commit history of your repositories. Created
        by{' '}
        <a
          className="text-primary"
          href="https://github.com/Ricardo-VP"
          target="blank"
        >
          Ricardo Vaca
        </a>
      </p>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  )
}

export default Home
