import { initialStateChatProps } from "./ChatProvider";



type ActionChat = 
| { type:'[ Chat-Reducer ] Charge-List-Users ',payload:any }
| { type:'[Chat-Reducer] Activate-Chat-Room',payload:any }

export const chatReducer = ( state:any, action:ActionChat  ):initialStateChatProps => {

    switch( action.type ){
        case '[ Chat-Reducer ] Charge-List-Users ':
        return {
         ...state,
         users:[...action.payload]
        }
        case '[Chat-Reducer] Activate-Chat-Room':

        if( state.activeChat === action.payload ) return state;
            return {
             ...state,
             activeChat: action.payload,
             messages:[],
            }

        default:
            return state;
    }

}
