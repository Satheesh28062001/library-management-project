import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UsersLogin = () => {
  let userEmail=useRef()
 let userPass=useRef()
 let navigate=useNavigate()
 
  let[userData,setUserData]=useState([])
 
 useEffect(()=>{
  let fetchUserApi=async()=>{
    let resp= await fetch('http://localhost:4000/users')
    let data=await resp.json()
    setUserData(data)
    
   }
   
   fetchUserApi()

 },[userData])

 //! Collecting mail from user api
 let allUsersEmail=userData.map(e=>e.email)
 
 //!Collecting input data from the end user
 let valEmail=userEmail.current
  let valPass=userPass.current

  let handleSubmit=(e)=>{
    e.preventDefault()
    //console.log(valEmail.value,valPass.value)
   

    //!checking weather the email is present or not while collecting the data from enduser
    let email=allUsersEmail.includes(valEmail.value)
    let Password=(valPass.value==='Satheesh123')
    //console.log(email,Password)

    if(email && Password)
      {
        navigate('/userportal')

      }
      else{
        let err=`border:solid 2px red`;
        valEmail.style.cssText=err;
        valPass.style.cssText=err;

      }
   

  }







 
 

 



  return (
   <>
    <form action="" onSubmit={handleSubmit}>
        <input ref={userEmail} type="text" placeholder='Enter Mail-Id' />
        <input ref={userPass} type="text" placeholder='Enter Password' />
        <button>User Login</button>
    </form></>
  )
}

export default UsersLogin
