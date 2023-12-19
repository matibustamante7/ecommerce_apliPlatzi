import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/Cart/CartContext";


export default function CardProduct(product) {

    const { addToCart } = useContext(CartContext)


    return (

        <div className="mx-auto max-w-2xl p-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 shadow-xl">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link to={`/${product.product.id}`}>
                    <img src={product.product?.images[0]} alt={product.product.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </Link>

            </div>
            <div className="flex justify-between gap-2 items-end">
                <div className="mt-4 flex flex-col justify-between gap-2">
                    <h3 className="text-sm text-gray-700">{product.product.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.product.category.name}</p>
                    <h4 className="text-sm font-medium text-gray-900">$ {product.product.price}</h4>
                </div>
                <div className="">
                    <button onClick={() => addToCart(product.product)}
                        className="inline-flex items-center rounded-md bg-green-50 p-3 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 hover:bg-green-600 hover:text-green-200 hover:border-green-200" >Add to cart</button>
                </div>
            </div>

        </div>
    )
}
