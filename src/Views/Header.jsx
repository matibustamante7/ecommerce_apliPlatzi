import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import SubMenu from "../components/SubMenu/SubMenu";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
    return (
        <nav className="bg-sky-700 flex gap-2 items-center justify-evenly">
            <div>
                <SearchBar />
                <SubMenu />
            </div>
            <Link to={'/cart'} className="">
                <FontAwesomeIcon icon={faCartShopping} className=" text-zinc-300 text-4xl hover:text-zinc-400 hover:shadow-xl" />
            </Link>

        </nav>
    )
}
