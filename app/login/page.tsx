'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { settings } from '../../config/env'
import { useUserStore } from '../../store/user'

const { BACKEND_URI } = settings

export const LoginPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code') ?? ''

  const { logIn } = useUserStore()
  const router = useRouter()

  useQuery(
    ['userData'],
    async () => {
      return await fetch(`${BACKEND_URI as string}/user/${code}`).then(
        async (res) => await res.json()
      )
    },
    {
      onSuccess: (user) => {
        if (!user.data) {
          router.push('/')
        } else {
          logIn(true, user.data)
        }
      },
      staleTime: Infinity
    }
  )

  return (
    <div>
      <h3>You are logged in</h3>
    </div>
  )
}

export default LoginPage
