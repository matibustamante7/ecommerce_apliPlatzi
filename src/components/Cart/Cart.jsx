import { useContext } from "react"
import CartContext from '../../context/Cart/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function Cart() {

    const { cart } = useContext(CartContext)




    console.log(cart);

    return (
        <div>
            <h2>Items cart</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem'}}>

                {
                    cart?.map((itemCart, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', border: '2px solid white', borderRadius: '15px' }}>
                            <div>
                                <h2>{itemCart.title}</h2>
                                <h4>${itemCart.price}</h4>
                                <p>Quantity: {itemCart.quantity}</p>
                                <p><b>Total product: $ {itemCart.price * itemCart.quantity}</b></p>
                            </div>
                            <div>
                                <img src={itemCart.images[0]} alt={itemCart.title} style={{ width: '200px' }} />
                                
                            </div>
                            <div>
                                <p>Actions</p>
                                <DeleteIcon color="warning"  />
                                <DeleteForeverIcon color="error" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
