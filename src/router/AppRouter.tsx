import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ChatPage, LoginPage, RegisterPage } from '../pages'

export const AppRouter = () => {
  return (
     <BrowserRouter>
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/" element={<ChatPage />}/>
                <Route path="*" element={<Navigate to="/" replace={true}  />}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
