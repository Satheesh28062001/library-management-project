import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    let adminEmail=useRef()
    let adminPswd=useRef()
    let navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let emailVal=adminEmail.current
        let pswdVal=adminPswd.current
        let credential={            
            email:"satheeshwaran95@gmail.com",
            password:"Satheesh@2001"
        }
        let{email,password}=credential
        let err=`border:solid 2px red; background:rgba(255,0,0,0.5);`
        if(emailVal.value==email && pswdVal.value==password)
            {
                navigate('/adminportal')
            }
            else{
                emailVal.style.cssText=err
                pswdVal.style.cssText=err
            }
         
    }
    

  return (
    
    <>
    <form action="" onSubmit={handleSubmit}>
        <input ref={adminEmail} type="text" placeholder='Enter Mail-Id' />
        <input ref={adminPswd} type="text" placeholder='Enter Password' />
        <button>Admin Logiin</button>
    </form>
    </>
  )
}

export default AdminLogin
