import PropTypes from 'prop-types'

export const CommitList = ({ commits }: { commits: any[] }) => {
  return (
    <div className="space-y-3">
      {commits.map((commit: any) => (
        <div key={commit?.sha} className="space-x-4 flex items-start text-start">
          <img
            src={commit?.author?.avatar_url}
            alt=""
            width="60"
            height="110"
            className="flex-none rounded-md bg-slate-100 mt-2"
          />
          <div className="min-w-0 relative flex-auto">
            <a className="text-sm mt-2 font-semibold hover:text-primary" target="blank" href={commit?.html_url}>
              {commit?.commit?.message}
            </a>
            <div className="flex-none w-full mt-2">
              <p className="text-slate-400 text-xs">
                {commit?.author?.login} at {' '}
                {new Date(commit?.commit.author?.date).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

CommitList.propTypes = {
  commits: PropTypes.array.isRequired
}

export default CommitList
