import cartVisibleReducer from './cart_visible_reducer';
import productListReducer from './product_list_reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  cartVisibleReducer: cartVisibleReducer,
  productListReducer: productListReducer
});

export default rootReducer;