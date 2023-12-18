import { useContext, useEffect } from "react"
import ProductsContext from "../../context/Products/ProductsContext"
import { useParams } from "react-router-dom"


export default function CardDetail() {

    const { getProductById, productDetail } = useContext(ProductsContext)

    const { idProduct } = useParams()

    useEffect(() => {
        getProductById(idProduct)
    }, [])

    console.log(productDetail.category.name);
    return (
        <div>
            <div>
                {
                    productDetail.images?.map((img, index)=>(
                        <img src={img} key={index}/>
                    ))
                }
            </div>
            <div>
                <h2>{productDetail.title}</h2>
                <h3>{productDetail.category.name}</h3> 
                <p><b>${productDetail.price}</b></p>
                <p>{productDetail.description}</p>
            </div>
        </div>
    )
}
