import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../context/auth/AuthContex";
import { ChildrenProps } from "../interfaces/interfaces"


export const PublicRouter = ( { children }: ChildrenProps ) => {

    const { auth } = useContext( AuthContex );

    const { logged } = auth;
    
  return (
    <>
    {
       (!logged)
       ? children
       : <Navigate to="/home-chat-page" replace={true}  />
    }    
    </>
  )
}
