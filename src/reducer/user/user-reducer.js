import {user_action_types} from './user-action-types'
const initial_state={
    currentUser: null
}
const userreducer=(state=initial_state,action)=>{
    switch (action.type) {
        case user_action_types.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
            
    
        default:
            return state
    }
}
export default userreducer