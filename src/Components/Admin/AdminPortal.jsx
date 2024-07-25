import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import AddBooks from '../AddBooks'
import About from '../About'
import Users from '../Users'
import AddUsers from './AddUsers'
import Logout from '../Logout'

const AdminPortal = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books'/>
        <Route element={<ReadBooks/>} path='/readbooks/:id'/>
        <Route element={<AddBooks/>} path='/addbooks'/>
        {/* <Route element={<About/>} path='/about'/> */}
        <Route element={<Users/>} path='/users'/>
        <Route element={<AddUsers/>} path='addusers'/>
        <Route element={<Logout/>} path='logout'/>
      </Routes>
    </>
  )
}

export default AdminPortal
