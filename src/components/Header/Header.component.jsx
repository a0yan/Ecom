import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'
import styles from './Header.module.css'
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import Cart from '../Cart-Icon/cart_icon.component'
import CartDropdown from '../Cart-Dropdown/cart_dropdown_component'
import { toggle_cart } from "../../reducer/cart/cart-actions";
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser,selectHidden} from '../../reducer/user/user-selector'
const header=(props)=>{
    return(
    <div className={styles.header}>
        <div className={styles.header_logo}>
            <Link to="/"><Logo/></Link>
        </div>
        <div className={styles.options}>
        <div className={styles.option}><Link to='/shop'>SHOP</Link></div>
        <div className={styles.option}>CONTACT</div>
        {props.currentUser?
        <div className={styles.option} onClick={()=>auth.signOut()}>SIGN OUT</div>:
        <div className={styles.option}><Link to ='/signin'>SIGN IN</Link></div>}
        <div className={styles.option} onClick={props.toggle} ><Cart/></div>
        </div>
        {props.hidden?null:<CartDropdown />}
    </div>
    )}
    const mapStateToProps=createStructuredSelector({
        currentUser:selectCurrentUser,
        hidden:selectHidden
    })
    const mapDispatchtoProps=(dispatch)=>( 
        {
            toggle:()=>(dispatch(toggle_cart()))
        }
    )
export default connect(mapStateToProps,mapDispatchtoProps)(header)