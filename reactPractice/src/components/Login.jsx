import React, {useState, useContext} from 'react'
import { userContext } from '../context/userContext' 

function Login() {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, age, password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' /> {' '}
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='age' /> {' '}
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
