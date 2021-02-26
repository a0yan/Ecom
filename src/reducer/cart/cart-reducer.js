import { cartActions } from "./cart-types";
import { add_cart_item,remove_cart_item } from "./cart-utils";
const initial_state={
    hidden:true,
    cart_items:[]
}

const cartReducer=(state=initial_state,action)=>{
    switch (action.type) {
        case cartActions.TOGGLE_CART:
            return{
                ...state,
                hidden:!state.hidden
            }
        case cartActions.ADD_ITEM:
            return{
                ...state,
                cart_items:add_cart_item(state.cart_items,action.payload)
            }
        case cartActions.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cart_items:state.cart_items.filter(it=>it.id!==action.payload.id)
            }
        case cartActions.REMOVE_ITEM:
            return{
                ...state,
                cart_items:remove_cart_item(state.cart_items,action.payload)
            }

    
        default:
            return state
    }
}
export default cartReducer