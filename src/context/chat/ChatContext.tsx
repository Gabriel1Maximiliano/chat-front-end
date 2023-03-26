import { createContext } from 'react';
import { initialStateChatProps } from './ChatProvider';


export interface ChatContextProps {
    // state
    chatState: initialStateChatProps;

    //Methods

    dispatch: React.Dispatch<{
        type: "[ Chat-Reducer ] Login-User ";
    }>
}

export const ChatContext = createContext( {} as ChatContextProps );
