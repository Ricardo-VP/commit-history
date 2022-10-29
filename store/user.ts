import create from 'zustand'

export interface UserState {
  isLoggedIn: boolean
  user: Object | null
  logIn: (isLoggedIn: boolean, user: Object) => void
  logOut: () => void
}

export const useUserStore = create<UserState>((set) => ({
  // Initial state
  user: {},
  isLoggedIn: false,
  // Mutation
  logIn: (isLoggedIn: boolean, user: Object) => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
    localStorage.setItem('user', JSON.stringify(user))
    set(() => ({
      user,
      isLoggedIn
    }))
  },
  logOut: () => {
    localStorage.clear()
    set(() => ({
      isLoggedIn: false,
      user: null
    }))
  }
}))
