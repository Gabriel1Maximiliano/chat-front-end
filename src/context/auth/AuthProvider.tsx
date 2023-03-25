import { useCallback, useState } from "react";
import socketApi from "../../api/socketApi";
import { InitialStateProps, InitialState, ChildrenProps } from '../../interfaces/interfaces';

import { AuthContex } from "./AuthContex";





export const AuthProvider = ( { children }: ChildrenProps ) => {

  const token = localStorage.getItem( "token" );

  const [ auth, setAuth ] = useState<InitialStateProps>( InitialState );

  const loginUSer = async ( email: string, password: string ) => {

    try {
      const { data } = await socketApi.post("/login/loginUser", {
        email,
        password,
      });

      if (data.ok) {
        const { name, email, onLIne, uid } = data.user;

        localStorage.setItem( "token", data.token );

        setAuth((prev) => ({
          ...prev,
          uid,
          name,
          email,
          checking: false,
          logged: true,
        }));
      }
      return data.ok;
    } catch ( error: any ) {
      return error.response.data.msg;
    }
  };

  const registerUser = async (

    email   : string,
    name    : string,
    password: string

  ) => {
    try {
      console.log("registro");

      const { data } = await socketApi.post("/login/newUser", {
        email,
        name,
        password,
      });
      if (data.ok) {
        const { name, email, uid } = data.user;

        localStorage.setItem( "token", data.token );

        setAuth({
          uid,
          name,
          email,
          checking: false,
          logged: true,
        });
      }
      //console.log(data);

      return data.ok;
    } catch (error: any) {
      console.log( error.response.data.msg );

      return error.response.data.msg;
    }
  };

 

  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem('token');
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDFlMjI3YzNlNmI3OWU3YmZhZjg3NTQiLCJpYXQiOjE2Nzk3MDAxODksImV4cCI6MTY3OTc4NjU4OX0.m5px97kg7UvkaxsOXrWqm68XGTBDlU6j_qYShlaNRuI";
    if ( !token ) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }

    const { data } = await socketApi.get("/login/renewToken", {
      headers: { "x-token": token },
    });
   
    //return 'hola'

    if ( data.ok ) {
      const { name, email, uid } = data.user;

      localStorage.setItem("token", data.token);

      setAuth({
        uid,
        name,
        email,
        checking: false,
        logged: true,
      });

      return true;
    } else {
      setAuth({
        uid     : null,
        name    : null,
        email   : null,
        checking: false,
        logged  : false,
      });

      return false;
    }
  }, []);

  const logoutUser = () =>{
    localStorage.removeItem( 'token' );
    setAuth({
      uid     : null,
      name    : null,
      email   : null,
      checking: false,
      logged  : false,
  })
  }

  return (
    <AuthContex.Provider
      value={{
        auth,
        loginUSer,
        registerUser,
        verifyToken,
        logoutUser,
      }}
    >
      { children }
    </AuthContex.Provider>
  );
};
