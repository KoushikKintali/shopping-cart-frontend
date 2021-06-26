import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart-actions";

export const cartInitialState = { list: [] };

export const CartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                list: state.list.filter((item) => item.productId !== action.payload)
            }
        default:
            return state;
    }
}