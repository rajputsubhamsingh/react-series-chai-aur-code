import React, { useContext } from 'react'
import { useState } from 'react'
import { userContext } from '../context/userContext'

const Dashboard = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [course, setCourse] = useState('')
    const [standard, setStandard] = useState('')
    const [age, setAge] = useState('')
    const {setUser} = useContext(userContext) 

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({firstName, lastName, course, standard, age})
    }
  return (
    <div>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='firstName'/>{' '}
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='lastName'/>{' '}
      <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder='course'/>{' '}
      <input type="text" value={standard} onChange={(e) => setStandard(e.target.value)} placeholder='standard'/>{' '}
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='age'/>{' '}
      <button onClick={handleSubmit}>Submit</button>   
  </div>
  )
} 

export default Dashboard
