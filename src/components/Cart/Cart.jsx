import { useContext, useState, useEffect } from "react"
import CartContext from '../../context/Cart/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Cart(showCart) {

    const { cart, clearCart, removeItemCart} = useContext(CartContext)

    const handleRemoveAll = () =>{
        clearCart()
    }

    const handleRemoveItemCart = (idItemToRemove) =>{
        removeItemCart(idItemToRemove)
    }

    const [priceTotal, setPriceTotal] = useState(0)

    const handleCountTotal = (prodPrice)=>{

        let total = priceTotal + prodPrice;

        setPriceTotal(total)
        console.log(prodPrice);
    }

    useEffect(() => {
        handleCountTotal()
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden bg-zinc-100 w-21">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div className="ml-3 flex h-7 items-center">
                        <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"

                        >
                            <span className="absolute -inset-0.5" />
                            <FontAwesomeIcon icon={faX} className="text-red-700 m-10"
                                onClick={() => showCart(false)} />
                        </button>
                    </div>
                </div>

                <div className="p-10 mt-10">
                    <p className="ml-4 mb-4 text-xl">List Products</p>
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart.map((product, index) => (
                                <li key={index} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product?.images[0]}
                                            alt={product?.title}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <Link to={`/${product.id}`}>
                                                        {product.title} 
                                                    </Link>
                                                </h3>
                                                <p className="ml-4" >$ {product.price}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">Quantity: {product?.quantity}</p>

                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-red-600 hover:text-red-500"
                                                    onClick={()=>handleRemoveItemCart(product.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-10 flex justify-evenly">
                        <button
                            type="button"
                            className="text-lg text-red-500 py-2 px-4 bg-red-300 rounded-xl hover:text-red-600 hover:bg-red-400"
                            onClick={handleRemoveAll}>Remove all</button>

                            <p>TOTAL: $ {priceTotal}</p>
                    </div>
                </div>
            </div>

            {/* <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </p>
                </div>
            </div> */}
        </div>
    )
}

