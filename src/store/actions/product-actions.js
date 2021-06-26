import axios from "axios";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const TOGGLE_PRODUCTS_LOADING = 'TOGGLE_PRODUCTS_LOADING';
export const SET_SCROLL_VALUE = 'SET_SCROLL_VALUE';

const updateProducts = (productList) => ({ type: FETCH_PRODUCTS, payload: productList });

export const getProducts = (skip, count = 12) => {
    return (dispatch) => {
        dispatch(toggleProductsLoading());
        axios.get('http://localhost:3001/products', {
            params: {
                skip,
                count
            }
        }).then((res) => {
            dispatch(updateProducts({ list: res.data.products, skip, totalCount: res.data.totalCount }));
        }).finally(() => {
            dispatch(toggleProductsLoading());
        });
    };
}

export const toggleProductsLoading = () => ({ type: TOGGLE_PRODUCTS_LOADING })

export const setScrollValue = (payload) => ({ type: SET_SCROLL_VALUE, payload })