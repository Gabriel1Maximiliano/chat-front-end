import React from "react";
import { IncommingMessage } from "./IncommingMessage";
import { OutGoingMessage } from "./OutGoingMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
        <IncommingMessage />
        <OutGoingMessage />

        <SendMessage />
      </div>
      {/* <!-- Historia Fin -->*/}
    </div>
  );
};
