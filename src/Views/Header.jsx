import { useContext, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import SubMenu from "../components/SubMenu/SubMenu";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "../components/Cart/Cart";
import CartContext from "../context/Cart/CartContext";


export default function Header() {

    const { cart } = useContext(CartContext)

    const [stateShowCart, setStateShowCart] = useState(false)

    const handleShowCart = () => {
        // console.log(cart);
        setStateShowCart(true)
    }

    return (
        <nav className="bg-sky-700 flex gap-2 items-center justify-evenly">
            <div>
                <SearchBar />
                <SubMenu />
            </div>
            <FontAwesomeIcon icon={faCartShopping}
                className=" text-zinc-300 text-4xl hover:text-zinc-400 hover:shadow-xl hover:cursor-pointer relative"
                onClick={handleShowCart} />
            {
                cart.length > 0 && (
                    <div className="absolute right-12 top-12 bg-red-500 text-white rounded-full text-xs p-1">
                        {cart.length}
                    </div>
                )
            }
            {cart.length > 0 ?
                stateShowCart && <Cart stateShowCart={stateShowCart}/> :
                ''}
        </nav>
    )
}
