import products from './products-reducer'
import categories from './categories-reducer.js'
import cart from './cart-reducer'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
let reducers = combineReducers({categories, products,cart});

const store = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default store(); 