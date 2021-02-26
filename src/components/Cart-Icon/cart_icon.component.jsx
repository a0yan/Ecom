import React from 'react'
import { ReactComponent as ShoppingBag } from "../../assets/11.2 shopping-bag.svg.svg";
import styles from './cart_icon.module.css'
import {connect} from 'react-redux'
import {selectCartItemsCount} from '../../reducer/cart/cart-selector'
import {createStructuredSelector} from 'reselect'
const cart=(props)=>{
    return(
        <div className={styles.cart_icon}>
            <ShoppingBag className={styles.shopping_icon}/>
            <span className={styles.count_icon}>{props.total_items}</span>
        </div>
    )
}
const mapStatetoProps=createStructuredSelector({
    total_items: selectCartItemsCount
})
export default connect(mapStatetoProps)(cart)