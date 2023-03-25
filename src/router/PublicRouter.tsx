import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../context/auth/AuthContex";
import { ChildrenProps } from "../interfaces/interfaces"
import { LoginPage } from "../pages";

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

export const PublicRouter = ( { children }: any ) => {

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
