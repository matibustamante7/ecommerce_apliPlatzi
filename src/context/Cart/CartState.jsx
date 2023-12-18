import { useState } from "react"
import CartContext from "./CartContext"

export default function CartState(props) {

    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        const prodInCart = cart.findIndex(item => item.id === product.id)

        if (prodInCart>0) {
            const newCart = structuredClone(cart)
            newCart[prodInCart].quantity += 1;
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity:1
            }
        ]))

    }
        console.log(cart);

    const clearCart = () =>{
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
