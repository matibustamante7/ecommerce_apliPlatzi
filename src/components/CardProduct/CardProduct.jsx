

export default function CardProduct(product) {
    console.log(product.product);
    return (
        <div>
            <img src={product.product.images[0]} alt={product.product.title} style={{ width: '300px' }} />
            <h2>{product.product.title}</h2>
            <p>{product.product.category.name}</p>
            <h4>$ {product.product.price}</h4>
        </div>
    )
}
