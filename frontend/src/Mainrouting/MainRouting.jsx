import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Studentdashboard from '../Pages/Studentdashboard'
import Teacherdashboard from '../Pages/Teacherdashboard'

const MainRouting = () => {
  return (
    <Routes>
        <Route path="/"  element={<Signup/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/teacher"  element={<Teacherdashboard/>}/>
        <Route path="/student"  element={<Studentdashboard/>}/>
    </Routes>
  )
}

export default MainRouting