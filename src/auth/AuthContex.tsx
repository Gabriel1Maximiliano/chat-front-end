import  { createContext } from 'react'
import { AuthProviderProps } from './AuthProvider';


export interface ContextProps {
    //props
    auth:AuthProviderProps;


    //Methods
    loginUSer: (email: string, password: string) => Promise<any>
    registerUser: (email: string, name: string, password: string) => void;
    verifyToken : () => void;

}
export const AuthContex = createContext({} as ContextProps);
