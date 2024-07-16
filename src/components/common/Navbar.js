import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({userInfo, setUserInfo}) => {
  return (
    <div id='navbar-container'>
        <div>
          <div>
            <Link to="/"><span>TripKaro.in</span></Link>
          </div>
          <div id='nav-links'>
            <Link to="/reservation"><span>RESERVATION</span></Link>  
            { userInfo.isSignin && <span>Hi, {userInfo.name}</span> }
            { !userInfo.isSignin &&
              <>
               <Link to="/signin"><span>SIGNIN</span></Link>
               <Link to="/signin"><span>SIGNUP</span></Link>
              </>  
            }
          </div>
        </div>
    </div>
  )
}

export default Navbar