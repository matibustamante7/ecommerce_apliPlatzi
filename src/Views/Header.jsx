import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import SubMenu from "../components/SubMenu/SubMenu";


export default function Header() {
    return (
        <div style={{display:'flex'}}>
            <SearchBar/>
            <SubMenu/>
            <Link to={'/cart'}>carrito</Link>
        </div>
    )
}
