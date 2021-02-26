import React from 'react'
import StripePayment from 'react-stripe-checkout'
const stripepayment=(props)=>{
    const stripePrice=props.price*100
    const publishableKey='pk_test_51IJLaqFJJKUJ3EFT9AC6Mw5vrty9f5Wewod02zTTqz2QurY5UZ2WTFGAtFB6zWduni8cjMQJqwdObxXal5HvLpHA00xB1ADQ74'
    const ontoken=token=>{
        console.log(token)
        alert('Payment Succesful')
    }
    return(
        <div>
            <StripePayment
                name='Crown Clothing Inc.'
                billingAddress
                shippingAddress
                stripeKey={publishableKey}
                currency='inr'
                amount={stripePrice}
                label='Pay Now'
                image='https://sendeyo.com/up/d/f3eb2117da'
                panelLabel='Pay Now'
                token={ontoken}
                description={`Your Total Price is ₹ ${props.price}`}
            />
        </div>
    )
}
export default stripepayment