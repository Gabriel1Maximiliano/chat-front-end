import  { createContext } from 'react'
import { InitialStateProps } from './AuthProvider';


export interface ContextProps {
    //props
    auth:InitialStateProps;


    //Methods
    loginUSer: (email: string, password: string) => Promise<any>
    registerUser: (email: string, name: string, password: string) => Promise<any>
    verifyToken : () => void;


}
export const AuthContex = createContext({} as ContextProps);
