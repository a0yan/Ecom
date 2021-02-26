import React from 'react'
import styles from './Checkout_item.module.css'
import { connect } from "react-redux";
import { clear_item_from_cart,add_item,remove_item } from '../../reducer/cart/cart-actions.js'
const checkoutItem = (props) => {
    return (
        <div className={styles.checkout_item}>
            <div className={styles.image_container}><img className={styles.img} src={`${props.item.imageUrl}`} alt='item' /></div>
            <div className={styles.name}>{props.item.name}</div>
            <div className={styles.quantity}>
                <div className={styles.arrow} onClick={()=>props.remove_item(props.item)}>&#10094;</div>
                <span className={styles.value}>{props.item.quantity}</span>
                <div className={styles.arrow} onClick={()=>props.add_item(props.item)}>&#10095;</div>
            </div>
            <div className={styles.price}>{props.item.price*props.item.quantity}</div>
            <div className={styles.remove_button} onClick={() => props.clear_item(props.item)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => (
    {
        clear_item: (item) => dispatch(clear_item_from_cart(item)),
        add_item:(item)=>dispatch(add_item(item)),
        remove_item:(item)=>dispatch(remove_item(item))
    })
export default connect(null, mapDispatchToProps)(checkoutItem)