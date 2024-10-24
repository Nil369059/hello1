import {createStore, combineReducers} from 'redux'
import cartReducer from './reducer/Reducer'

const rootReducer = combineReducers({
    cart: cartReducer
})

const store = createStore(rootReducer)

export default store;