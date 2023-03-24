import { useCallback, useState } from "react";
import socketApi from "../api/socketApi";
//import { fetchWithoutToken } from "../helpers/fetch";
import { AuthContex } from "./AuthContex"



export interface AuthProviderProps {
    children?: JSX.Element | JSX.Element[]
}

export interface InitialStateProps extends AuthProviderProps {
    uid     :string | null;
    checking:boolean;
    logged  :boolean;
    name    :string | null;
    email   :string | null;
}

const InitialState:InitialStateProps = {
    uid     : null,
    checking: true,
    logged  : false,
    name    : null,
    email   : null                 
}

export const AuthProvider = ( { children }:AuthProviderProps ) => {


    const [auth, setAuth] = useState<InitialStateProps>(InitialState);

    const loginUSer = async( email:string, password:string )=>{
  try {
    
    const { data } = await socketApi.post('/login/loginUser',{ email,password });
    console.log(data)
    if( data.ok ){

      const { name,email,onLIne,uid } = data.user;
       localStorage.setItem('token', data.token);
       setAuth({
         uid,
         name,
         email,
         checking:false,
         logged:true,
       })

    }
    return data.ok;
  } catch (error) {
    console.log(error)
    return false;
    
  }

     
    }
    
    const registerUser = (  email:string, name:string, password:string )=>{
        
    }
    const verifyToken = useCallback( () => {

    },
    
      []
    )
    


  return (
    <AuthContex.Provider value={{
        loginUSer,
        registerUser,
        verifyToken,
        auth,
    }}>
      {children}
    </AuthContex.Provider>
  )
}
