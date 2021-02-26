import {React,useState} from 'react'
import FormInput from '../forminput/forminput.components'
import CustomButton from '../Custom-Button/Custombotton.component'
import styles from './signup.module.css'
import {auth,createUserProfile} from '../../firebase/firebase.utils'
const Signup=(props)=> {
    const [userCred,setuserCred]=useState({displayName:'',email:'',password:'',confirmPassword:''})
    const handleChange=(event)=>{
        const {name,value}=event.target
        setuserCred({...userCred,[name]:value})
    }
    const handleSubmit=async(event)=>{
        event.preventDefault()
        const {displayName,email,password,confirmPassword}=userCred
        if(password!==confirmPassword){
            alert("Passwords don't match")
            return
        }
        else{
            try{
            const user=await auth.createUserWithEmailAndPassword(email,password)
            await(createUserProfile(user,{displayName}))}
            catch(error){
                console.log(error.message)
            }
            setuserCred({displayName:'',
            email:'',
            password:'',
            confirmPassword:''})
        }
    }
        return(
            <div className={styles.signup}>
                <h1>I do not have an account</h1>
                <form>
                    <FormInput name='displayName' type='text' value={userCred.displayName} label='Display Name' onChange={handleChange}/>
                    <FormInput name='email' type='email' value={userCred.email} label='Email' onChange={handleChange}/>
                    <FormInput name='password' type='password' value={userCred.password} label='Password' onChange={handleChange}/>
                    <FormInput name='confirmPassword' type='password' value={userCred.confirmPassword} label='Confirm Password' onChange={handleChange}/>

                </form>
                <CustomButton type='submit' onClick={handleSubmit}>SIGN UP</CustomButton>
            </div>
        )
    
}
export default Signup