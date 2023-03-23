import React from 'react'

export const SideBarChat = () => {

  return (
    <div className="chat_list">
         {/* active_chat" */}
       <div className="chat_people">
           <div className="chat_img"> 
               <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
           </div>
           <div className="chat_ib">
               <h5>Some random name</h5>
               <span className="text-success" style={{color:'green'}}>Online</span>
               <span className="text-reset"style={{color:'red'}}>Offline</span>
           </div>
       </div>
   </div>
  )
}
