import {FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILED } from './shopdata-types';
import { firestore } from "../../firebase/firebase.utils";
export const fetchData=()=>{
    return dispatch=>{
        dispatch(fetchDataStart())
        const colRef = firestore.collection('collections')
        colRef.onSnapshot(async (snapshot) => {
            if (snapshot.empty){
                dispatch(fetchDataFailed('No Data Found'))
            }
            const arr = await snapshot.docs
            const shop_data = arr.reduce((acc, cv) => {
                acc[cv.data().title.toLowerCase()] = {
                    ...cv.data(),
                    id: cv.id,
                    routeName: encodeURI(cv.data().title.toLowerCase())
                }
                return acc
            }, {})
            dispatch(fetchDataSuccess(shop_data))
        })
        
    }
}

 const fetchDataSuccess=(data)=>(
    {
        type:FETCH_DATA_SUCCESS,
        payload:data
    }
)
 const fetchDataStart=()=>{
    return(
        {
            type:FETCH_DATA_START,
        }
    )
}
 const fetchDataFailed=(error)=>(
    {
        type:FETCH_DATA_FAILED,
        payload:error
    }
)