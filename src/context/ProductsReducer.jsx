import { GET_ALL_PRODUCTS } from "./Types";

export default (state, action) => {
    
    const { payload, type } = action;

    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            break;
    }
}