import { cartActions } from "./cart-types";
export const toggle_cart=()=>({type:cartActions.TOGGLE_CART})
export const add_item=(item)=>({type:cartActions.ADD_ITEM,payload:item})
export const clear_item_from_cart=(item)=>(
    {
        type:cartActions.CLEAR_ITEM_FROM_CART,
        payload:item
    }
)
export const remove_item=(item)=>(
    {
        type:cartActions.REMOVE_ITEM,
        payload:item
    }
)