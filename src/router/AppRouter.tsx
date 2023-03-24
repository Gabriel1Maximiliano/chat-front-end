import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage,ChatPage } from '../pages'


import '../css/login-register.css'
import { AuthProvider } from '../auth/AuthProvider'
export const AppRouter = () => {
  return (
    <AuthProvider>
    <div className="container">
		<div className="container-login100">
			<div className="wrap-login10 p-t-50 p-b-90">
   
       
            <Routes>
                <Route path="/auth/login" element={<LoginPage />}/>
                <Route path="/auth/register" element={<RegisterPage/>}/>
                <Route  path="/" element={<ChatPage/>}/>
                <Route path="*" element={<Navigate to="/" replace={true}  />}/>
            </Routes>
       
        </div>
        </div>
        </div>

         
        </AuthProvider>
    
  )
}
