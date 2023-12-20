import { useContext, useEffect, useState } from "react"
import CartContext from '../../context/Cart/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AddItemAlert from "../Alerts/AddItemAlert";
import RemoveItemAlert from "../Alerts/RemoveItemAlert";

export default function Cart(props) {

    const { cart, clearCart, removeItemCart, addToCart, countTotalCart, totalCart } = useContext(CartContext)

    const [stateItem, setStateItem] = useState(3)


    const handleRemoveAll = () => {
        clearCart()
        setStateItem(0)
    }

    const handleRemoveItemCart = (prod) => {
        removeItemCart(prod)
        setStateItem(1)
    }

    const handleAddNewItem = (prod) => {
        // countTotalCart(cart);
        addToCart(prod)
        setStateItem(2)
    }


    useEffect(() => {
        countTotalCart(cart)
    }, [cart]);

    return (
        <>

            <div className="fixed inset-0 overflow-hidden bg-zinc-100 w-21">

                <div className="absolute inset-0 overflow-hidden">

                    <div className=" flex fixed right-10 top-10 items-center">
                        <button
                            onClick={() => props.showCart(false)}
                            className="flex items-center gap-2 p-3 rounded-xl text-gray-400 border-2 hover:text-red-500 hover:border-red-500 "
                        >
                            CLOSE <FontAwesomeIcon icon={faX} />
                        </button>
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
                                                        <Link to={`/${product.id}`} onClick={() => props.showCart(false)}>
                                                            {product.title}
                                                        </Link>
                                                    </h3>
                                                    <p className="ml-4" >$ {product.price * product?.quantity}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">Quantity: {product?.quantity}</p>

                                                <div className="flex gap-2">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-red-600 hover:text-red-500 text-lg border-2 w-6 rounded-xl"
                                                        onClick={() => handleRemoveItemCart(product)}
                                                    >
                                                        -
                                                    </button>
                                                    <br />
                                                    <button
                                                        type="button"
                                                        className="font-medium text-red-600 hover:text-red-500 text-lg border-2  w-6 rounded-xl"
                                                        onClick={() => handleAddNewItem(product)}
                                                    >
                                                        +
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
                            <p>TOTAL: $ {totalCart}</p>
                        </div>
                        <div className="mt-10 flex justify-center ">
                            <button className="text-xl w-full text-white py-2 px-4 bg-sky-600 rounded-xl hover:bg-sky-500">Go to checkout</button>
                        </div>
                        <div className="mt-10 flex justify-center">
                            {
                                stateItem === 1 ?
                                    <RemoveItemAlert /> :
                                stateItem === 2 ?
                                    <AddItemAlert /> :
                                    ''
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

