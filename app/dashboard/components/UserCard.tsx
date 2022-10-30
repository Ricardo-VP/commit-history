import PropTypes from 'prop-types'

export const UserCard = ({
  avatarUrl,
  name,
  bio
}: {
  avatarUrl: string
  name: string
  bio: string
}) => {
  return (
    <div className="card items-center">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={avatarUrl} />
        </div>
      </div>
      <h4 className="card-title mt-3 text-primary">{name}</h4>
      <p className="text-sm">{bio}</p>
    </div>
  )
}

UserCard.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string
}

export default UserCard
