import { user_action_types } from './user-action-types';
export const set_current_user=(user)=>{
    return{
        type:user_action_types.SET_CURRENT_USER,
        payload:user
    }
}