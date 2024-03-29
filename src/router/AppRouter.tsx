import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, ChatPage } from "../pages";

import "../css/login-register.css";

import { useContext, useEffect, useState } from 'react';
import { AuthContex } from "../context/auth/AuthContex";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {

  const { auth, verifyToken } = useContext(AuthContex);




  useEffect(() => {
    const token = verifyToken();
  
  }, []);

  if (auth?.checking ) {
     
    return <h1>espere</h1>;
  }

  return (
    <div className="container">
      <div className="container-login100">
        <div className="wrap-login10 p-t-50 p-b-90">
          <Routes>
            <Route
              path="/*"
              element={
                <PublicRouter>
                 <LoginPage />
                </PublicRouter>
              }
            />
          
             <Route  path="/auth/register" element={ <RegisterPage /> }/>
            <Route
              path="/home-chat-page"
              element={
                <PrivateRouter>
                  <ChatPage />
                </PrivateRouter>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
