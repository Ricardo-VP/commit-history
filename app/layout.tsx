'use client'
import './globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useUserStore } from '../store/user'

const queryClient = new QueryClient()

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { isLoggedIn } = useUserStore()

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard')
    }
  }, [isLoggedIn])

  return (
    <html lang="en">
      <head>
        <title>Commit History - App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">{children}</div>
            </div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  )
}
