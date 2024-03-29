import React, { useContext } from 'react' 
import { userContext } from '../context/userContext'

const Profile = () => {
    const {user} = useContext(userContext)
  if(!user) return <div>Please Login</div>

  else return <div>Welcome {user.username} and age is <b> {user.age} </b> and your password is {user.password} </div>
}

export default Profile
