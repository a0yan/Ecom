// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "process.env.REACT_APP_API_KEY",
  authDomain: "e-com-f580a.firebaseapp.com",
  projectId: "e-com-f580a",
  storageBucket: "e-com-f580a.appspot.com",
  messagingSenderId: "515666919795",
  appId: "1:515666919795:web:73de77c9b78ee6c909c506",
  measurementId: "G-39Y576G145"
}
firebase.initializeApp(firebaseConfig)
export const auth=firebase.auth()
export const firestore=firebase.firestore()
export const createUserProfile=async(userData,additionalData)=>{
  if (!userData){
    return 
  }
  const userRef=await(firestore.doc(`users/${userData.uid}`))
  const snapshot=userRef.get()
  if (!snapshot.exists){
    const {displayName,email}=userData
    const createdAt=new Date()
    await(userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    }))
  }
  return userRef
}
export const addcollectionAndDocument=async(collectionid,objecttoadd)=>{
  const collectionRef=await firestore.collection(collectionid)    //Add collections to firebase
  const querySnapshot= await collectionRef.get()
  if (await(querySnapshot.empty)){
  const batch=firestore.batch()
  objecttoadd.forEach(obj => {
    const newDocRef=collectionRef.doc()
    batch.set(newDocRef,obj)
  });
await batch.commit()
  }
  else{
    console.log('already exists')
  }
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=async()=>auth.signInWithPopup(provider)
export default firebase
