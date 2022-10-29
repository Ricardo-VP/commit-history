'use client'
import { useSearchParams } from 'next/navigation'

export const LoginPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  console.log(code)

  return (
    <div>
      <h3>You are logged in</h3>
    </div>
  )
}

export default LoginPage
