import { initialStateChatProps } from "./ChatProvider";



type ActionChat = 
| { type:'[ Chat-Reducer ] Login-User ',payload:any }

export const chatReducer = ( state:any, action:ActionChat  ):initialStateChatProps => {

    switch( action.type ){
        case '[ Chat-Reducer ] Login-User ':
        return {
         ...state,
         users:[...action.payload]
        }

        default:
            return state;
    }

}
