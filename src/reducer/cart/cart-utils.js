export const add_cart_item=(cart_items,item_to_add)=>{
const existing_cart_item=cart_items.find(cart_item=>(
    cart_item.id===item_to_add.id
))
if (existing_cart_item){
    return cart_items.map(cart_item=>(
        cart_item.id===item_to_add.id?{...cart_item,quantity:cart_item.quantity+1}:{...cart_item}
    ))
}
else{
    return[...cart_items,{...item_to_add,quantity:1}]
}
}
export const remove_cart_item=(cart_items,item_to_remove)=>{
    const existing_cart_item=cart_items.find(item=>item.id===item_to_remove.id)
    if(existing_cart_item){
        if(item_to_remove.quantity===1){
            return cart_items.filter(item=>item.id!==item_to_remove.id)
        }
        else{
            return cart_items.map(item=>(
                item.id===item_to_remove.id?{...item,quantity:item.quantity-1}:{...item}
            ))
        }
    }
}