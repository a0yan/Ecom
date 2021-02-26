import React from 'react'
import styles from './collection_preview.module.css'
import Collectionitem from '../../components/collectionitem/collectionitem.components'
import {Link} from 'react-router-dom'
const collectionpreview=(props)=>{
    const collitem=props.items.filter((item,idx)=>idx<4).map((item)=>{
        return(
            <Collectionitem key={item.id} item={item} {...item}/>
        )
    })
    return(
        <div className={styles.collection_preview}>
            <Link to={`${props.link}/${props.title.toLowerCase()}`}><div className={styles.title} ><h1>{props.title.toUpperCase()}</h1></div></Link>
            <div className={styles.preview}>
            {collitem}
            </div>
        </div>
    )
    }
    export default collectionpreview