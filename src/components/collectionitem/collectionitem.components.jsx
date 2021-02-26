import React from 'react'
import styles from './collectionitem.module.css'
import Custombotton from "../Custom-Button/Custombotton.component";
import { connect } from "react-redux";
import { add_item } from "../../reducer/cart/cart-actions";
import {selectCartItems} from '../../reducer/cart/cart-selector'
import { createStructuredSelector } from "reselect";
const collectionitem = (props) => {
    return (
        <div className={styles.collection_item}>
            <div className={styles.image} style={{ 'backgroundImage': `url(${props.imageUrl})` }}></div>
            <div className={styles.collection_footer}>
                <span className={styles.name}>{props.name.toUpperCase()}</span>
                <span className={styles.price}>{props.price}</span>
            </div>
            <Custombotton onClick={()=>props.Add_item(props.item)} collection_item='true'>ADD TO CART</Custombotton>
        </div>
    )
}
const mapStatetoProps=createStructuredSelector(
    {
        currentitems:selectCartItems
    }
)
const mapDispatchtoProps=dsipatch=>({
    Add_item:(item)=>dsipatch(add_item(item))
})
export default connect(mapStatetoProps,mapDispatchtoProps)(collectionitem)