import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/Cart/CartContext";


export default function CardProduct(product) {

    const { addToCart } = useContext(CartContext)


    return (
        <div style={{ borderRadius: '15px', border: '2px solid white' }}>
            <img src={product.product?.images[0]} alt={product.product.title} style={{ width: '300px' }} />
            <h2>{product.product.title}</h2>
            <p>{product.product.category.name}</p>
            <h4>$ {product.product.price}</h4>
            <button><Link to={`/${product.product.id}`}>See more</Link></button>
            <button onClick={() => addToCart(product.product)}>Add to cart</button>
        </div>
    )
}
