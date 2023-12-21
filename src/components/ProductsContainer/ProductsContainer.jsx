import { useContext, useEffect } from 'react'
import ProductsContext from '../../context/Products/ProductsContext'
import CardProduct from '../CardProduct/CardProduct'

export default function ProductsContainer() {
    const { getAllProducts, products } = useContext(ProductsContext)

    useEffect(() => {
        getAllProducts()
    }, [])
    // console.log(products);
    return (
        <div id='ProductsContainer' className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>

            <h1 className='text-4xl mb-4 font-bold tracking-tight text-gray-900 text-center'>All Products</h1>

            <div className='flex flex-row flex-wrap gap-1'>

                {
                    products.length > 0 ?
                    products?.map((product) => (
                        <CardProduct product={product} key={product.id} />
                    )) : 
                    <h3>No existe el producto</h3>
                }
            </div>
        </div>
    )
}
