import { useContext, useEffect } from "react"
import ProductsContext from "../../context/Products/ProductsContext"
import { useNavigate, useParams } from "react-router-dom"
import CartContext from "../../context/Cart/CartContext"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function CardDetail() {

    const { getProductById, productDetail } = useContext(ProductsContext)
    const { addToCart } = useContext(CartContext)

    const { idProduct } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProductById(idProduct)
    }, [])

    const imagesProduct = productDetail.images?.map((img) => {

        return { original: img }
    })

    const handleBack = () => {
        navigate(`/`)
    }

    return (

        <div className="bg-white p-4">
            <div className="flex items-center justify-center w-2/3 mt-60 mw-auto">
                <button onClick={handleBack} className=" flex  items-center justify-center rounded-md border border-transparent bg-cyan-600 px-8 py-3 font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mb-10">Back</button>
            </div>

            <div className=" p-6 bg-zinc-100 rounded-xl shadow-sm w-fit m-auto">



                <div className="flex items-center justify-center w-2/4 m-auto ">
                    {/* {
                        productDetail.images?.map((img, index) => (
                            <img src={img} key={index} className="h-full w-full object-cover object-center" />
                        ))
                    } */}
                    {imagesProduct && <ImageGallery items={imagesProduct} className="h-full w-full object-cover object-center" />}
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
