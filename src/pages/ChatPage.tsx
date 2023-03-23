import { ChatSelect } from "../components/ChatSelect";
import { InBoxPeople2 } from "../components/InBoxPeople2";
import { Messages } from "../components/Messages";
import "../css/chat.css";

export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InBoxPeople2 />

        <ChatSelect />
        <Messages />
      </div>
    </div>
  )
};
