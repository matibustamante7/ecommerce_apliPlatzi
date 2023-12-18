import { useContext } from "react";
import ProductsContext from "../../context/Products/ProductsContext";


export default function SearchBar() {

    const {searchProduct} = useContext(ProductsContext)


    const handleSearchProduct = (e) => {
        // console.log(`buscando a: ${e.target.value}`);
        searchProduct(e.target.value)
    }
    
    return (
        <div>
            <input type="search" name="" id="" onChange={handleSearchProduct}/>
            <button>Search</button>
        </div>
    )
}
