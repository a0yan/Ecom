import React from 'react'
import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'
import styles from './signinandsignup.module.css'
const sign_page = () => {
    return (
        <div className={styles.authpage}>
            <Signup />
            <Signin />
        </div>
    )
}
export default sign_page