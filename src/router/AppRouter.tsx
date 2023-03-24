import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage,ChatPage } from '../pages'


import '../css/login-register.css'
import { AuthProvider } from '../auth/AuthProvider'
import { useContext, useEffect } from 'react';
import { AuthContex } from '../auth/AuthContex';
export const AppRouter = () => {

const {auth, verifyToken } =useContext( AuthContex );

console.log({auth})

useEffect(() => {
  const token = verifyToken()
  
}, [])

if( auth.checking ){
 return<h1>espere</h1>
}






  return (
   
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

         
        
    
  )
}
