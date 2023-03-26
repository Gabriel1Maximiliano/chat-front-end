import React from 'react'
import { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';

export const SideBarChat = ({user}:any) => {
  const { uid } = user

  const { activateChatRoom } = useContext( ChatContext )

  const handleActiveChatRoom = ()=>{
     activateChatRoom(uid);
  }

  const { name,onLine } = user;
  return (
    <div 
    className="chat_list"
    onClick={ handleActiveChatRoom }
    >
         {/* active_chat" */}
       <div className="chat_people">
           <div className="chat_img"> 
               <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
           </div>
           <div className="chat_ib">
               <h5>{ name }</h5>
               {
                onLine 
                ? <span className="text-success" style={{color:'green'}}>Online</span>
                : <span className="text-reset"style={{color:'red'}}>Offline</span>
               }
               
               
           </div>
       </div>
   </div>
  )
}
