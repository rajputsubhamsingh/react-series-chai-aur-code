import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { UserContextProvider } from './context/userContext'
import Dashboard from './components/Dashboard'
import DashboardData from './components/DashboardData'

function App() { 

  const [user, setUser] = useState('')
  return (
    <UserContextProvider value={{user, setUser}}>
      <Login />
      <Profile />
      <Dashboard />
      <DashboardData />
    </UserContextProvider>
  )
}

export default App
