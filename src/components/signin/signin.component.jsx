import React,{useState} from 'react'
import FormInput from '../forminput/forminput.components'
import styles from './signin.module.css'
import Custombutton from '../Custom-Button/Custombotton.component'
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth} from '../../firebase/firebase.utils'
const SignIn=(props)=>{
    const [usercred,setUser]=useState({email:'',password:''})

    const handleSubmit = async(e) => {
        e.preventDefault()
        const {email,password}=usercred
        try{
            await auth.signInWithEmailAndPassword(email,password)
            const new_usercred={usercred}
            new_usercred.email=''
            new_usercred.password=''
        setUser(new_usercred)
        }
        catch(error){
            alert(error.message)
        }

    }
    const change = (e) => {
        const { name, value } = e.target
        setUser({...usercred,[name]:value})
    }
        return (
            <div className={styles.signin}>
                <h1>I already have an account</h1>
                <span>Sign in using email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput name='email' type='email' value={usercred.email} mc={change} label='E-mail' />
                    <FormInput name='password' type='password' value={usercred.password} mc={change} label='Password' />
                    </form>
                    <div className={styles.buttons}>
                        <Custombutton type='submit' onClick={handleSubmit}>SIGN IN</Custombutton>
                        <Custombutton  Google onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Custombutton>
                    </div>
            </div>
        )
    
        }
export default SignIn