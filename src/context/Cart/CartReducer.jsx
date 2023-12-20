import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM_CART , TOTAL_PRICE_CART} from "./Types";

export default (state, action) => {

    const { payload, type } = action;

    switch (type) {
        case ADD_TO_CART:
            // console.log(`item ${payload.id} llego a reducer por add to cart`);
            
            return {
                ...state,
                cart: payload
            }
        case CLEAR_CART:
            // console.log(`item ${payload} llego a reducer`);
            
            return {
                ...state,
                cart: payload
            }
        case REMOVE_ITEM_CART:
            // console.log(`item a eliminar con id ${payload} llego a reducer`);
            return {
                ...state,
                cart: payload
            }
        case TOTAL_PRICE_CART:
            // console.log(payload);
            return {
                ...state,
                totalCart: payload
            }
        default:
            break;
    }
}