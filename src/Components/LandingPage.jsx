import React, { useState } from 'react'
import "../Style/LanndingPage.css"
import AdminLogin from './AdminLogin'
import UsersLogin from './UsersLogin'

const LandingPage = () => {
    let [bool,setBool]=useState(true)
    let handelclick=()=>setBool(!bool)
  return (
   <>
   <div className="landingpage">
            <div className="logBox">
                <div className="header">{bool?  "Admin Login":"User Login"}</div>
                <div className="btn-box">
                <button onClick={handelclick} className={bool?'admin':'user'}>{bool? 'Admin Login':'User Login'}</button>
                </div>
                <div className="form-container">
                  {bool?<AdminLogin/>:  <UsersLogin/> }
                  
                  
                
                 
                </div>
                
               
               

            </div>
     </div>

   </>
  )
}

export default LandingPage
