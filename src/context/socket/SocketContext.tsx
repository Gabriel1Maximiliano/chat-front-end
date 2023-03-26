import { useContext, createContext } from 'react';

interface Props {
    name:string
}
export const SocketContext = createContext<any>( {} as any );