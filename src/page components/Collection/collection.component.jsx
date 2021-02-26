import React from 'react'
import styles from './collection.module.css'
import CollectionItem from '../../components/collectionitem/collectionitem.components'
import { connect } from 'react-redux'
import { selectCollectionItem } from '../../reducer/shop_data/shopdata-selector';
const collection = (props) =>{
    console.log(props)
    return (
        <div className={styles.collection_page}>
            <h1 className={styles.title}>{props.collection.title}</h1>
            <div className={styles.collection}>
                {props.collection.items.map(item => <CollectionItem key={item.id} item={item} {...item} />)}
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownprops) =>{
    return({
        collection: selectCollectionItem(ownprops.match.params.collectionId)(state) 
})}
export default connect(mapStateToProps)(collection)