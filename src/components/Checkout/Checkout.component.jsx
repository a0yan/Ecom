import React from 'react'
import styles from './Checkout.module.css'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsPrice } from "../../reducer/cart/cart-selector"
import CheckoutItem from '../Checkout-item/Checkout_item.component'
import StripePayment from '../StripePayment-Button/stripe_payment_button.component'
const checkout = (props) => {
    let items = props.cart_items.map(el => <CheckoutItem item={el} />)
    return (
        <div className={styles.checkout_page}>
            <div className={styles.checkout_header}>
                <div className={styles.header_item}>
                    <span>Product</span>
                </div>
                <div className={styles.header_item}>
                    <span>Description</span>
                </div>
                <div className={styles.header_item}>
                    <span>Quantity</span>
                </div>
                <div className={styles.header_item}>
                    <span>Price</span>
                </div>
                <div className={styles.header_item}>
                    <span>Remove</span>
                </div>
            </div>
            {items}
            <div className={styles.total}>TOTAL<span> &ensp; &ensp; &ensp;₹{props.total_price} </span></div>
            <div className={styles.warning}>
                Please use Following Card details
                <br/>
                4242 4242 4242 4242
                <br/>
                Exp-01/22 &ensp; &ensp; CVV-123
            </div>
            <StripePayment price={props.total_price} />
        </div>
    )
}
const mapStatetoProps = createStructuredSelector(
    {
        cart_items: selectCartItems,
        total_price: selectCartItemsPrice
    }
)


export default connect(mapStatetoProps)(checkout)