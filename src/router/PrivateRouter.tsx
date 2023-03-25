import { ChildrenProps } from "../interfaces/interfaces"
import { useContext } from 'react';
import { AuthContex } from '../context/auth/AuthContex';
import { Navigate } from "react-router-dom";


export const PrivateRouter = ( { children }: ChildrenProps ) => {

     const { auth } = useContext( AuthContex );

     const { logged } = auth;

  return (
    <>
    {
        logged ?  children 
        : <Navigate to={'/auth/register'} />
    }
    
    </>
  )
}
