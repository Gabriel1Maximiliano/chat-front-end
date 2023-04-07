import React from "react";
import { IncommingMessage } from "./IncommingMessage";
import { OutGoingMessage } from "./OutGoingMessage";
import { SendMessage } from "./SendMessage";
import { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { AuthContex } from '../context/auth/AuthContex';

export const Messages = () => {

  const { chatState } = useContext( ChatContext );
  const { auth } = useContext( AuthContex );
  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">

        {
          chatState.messages.map( ( msg:any,index ) => (
            ( msg.to === auth.uid )
            ?  <IncommingMessage key={ index }/>
            : <OutGoingMessage key={ index }/>
          ) )
        }
       
        <OutGoingMessage />

        <SendMessage />
      </div>
      {/* <!-- Historia Fin -->*/}
    </div>
  );
};
