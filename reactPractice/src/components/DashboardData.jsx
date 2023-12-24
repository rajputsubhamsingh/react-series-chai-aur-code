import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

const DashboardData = () => {
    const {user} = useContext(userContext) 
   if(!user) return <div>No Data is available here.</div>
   else {
    return (
        // age ka value conflict kar rha hai kyuki age do bar le liye hai ek dashboard me aur ek login me
        <div>
            Your name is {user.firstName + " " + user.lastName} and your course is {user.course} and <br /> 
            standard is {user.standard} and age is {user.age}  
        </div>
    )
   }
}

export default DashboardData
