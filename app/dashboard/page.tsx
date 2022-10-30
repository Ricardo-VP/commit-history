'use client'
import { useRouter } from 'next/navigation'
import { useUserStore } from '../../store/user'
import { UserCard } from './components/UserCard'

const DashboardPage = () => {
  const router = useRouter()
  const { isLoggedIn, user, logOut } = useUserStore()

  console.log(user)

  return isLoggedIn
    ? (
    <div className="space-y-3">
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
      )
    : null
}

export default DashboardPage