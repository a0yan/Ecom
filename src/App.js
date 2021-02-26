import { React,useEffect } from "react";
import Homepage from './page components/homepage.component.jsx'
import './App.css'
import { Route,Redirect } from 'react-router-dom'
import Shoppage from './page components/shoppage/shop.component'
import Header from './components/Header/Header.component'
import SigninSignup from './page components/sign_in and sign_up/sign_in and sign_up.component'
import { auth, createUserProfile } from "./firebase/firebase.utils";
import {connect} from 'react-redux'
import {set_current_user} from './reducer/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './reducer/user/user-selector'
import Checkout from './components/Checkout/Checkout.component'
import { selectShopitemsPreview } from "./reducer/shop_data/shopdata-selector";
import { addcollectionAndDocument } from './firebase/firebase.utils';
const App=(props)=> {
  let unSubscribeFroumAuth=null
  useEffect(()=>{
    addcollectionAndDocument('collections',props.collection_arr.map(({title,items})=>({title,items})))//one time only to add shopitem to firebase
    const user_checker=async()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unSubscribeFroumAuth = auth.onAuthStateChanged(async (userData) => {
      const user = await createUserProfile(userData);
      const setUser = props.setUser;
      if (user) {
        (user.onSnapshot(snapshot => {
          setUser(
            {
              id: snapshot.id,
              data: snapshot.data()
            }
          );
        }));
      }
      else {
        setUser(null);
      }
    })
  }
  user_checker()
  return ()=>unSubscribeFroumAuth()  
},[])
    return (
      <div>
        <Header />
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route  exact path='/signin' render={()=>props.currentUser?<Redirect to='/'/>:<SigninSignup/>}/>
        <Route exact path='/checkout' component={Checkout}/>
      </div>)
  }
const mapDispatchtoProps=(dispatch)=>({
  setUser:(user)=>dispatch(set_current_user(user))
})
const mapStatetoProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  collection_arr:selectShopitemsPreview

})
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
