import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import "./Navbar.css"


const Navbarteacher = () => {
  let navigate=useNavigate()
  
const HandleLogout=()=>{
localStorage.removeItem("token")
 navigate("/login")
}

let name=localStorage.getItem("name")
let role=localStorage.getItem("role")

  return (
    <nav>
        <input type="checkbox" id="check" />
        <label>
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancle"></i>
        </label>
        <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
        <ul>
        <li><Link to="/teacher" style={{fontWeight:"600"}}>{name} {"  "} ({role}) </Link></li>
        <li><Button colorScheme="twitter" onClick={HandleLogout}>Logout</Button></li>
    </ul>
    </nav>
  )
}

export default Navbarteacher