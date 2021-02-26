import React from 'react'
import CustomButton from '../Custom-Button/Custombotton.component'
import styles from './cart_dropdown.module.css'
import CartItem from '../Cart-Item/cart_item.component'
import { connect } from 'react-redux';
import {selectCartItems} from '../../reducer/cart/cart-selector'
import {createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router-dom';
import { toggle_cart } from "../../reducer/cart/cart-actions";
const cart_dropdown=(props)=>{
    let items=null
    if(props.cart_items.length!==0){
     items=props.cart_items.map(item=>(
        <CartItem {...item} />
    ))
    }
    else{
         items=(<h3 className={styles.empty}>Your  Cart  Is  Empty</h3>)
    }
    
    return(
        <div className={styles.cart_dropdown}>
            <div className={styles.cart_items}>
                {items}
            </div>
            <CustomButton onClick={()=>{
                props.history.push('/checkout')
                props.dispatch(toggle_cart())
                }} large>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
const mapStatetoProps=createStructuredSelector(
    {
        cart_items:selectCartItems
    }
)
export default withRouter(connect(mapStatetoProps)(cart_dropdown))