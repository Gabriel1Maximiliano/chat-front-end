import { useState, useContext } from 'react';
import { SocketContext } from '../context/socket/SocketContext';
import { AuthContex } from '../context/auth/AuthContex';
import { ChatContext } from '../context/chat/ChatContext';


export const SendMessage = () => {

  const [ message, setMessage ] = useState('');

  const { socket } = useContext( SocketContext );

  const { auth } = useContext( AuthContex );

  const { chatState } = useContext( ChatContext );


const handelInputChange = ({ target }:any)=>{
  console.log('hola')
   
const { value } = target;

setMessage( value );
console.log({message})


  }

const handleSubmit = ( ev:any)=>{
 ev.preventDefault();

 if( message.length === 0 ) return;
 console.log(message)
 setMessage( '' );
 
         //TODO Emitir evento de sockets para enviar msg
  //  {
        //     from://UID del usuario enviando el msg
        //     to: //UID del usuario que recibe msg
        //     message://lo que quiero enviar
        //  }

        //TODO hacer el dipatch del msg 

        socket?.emit('personal-message',{
          from:auth.uid,
          to:chatState.activeChat,
          message
        })
 
}
  return (
<form onSubmit={ handleSubmit }>
<div className="type_msg row">
    <div className="input_msg_write col-sm-9">
        <input 
        type="text" 
        className="write_msg"
         placeholder="Mensaje..."
         value={ message }
         onChange={ handelInputChange }
         />
    </div>
    <div className="col-sm-3 text-center">
        <button 
        className="msg_send_btn mt-3" 
        type="submit"
       
        >
            enviar
        </button>
    </div>
</div>
</form>
  )
}
