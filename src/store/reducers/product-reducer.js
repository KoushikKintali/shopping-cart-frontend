import { FETCH_PRODUCTS, SET_SCROLL_VALUE, TOGGLE_PRODUCTS_LOADING } from "../actions/product-actions";

export const productInitialState = {
  list: [],
  totalCount: undefined,
  loading: false,
  scrollVal: 0,
};

export const ProductReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        list: action.payload.skip === 0 ? action.payload.list : state.list.concat(action.payload.list),
        totalCount: action.payload.totalCount
      }
    case TOGGLE_PRODUCTS_LOADING:
      return {
        ...state,
        loading: !state.loading
      }
    case SET_SCROLL_VALUE:
      return {
        ...state,
        scrollVal: action.payload
      }
    default:
      return state;
  }
}