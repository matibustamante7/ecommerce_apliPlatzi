import { GET_ALL_PRODUCTS, SEARCH_PRODUCT, FILTER_BY_CATEGORY, FILTER_RANGE_PRICE, GET_PRODUCT_BY_ID, ADD_TO_CART, GET_CART } from "../Types";

export default (state, action) => {

    const { payload, type } = action;

    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                products: payload
            }
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                products: payload
            }
        case FILTER_RANGE_PRICE:
            return {
                ...state,
                products: payload
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                productDetail: payload
            }
        default:
            break;
    }
}