import { useContext, useEffect } from 'react'
import ProductsContext from '../../context/ProductsContext'
import CardProduct from '../CardProduct/CardProduct'

export default function ProductsContainer() {
    const { getAllProducts, products } = useContext(ProductsContext)

    useEffect(() => {
        getAllProducts()
    }, [])
    // console.log(products);
    return (
        <div>
            <h1>Products lists</h1>
            <div style={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap', gap: '1rem' }}>

                {
                    products?.map((product) => (
                        <CardProduct product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    )
}
