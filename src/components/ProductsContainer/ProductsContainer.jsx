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
        <div>
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
