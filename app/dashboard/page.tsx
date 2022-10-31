'use client'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { settings } from '../../config/env'
import { useUserStore } from '../../store/user'

import UserCard from './components/UserCard'
import { useRepoStore } from '../../store/repositories'
import { RepositoriesCard } from './components/RepositoriesCard'

const { BACKEND_URI } = settings

const DashboardPage = () => {
  const router = useRouter()
  const { isLoggedIn, user, logOut, token } = useUserStore()
  const { save } = useRepoStore()

  useQuery(
    ['repoData'],
    async () => {
      const response = await fetch(`${BACKEND_URI as string}/repositories`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: user?.login as string,
          token: token as string
        })
      })
      if (!response.ok) {
        throw new Error('Error fetching repositories')
      }
      return await response.json()
    },
    {
      onSuccess: (response) => {
        save(response.data)
      },
      staleTime: Infinity
    }
  )

  return isLoggedIn
    ? (
    <div className="space-y-4">
      <div className="w-150 bg-base-100 shadow-xl items-center p-5 space-y-3">
        <UserCard
          avatarUrl={user?.avatar_url as string}
          bio={user?.bio as string}
          name={user?.name as string}
        />
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => {
            logOut()
            router.push('/')
          }}
        >
          Logout
        </button>
      </div>
      <div className="divider"></div>
      <RepositoriesCard />
    </div>
      )
    : (
    <button className="btn btn-ghost disabled loading">Loading</button>
      )
}

export default DashboardPage
