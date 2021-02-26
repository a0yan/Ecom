import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger'
import reducer from '../root-reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import Thunk from 'redux-thunk'
const middlewares=[logger,Thunk]
const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middlewares)))

export default store
