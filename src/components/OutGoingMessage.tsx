import { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";


export const OutGoingMessage = () => {

    const { chatState } = useContext( ChatContext )
     const { messages } = chatState;

  return (
    
      <div className="outgoing_msg">
          <div className="sent_msg">
               { messages.map( ((msg:any,index)=>(
                 <p key={index} >{ msg.message }</p> 
            ) ) ) }
              <span className="time_date"> 11:01 AM | June 9</span>
          </div>
      </div>
     
  )
}
