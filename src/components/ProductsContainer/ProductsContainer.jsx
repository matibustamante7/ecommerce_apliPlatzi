import { useContext, useEffect } from 'react'
import ProductsContext from '../../context/Products/ProductsContext'
import CardProduct from '../CardProduct/CardProduct'

export default function ProductsContainer() {
    const { getAllProducts, products } = useContext(ProductsContext)

    useEffect(() => {
        getAllProducts()
    }, [])
    console.log(products);
    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>

            <h1 className='text-2xl font-bold tracking-tight text-gray-900'>listado de productos</h1>

            <div style={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap', gap: '1rem' }}>

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
