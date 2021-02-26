import React from 'react'
import styles from './cart_item.module.css'
const cartItem = (props) => {
    return (
        <div className={styles.cart_item}>
            <img className={styles.img} src={props.imageUrl} alt='item' />
            <div className={styles.item_details}>
                <span className={styles.name}>{props.name}</span>
                <span className={styles.quantity}>{props.quantity}x{props.price}</span>
            </div>
        </div>
    )
}
export default cartItem