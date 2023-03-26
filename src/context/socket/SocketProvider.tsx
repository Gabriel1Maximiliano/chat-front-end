import { SocketContext } from "./SocketContext"
import { useSockets } from '../../hooks/useSockets';
import { useEffect, useContext } from 'react';
import { AuthContex } from '../auth/AuthContex';
import { ChatContext } from '../chat/ChatContext';




export const SocketProvider = ( { children }:any ) => {

    const { socket,onLine,connectSocket,disconnectSocket } = useSockets( 'http://localhost:8080');

    const { auth } = useContext( AuthContex );
    const { chargeListUsers } = useContext( ChatContext );

    useEffect(() => {
      if( auth.logged ){
        connectSocket();
      }
      
    }, [auth])

    useEffect(() => {
        if( !auth.logged ){
            disconnectSocket()
        }
        
      }, [auth,disconnectSocket])


      useEffect(() => {
       socket?.on('list-users', (users:any) =>{
        chargeListUsers( users );
       } );
        
      }, [socket])
    
  return (
    <SocketContext.Provider value={{
      socket,
      onLine
    }}>
        { children }
    </SocketContext.Provider>
  )
}
