import React from 'react'
import Collectionpreview from '../../page components/collectionpreview/collectionpreview.component'
import {selectShopitemsPreview} from '../../reducer/shop_data/shopdata-selector'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import styles from './collection_overview.module.css'
const collectionoverview=(props)=>{
    const previews=props.shopitems.map((item)=>{
        return(
            <Collectionpreview key={item.id} {...item} link={props.match.path}/>
        )
    })

    return(
        <div className={styles.collectionoverview} >
        {previews}
        </div>
    )
}
const mapStatetoProps=createStructuredSelector({
    shopitems:selectShopitemsPreview
})
export default connect(mapStatetoProps)(collectionoverview)