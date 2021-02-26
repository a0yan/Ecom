import React from 'react'
import styles from './homepage.module.css'
import Directory from '../components/directory/directory.component'
const homepage = () => {
    return (
        <div className={styles.homepage}>
        <Directory/>
        </div>
    )
}
export default homepage