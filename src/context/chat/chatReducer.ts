import { initialStateChatProps } from "./ChatProvider";



type ActionChat = 
| { type:'[ Chat-Reducer ] Charge-List-Users ',payload:any }

export const chatReducer = ( state:any, action:ActionChat  ):initialStateChatProps => {

    switch( action.type ){
        case '[ Chat-Reducer ] Charge-List-Users ':
        return {
         ...state,
         users:[...action.payload]
        }

        default:
            return state;
    }

}
