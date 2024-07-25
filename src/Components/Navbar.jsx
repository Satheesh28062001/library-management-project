import React from 'react'
import "../Style/navbar.css"
import { NavLink, useLocation } from 'react-router-dom'
import i1 from "../Images/book logo.png"



const Navbar = () => {
  let loc=useLocation()
  let path=loc.pathname
  let bool=path.startsWith('/adminportal')
  
  




  return (
   <>
   <div className="navbar">
    <div className="logo">
        <img src={i1}  />
        

       
    </div>
   {
    bool?
    <>
     <ul>
        <li><NavLink to={"/adminportal/"}>HOME</NavLink></li>
        <li><NavLink to={"/adminportal/books"}>BOOKS</NavLink></li>
        <li><NavLink to={"/adminportal/addbooks"}>ADDBOOKS</NavLink></li>
        {/* <li><NavLink to={"/adminportal/about"}>ABOUT</NavLink></li> */}
        <li><NavLink to={"/adminportal/users"}>USERS</NavLink></li>
        <li><NavLink to={"/adminportal/addusers"}>ADD USERS</NavLink></li>
        <li><NavLink to={"/"}>LOGOUT</NavLink></li>
    </ul>
    </>
    :
    <>
    <ul>
      <li><NavLink to={"/userportal/"}>HOME</NavLink></li>
      <li><NavLink to={"/userportal/books"}>Books</NavLink></li>
      <li><NavLink to={"/userportal/users"}>USERS</NavLink></li>
      <li><NavLink to={"/userportal/cart"}>CART</NavLink></li>
      <li><NavLink to={"/"}>LOGOUT</NavLink></li>
    </ul>
    </>
   }
   </div>


   </>
  )
}

export default Navbar
