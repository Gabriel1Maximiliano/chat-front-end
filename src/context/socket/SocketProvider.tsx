import { SocketContext } from "./SocketContext"
import { useSockets } from '../../hooks/useSockets';
import { useEffect, useContext } from 'react';
import { AuthContex } from '../auth/AuthContex';




export const SocketProvider = ( { children }:any ) => {

    const { socket,onLine,connectSocket,disconnectSocket } = useSockets( 'http://localhost:8080');

    const { auth } = useContext( AuthContex );

    useEffect(() => {
      if( auth.logged ){
        connectSocket();
      }
      
    }, [auth])

    useEffect(() => {
        if( !auth.logged ){
            disconnectSocket()
        }
        
      }, [auth])
    
  return (
    <SocketContext.Provider value={{}}>
        { children }
    </SocketContext.Provider>
  )
}
