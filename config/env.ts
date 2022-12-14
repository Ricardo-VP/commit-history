import { Settings } from '../types'

export const settings: Settings = {
  CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
  CLIENT_SECRET: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
  BACKEND_URI: process.env.NEXT_PUBLIC_BACKEND_URI
}
