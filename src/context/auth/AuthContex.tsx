import  { createContext } from 'react'
import { InitialStateProps } from '../../interfaces/interfaces';



export interface ContextAuthProps {
    //props
    auth        :InitialStateProps;


    //Methods
    loginUSer   : ( email: string, password: string ) => Promise<any>
    registerUser: ( email: string, name: string, password: string ) => Promise<any>
    verifyToken : () => void;
    logoutUser  : () => void;


}
export const AuthContex = createContext( {} as ContextAuthProps );
