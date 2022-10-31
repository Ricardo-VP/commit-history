import create from 'zustand'

import { RepoState } from '../types'

export const useRepoStore = create<RepoState>((set) => ({
  // Initial state
  repositories: [],
  // Mutation
  save: (repositories: any[]) => {
    set(() => ({
      repositories
    }))
  }
}))
