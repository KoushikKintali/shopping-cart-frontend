import { cartInitialState, CartReducer } from "./cart-reducer";
import { productInitialState, ProductReducer } from "./product-reducer";
import { combineReducers } from "redux";

export const initialState = {
    products: productInitialState,
    cart: cartInitialState,
};
  
export default combineReducers({
    products: ProductReducer,
    cart: CartReducer,
});