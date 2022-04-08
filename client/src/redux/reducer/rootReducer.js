import handleCart from './handleCart';
import { combineReducers } from 'redux';

console.log(handleCart);

const rootReducer = combineReducers({
    handleCart,
});

export default rootReducer;
