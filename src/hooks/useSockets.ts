import { useEffect, useMemo, useState, useCallback } from 'react';
import io from "socket.io-client";


export const test = 0;


export const useSockets = (   serverPath:any  ) => {

    //const socket = useMemo(() =>io(serverPath, {transports: ["websocket","polling","flashsocket"],}) , [serverPath]); 
    const token = localStorage.getItem('token');
    
    const [socket, setSocket] = useState<any>(null);
    const [onLine, setOnLine] = useState<boolean>(false);

    const connectSocket = useCallback(
      () => {
       const tempSocket = io(
        serverPath,
         {
            transports: ["websocket","polling","flashsocket"],
            autoConnect:true,
            forceNew:true,
            query:{
                'x-token':token
            },
        
        });

       setSocket( tempSocket );
      },
      [ serverPath,token ],
    )
    
    const disconnectSocket = useCallback(
        () => {
            socket?.diconnect();
        },
        [ serverPath,socket ],
      )
    
    useEffect(() => {
    
        setOnLine(socket?.connected);
      }, [socket]);
    
      useEffect(() => {
        socket?.on("connect", () => {
          setOnLine(true);
        });
      }, [socket]);
    
      useEffect(() => {
        socket?.on("disconnect", () => {
          setOnLine(false);
        });
      }, [socket]);
      return {
        socket,
        onLine,
        connectSocket,
        disconnectSocket,
      }
}