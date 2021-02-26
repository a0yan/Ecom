import React from 'react'
import styles from './Custombutton.module.css'
const custombutton = (props) => {
    const cls=[styles.custombutton]
    if (props.Google){
        cls.push(styles.google_signin)
    }
    if (props.large){
        cls.push(styles.large)
    }
    if (props.collection_item){
        cls.push(styles.collection_item)
    }
    return (
        <button  className={cls.join(' ')} {...props} onSubmit={props.submit}>{props.children}</button>
    )
}
export default custombutton