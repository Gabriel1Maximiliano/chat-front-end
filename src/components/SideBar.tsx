import { SideBarChat } from "./SideBarChat"
import { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { AuthContex } from '../context/auth/AuthContex';


export const SideBar = () => {

  const { chatState } = useContext( ChatContext );

  const { auth } = useContext( AuthContex );
  const { users } = chatState;
  console.log(chatState,'en sidebar')
  return (
    
  
   <div className="inbox_chat">
   

  {
    users.filter( user =>user.uid !== auth.uid ).map( ( user )=>(
      
      <SideBarChat key={user.uid}
      user={ user }
      />
    ) )
  }
   
   
   {/* <!-- Espacio extra para scroll --> */}
   <div className="extra_space"></div>
   </div>





  )
}
