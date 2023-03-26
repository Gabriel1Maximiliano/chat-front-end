import { createContext } from 'react';
import { initialStateChatProps } from './ChatProvider';


export interface ChatContextProps {
    // state
    chatState: initialStateChatProps;

    //Methods

    chargeListUsers: (users: any) => void
}

export const ChatContext = createContext( {} as ChatContextProps );