import { createSelector } from 'reselect';
const selectCart=state=>state.cart
export const selectCartItems=createSelector(
    [selectCart],
    (cart)=>cart.cart_items)
export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (cart_items)=>cart_items.reduce((acc,cv)=>(acc+cv.quantity),0)
)
export const selectCartItemsPrice=createSelector(
    [selectCartItems],
    (cart_items)=>(cart_items.reduce((acc,cv)=>acc+cv.quantity*cv.price,0))
)