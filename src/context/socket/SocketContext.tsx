import { createContext } from 'react';

interface SocketsProps {
    socket:any,
    onLine:boolean;
}
export const SocketContext = createContext<any>( {} as SocketsProps );