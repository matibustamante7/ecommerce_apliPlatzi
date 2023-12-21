import { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/Cart/CartContext'
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {

    const { cart, removeItemCart, addToCart, clearCart, countTotalCart, totalCart } = useContext(CartContext)


    const [stateItem, setStateItem] = useState(3)

    // sconst navigate = useNavigate()

    // const handleRemoveAll = () => {
    //     clearCart()
    //     setStateItem(0)
    //     setTimeout(() => {
    //         setStateItem(3)
    //     }, 1000);
    // }

    const handleRemoveItemCart = (prod) => {
        removeItemCart(prod)
        setStateItem(1)
        setTimeout(() => {
            setStateItem(3)
        }, 1000);
    }

    const handleAddNewItem = (prod) => {
        // countTotalCart(cart);
        addToCart(prod)
        setStateItem(2)
        setTimeout(() => {
            setStateItem(3)
        }, 1000);
    }

    useEffect(() => {
        countTotalCart(cart)
    }, [cart]);


    console.log(cart);

    return (
        <div className='w-full flex flex-col p-10'>
            <h2 className='mt-60 mb-10 font-bold text-center text-3xl'>Checkout</h2>

            <div className='w-full flex flex-row justify-evenly'>
                <div className=" bg-slate-700 w-2/3 border-4 p-2">

                    <h2>Cart</h2>

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
                                            <p className="ml-4" >${product.price * product?.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Quantity: <b className="font-bold text-gray-800">{product?.quantity}</b></p>

                                        <div className="flex gap-1 items-center justify-center">
                                            <button
                                                type="button"
                                                className=" text-red-600 hover:text-red-400 text-2xl "
                                                onClick={() => handleRemoveItemCart(product)}
                                            >
                                                -
                                            </button>
                                            <br />
                                            <button
                                                type="button"
                                                className="text-green-600 hover:text-green-500 text-2xl  "
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

                <div className='bg-green-800 w-1/3 border-4 p-2'>
                    <h2>Finalizar compra</h2>
                    <h2>Total: ${totalCart} </h2>
                </div>
            </div>
        </div>

    )
}
