import { initialStateChatProps } from "./ChatProvider";



type ActionChat = 
| { type:'[ Chat-Reducer ] Charge-List-Users ',payload:any }
| { type:'[ Chat-Reducer ] Activate-Chat-Room',payload:any }
| { type:'[ Chat-Reducer ] New-Message',payload:any }

export const chatReducer = ( state:initialStateChatProps, action:ActionChat  ):initialStateChatProps => {

    switch( action.type ){
        case '[ Chat-Reducer ] Charge-List-Users ':
        return {
         ...state,
         users:[...action.payload]
        }
        case '[ Chat-Reducer ] Activate-Chat-Room':

        if( state.activeChat === action.payload ) return state;
            return {
             ...state,
             activeChat: action.payload,
             messages:[],
            }
        case '[ Chat-Reducer ] New-Message':
            console.log(action.payload.message)
            return {
             ...state,
             messages: [...state.messages,action.payload]
             }    

        default:
            return state;
    }

}
