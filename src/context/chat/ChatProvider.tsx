import React, { useReducer } from 'react'
import { ChatContext } from './ChatContext';
import { ChildrenProps } from '../../interfaces/interfaces';
import { chatReducer } from './chatReducer';
 export interface  initialStateChatProps {

    uid       :string;
    activeChat:string;
    users     :any[];
    messages  : any[];
    //  uid del user  al que quiero mensajear

 }

const initialChatState:initialStateChatProps = {
    uid: '',
    activeChat: '',
    users: [],
    messages: []
}

export const ChatProvider = ({ children }: ChildrenProps ) => {

    const [ chatState, dispatch ] = useReducer(chatReducer, initialChatState );

    const chargeListUsers = ( users:any ) =>{
      dispatch({type:'[ Chat-Reducer ] Login-User ',payload:users})
    }

  return (
    <ChatContext.Provider value={{ 
        chatState,
        chargeListUsers,

     }}>
        { children }
    </ChatContext.Provider>
  )
}
