import React, { useEffect, useState } from 'react'
import "../Style/users.css"
import { useLocation } from 'react-router-dom'


const Users = () => {
  let loc=useLocation().pathname.startsWith('/adminportal')
  let[user,setUser]=useState([])


  useEffect(()=>{
    let fetchUser=async()=>{
      let userData= await fetch('http://localhost:4000/users')
      .then(resp=>resp.json())
      setUser(userData)
    }
    fetchUser()

  },[user])
 
    
   
 
  
  
  
  return (
    <>
    <div className="users">
      <table border={1}>
      <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Email-Id</th>
            <th>Phone</th>
            <th>Address</th>
            
            <th>Date of Birth</th>
            {loc?<th>Password</th>:<></>}
            {loc?<th>Delete User</th>:<></>}
          </tr>
        </thead>
        {user.map((e,index)=>{
        let{id,firstname,lastname,email,phone,address,birthDate}=e
        
        
       
        let deleteUser=()=>{
          let bool=window.confirm(`Do you want to delete ${firstname} user..?`)
          if(bool)
            {
              fetch(`http://localhost:4000/users/${id}`,{method:"DELETE"})
             alert(`${firstname} user is deleted`)

            }
            else{
              alert("user is Not deleted")
            }
           
           
             
          
           
          
        }
        return(
         
           <tbody>
              <tr>
                <td>{index+1}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                
                <td>{birthDate}</td>
                {loc?<td>Satheesh123</td>:<></>}
                {loc?<td><button onClick={deleteUser} className='user-btn'>Delete User</button></td>:<></>}
              </tr>
            </tbody>
         

        )
})}

      </table>
     
    </div>
    
    </>
  )
}

export default Users

