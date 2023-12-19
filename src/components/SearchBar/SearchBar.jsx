import { useContext } from "react";
import ProductsContext from "../../context/Products/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function SearchBar() {

    const { searchProduct } = useContext(ProductsContext)


    const handleSearchProduct = (e) => {
        // console.log(`buscando a: ${e.target.value}`);
        searchProduct(e.target.value)
    }

    return (
        <div className="flex items-center justify-between max-w-md p-2 gap-2">
            <div className="relative">
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
                <input
                    type="search"
                    className="border p-2 pl-10 rounded-lg text-zinc-500"
                    placeholder="Search"
                    onChange={handleSearchProduct}
                />
            </div>
            <button className="bg-zinc-300 text-zinc-900 p-2 rounded hover:bg-zinc-400  hover:shadow-lg transition-all delay-50">Search</button>
        </div>
    )
}
