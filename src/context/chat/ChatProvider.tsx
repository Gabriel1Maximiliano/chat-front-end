import React, { useReducer } from 'react'
import { ChatContext } from './ChatContext';
import { ChildrenProps } from '../../interfaces/interfaces';
import { chatReducer } from './chatReducer';
 export interface  initialStateChatProps {

    uid       :string;
    activeChat:string;
    users     :initialStateChatProps[];
    messages  : any[];
    //  uid del user  al que quiero mensajear

 }

export const initialChatState:initialStateChatProps = {
    uid       : '',
    activeChat: '',
    users     : [],
    messages  : []
}

export const ChatProvider = ({ children }: ChildrenProps ) => {

    const [ chatState, dispatch ] = useReducer(chatReducer, initialChatState );

    const chargeListUsers = ( users:any ) =>{
      dispatch({type:'[ Chat-Reducer ] Charge-List-Users ',payload:users})
    }

    const activateChatRoom = ( uid:string )=>{
      dispatch({ type:'[ Chat-Reducer ] Activate-Chat-Room' ,payload:uid})
    }
    const newMessage = ( message:string )=>{
      dispatch({ type:'[ Chat-Reducer ] New-Message',payload:message })
    }

  return (
    <ChatContext.Provider value={{ 
        chatState,
        chargeListUsers,
        activateChatRoom,
        newMessage

     }}>
        { children }
    </ChatContext.Provider>
  )
}
