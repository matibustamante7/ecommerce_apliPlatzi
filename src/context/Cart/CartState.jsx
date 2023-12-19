import { useReducer } from "react"
import CartContext from "./CartContext"
import CartReducer from "./CartReducer"
import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM_CART } from "./Types"

export default function CartState(props) {

    // const [cart, setCart] = useState([])

    const initialState = {
        cart:[],
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (product) =>{
        dispatch({
            type:ADD_TO_CART,
            payload: product
        })
    }

    const clearCart = () =>{
        dispatch({
            type: CLEAR_CART,
            payload:[]
        })
    }

    const removeItemCart = (idItemToRemove) =>{
        // busco el id que me llega por props y creo un nuevo cart sin ese item
        const newCart = state.cart.filter(item => item.id !== idItemToRemove);
        
        dispatch({
            type: REMOVE_ITEM_CART,
            payload: newCart
        })
    }

    const countTotal = (count)=>{
        console.log(count);

    }


    return (
        <CartContext.Provider value={{
            cart: state.cart,
            addToCart,
            clearCart,
            removeItemCart,
            countTotal
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
