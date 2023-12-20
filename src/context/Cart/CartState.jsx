import { useReducer } from "react"
import CartContext from "./CartContext"
import CartReducer from "./CartReducer"
import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM_CART, TOTAL_PRICE_CART } from "./Types"

export default function CartState(props) {

    // const [cart, setCart] = useState([])

    const initialState = {
        cart: [],
        totalCart: 0
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (product) => {

        // findIndex para buscar en el estado del carrito un item con id igual al id del producto que viene por props
        const prodInCart = state.cart.findIndex(item => item.id === product.id);

        // si existio un producto que coincida hacemos una copia del carrito para sumar las cantidades
        let newCart;
        if (prodInCart >= 0) {
            newCart = structuredClone(state.cart)
            newCart[prodInCart].quantity += 1;
        } else {
            // Si el producto no está en el carrito, simplemente agrégalo
            newCart = [...state.cart, { ...product, quantity: 1 }];
        }

        // console.log(newCart);

        dispatch({
            type: ADD_TO_CART,
            payload: newCart
        })
    }

    const clearCart = () => {
        dispatch({
            type: CLEAR_CART,
            payload: []
        })
    }

    const removeItemCart = (prod) => {
        // Busco el índice del producto en el carrito
        const prodInCart = state.cart.findIndex(item => item.id === prod.id);

        if (prodInCart >= 0) {
            // Si existe, hago una copia del carrito para modificar la cantidad del producto
            const newCart = structuredClone(state.cart);
            newCart[prodInCart].quantity -= 1;

            // Si la cantidad llega a 0, elimino completamente el producto del carrito
            if (newCart[prodInCart].quantity === 0) {
                newCart.splice(prodInCart, 1);
            }

            dispatch({
                type: REMOVE_ITEM_CART,
                payload: newCart,
            });
        }
    };

    const countTotalCart = (cart) => {
        // console.log(cart);
        let totalPrices = []
        let sumaTotal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalPrices.push(cart[i].price * cart[i].quantity);
        }
        for (let e = 0; e < totalPrices.length; e++) {
            sumaTotal = sumaTotal + totalPrices[e]
        }

        dispatch({
            type: TOTAL_PRICE_CART,
            payload: sumaTotal
        })
    }


    return (
        <CartContext.Provider value={{
            cart: state.cart,
            totalCart: state.totalCart,
            addToCart,
            clearCart,
            removeItemCart,
            countTotalCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
