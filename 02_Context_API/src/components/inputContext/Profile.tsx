import { useContext } from 'react'
import UserContext from './context/UserContext.js'

type UserType = {
  username: string;
  // password: string;
};

function Profile() {
  const { user }: { user: UserType } =  useContext(UserContext)
  if(!user) return <div>Please login</div>

  return (
    <>
      <div>Welcome, {user.username}</div>
    </>
  )
}

export default Profile
