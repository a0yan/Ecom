import React from 'react'
import styles from './menuitem.module.css'
import {withRouter} from 'react-router-dom'
const menuitem=(props)=>{
    let classes=[styles.menu_item, styles[props.size]]
    return(
        <div className={classes.join(' ')} onClick={()=>props.history.push(`${props.match.url}${props.linkUrl}`)}>
        <div className={styles.Background} style={{backgroundImage:`url(${props.bg})`}}></div>
        <div className={styles.content}>
            <h1 className={styles.title}>{props.title}</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
        </div>
    </div>
    )

}
export default withRouter(menuitem)