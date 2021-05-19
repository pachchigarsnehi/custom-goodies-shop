import { combineReducers, createStore } from 'redux'
import cart_reducer from './reducers/cart_reducer'
const allreducers=combineReducers({cart:cart_reducer})
const store=createStore(allreducers)
export default store