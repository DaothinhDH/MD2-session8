import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PriveRouter() {
  // Navigate khác useNavigate
  // Navigate chuyển hướng router và render component
    const isLogin = false
  return (
     isLogin ? <Outlet /> : <Navigate to = {"/login"}/>
  )
}
