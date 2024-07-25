import React, { useRef } from 'react'
import "../../Style/addUser.css"

const AddUsers = () => {
    let fname=useRef()
    let lname=useRef()
    let mail=useRef()
    let phno=useRef()
    let place=useRef()
    let dob=useRef()
   

    let handleSubmit= (e)=>{
        e.preventDefault()

        let newUser={
            firstname :fname.current.value,
            lastname :lname.current.value,
            email :mail.current.value,
            phone :phno.current.value,
            address :place.current.value,
            birthDate :dob.current.value
    
        }
        
         fetch(`http://localhost:4000/users`,{
            method:"POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newUser)
           })
    
       

}
    

  return (
   <>
   <div className="addusers">
    <form onSubmit={handleSubmit}>
        <input ref={fname} type="text"  placeholder='Enter First Name'/>
        
        <input ref={lname} type="text"  placeholder='Enter Last Name'/>
        
        <input ref={mail} type="email"  placeholder='Enter Email Address'/>
        
        <input ref={phno} type="tel"  placeholder='Enter Phone Number'/>
        
        <input ref={place} type="text"  placeholder='Enter Place'/>
        
        <input ref={dob} type="date"  placeholder='Date of Birth'/>
        
        <button className='add-btn'>Add Users</button>


    </form>
   </div>
   
   
   </>
  )
}

export default AddUsers
