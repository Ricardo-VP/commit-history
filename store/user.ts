import create from 'zustand'
import { persist } from 'zustand/middleware'

import { UserState } from '../types'

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      // Initial state
      user: {},
      isLoggedIn: false,
      token: null,
      // Mutation
      logIn: async (isLoggedIn: boolean, user: Object, token: string) => {
        set(() => ({
          user,
          isLoggedIn,
          token
        }))
      },
      logOut: () => {
        set(() => ({
          isLoggedIn: false,
          user: null
        }))
      }
    }),
    { name: 'user' }
  )
)
