import styles from './withSpinner.module.css'
const spinner=(
    <div className={styles.spinner_container}>
        <div className={styles.spinner}></div>
    </div>
)
const withSpinner=WrappedComponent=>(isLoading,otherProps)=> {
    console.log(isLoading)
    return isLoading?(<div>{spinner}</div>):<WrappedComponent {...otherProps} />
}
export default withSpinner