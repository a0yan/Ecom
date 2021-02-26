import {combineReducers} from 'redux'
import UserReducer from './user/user-reducer'
import CartReducer from './cart/cart-reducer'
import DirectoryReducer from './directory/directory-reducer'
import ShopDataReducer from './shop_data/shopdata-reducer'
export default combineReducers({
    user:UserReducer,
    cart:CartReducer,
    directory:DirectoryReducer,
    shopdata:ShopDataReducer
})