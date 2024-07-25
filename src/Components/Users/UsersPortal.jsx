import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'

import Books from '../Books'
import Users from '../Users'
import ReadBooks from '../ReadBooks'
import Cart from '../Cart'
import Home from '../Home'

const UsersPortal = () => {
  return (
   <>
   <Navbar/>
   <Routes>

   <Route element={<Home/>} path='/' />
   <Route element={<Books/>} path='/books' />
   
   <Route element={<Users/>} path='/users'/>
   <Route element={<ReadBooks/>} path='/readbooks/:id' />
   <Route element={<Cart/>} path='/cart' />
   



   </Routes>


   </>
  )
}

export default UsersPortal
