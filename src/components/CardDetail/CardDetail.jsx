import { useContext, useEffect } from "react"
import ProductsContext from "../../context/Products/ProductsContext"
import { useParams } from "react-router-dom"
import CartContext from "../../context/Cart/CartContext"


export default function CardDetail() {

    const { getProductById, productDetail } = useContext(ProductsContext)
    const { addToCart } = useContext(CartContext)

    const { idProduct } = useParams()

    useEffect(() => {
        getProductById(idProduct)
    }, [])

    // console.log(productDetail.category.name);
    return (

        <div className="bg-white p-4">
            <div className="p-6 bg-zinc-100 rounded-xl shadow-sm">

                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    {
                        productDetail.images?.map((img, index) => (
                            <img src={img} key={index} className="h-full w-full object-cover object-center" />
                        ))
                    }
                </div>
                <div className="mx-auto flex flex-col justify-evenly mt-4 gap-4">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productDetail.title}</h2>
                    <h3>{productDetail.category?.name}</h3>
                    <p className="text-3xl tracking-tight text-gray-900">${productDetail.price}</p>
                    <p></p>
                </div>
                <button
                    onClick={() => addToCart(productDetail)}
                    type="submit"
                    className=" flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-8 py-3 font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                    Add to cart
                </button>

                <div className="p-4 ">
                    {/* Description and details */}
                    <div>
                        <h3 className="text-xl mb-4">Description</h3>

                        <div className="space-y-6">
                            <p className="text-base text-gray-900">{productDetail.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
