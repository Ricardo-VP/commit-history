'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { settings } from '../../config/env'
import { useUserStore } from '../../store/user'

const { BACKEND_URI } = settings

const LoginPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code') ?? ''

  const { logIn } = useUserStore()
  const router = useRouter()

  const { isSuccess, isLoading, isError } = useQuery(
    ['userData'],
    async () => {
      const response = await fetch(`${BACKEND_URI as string}/user/${code}`)
      if (!response.ok) {
        throw new Error('Error fetching user data')
      }
      return await response.json()
    },
    {
      onSuccess: async (user) => {
        logIn(true, user.data, user.token)
        router.push('/dashboard')
      },
      onError: () => {
        router.push('/')
      },
      staleTime: Infinity
    }
  )

  if (isLoading) {
    return <button className="btn btn-ghost disabled loading">Loading</button>
  }

  if (isError) {
    return null
  }

  if (isSuccess) {
    return (
      <div>
        <h3>Redirecting to the dashboard...</h3>
      </div>
    )
  }
}

export default LoginPage
