import { ChatSelect } from "../components/ChatSelect";
import { InBoxPeople2 } from "../components/InBoxPeople2";
import { Messages } from "../components/Messages";
import "../css/chat.css";
import { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';

export const ChatPage = () => {

  const { chatState } = useContext( ChatContext );
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InBoxPeople2 />

        
        {
           (chatState.activeChat)
           ?<Messages />
           :<ChatSelect />
        }
        
      </div>
    </div>
  )
};
