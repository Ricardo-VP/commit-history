import { useState } from 'react'

import { settings } from '../../../config/env'
import { useRepoStore } from '../../../store/repositories'
import { useUserStore } from '../../../store/user'
import CommitList from './CommitList'

const { BACKEND_URI } = settings

export const RepositoriesCard = () => {
  const [loading, setLoading] = useState(false)
  const [repository, setRepository] = useState<string>('')
  const [commits, setCommits] = useState<any[]>([])

  const { repositories } = useRepoStore()
  const { user, token } = useUserStore()

  const fetchCommits = async () => {
    setLoading(true)
    const response = await fetch(
      `${BACKEND_URI as string}/repositories/commits`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: repository,
          owner: user?.login as string,
          token: token as string
        })
      }
    )
    if (!response.ok) {
      throw new Error('Error fetching repositories')
    }
    const { data } = await response.json()
    setCommits(data)
    setLoading(false)
  }

  return (
    <div>
      <div className="w-150 bg-base-100 shadow-xl items-center p-5 space-y-3">
        <div className="card items-center">
          <h1 className="text-primary card-title">Select a repository</h1>
          <div className="py-5 px-2">
            {repositories.length > 0
              ? (
              <div className="space-y-3">
                <select
                  value={repository}
                  onChange={(e) => {
                    setRepository(e.target.value)
                  }}
                  className="select select-bordered w-full"
                >
                  <option disabled value="">
                    Select one
                  </option>
                  {repositories.map((repo) => (
                    <option key={repo?.name} value={repo?.name}>
                      {repo.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={fetchCommits}
                  disabled={repository === '' || loading}
                  className="btn btn-sm btn-secondary"
                >
                  Load commits
                </button>
                <div className="divider"></div>

                {commits.length > 0 && <CommitList commits={commits} />}
              </div>
                )
              : (
              <button className="btn btn-ghost disabled loading">
                Loading
              </button>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepositoriesCard
