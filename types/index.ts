export interface Settings {
  CLIENT_ID: string | undefined
  CLIENT_SECRET: string | undefined
  REDIRECT_URI: string | undefined
  BACKEND_URI: string | undefined
}

export interface UserState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
  logIn: (isLoggedIn: boolean, user: Object, token: string) => void
  logOut: () => void
}

export interface RepoState {
  repositories: any[]
  save: (repositories: any[]) => void
}

interface User {
  [key: string]: any
}
