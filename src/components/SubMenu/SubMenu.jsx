import { useContext, useState } from "react";
import ProductsContext from "../../context/Products/ProductsContext";

export default function SubMenu() {

    const { filterByCategory, filterByRangePrice } = useContext(ProductsContext)

    const handleChangeCategory = (e) => {
        console.log(`categoria seleccionada: ${e.target.value}`);
        filterByCategory(e.target.value)
    }


    // filtros para precios maximos y minimos

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    const handleChangeMinPrice = (e) =>{
        setMin(e.target.value)
    }

    const handleChangeMaxPrice = (e) =>{
        setMax(e.target.value)
    }

    const handleFilterByPrice = () =>{
        // console.log(`maximo: ${max}, minimo: ${min}`);
        filterByRangePrice(max,min) 
    }

    return (
        <div>
            <select onChange={handleChangeCategory}>
                <option value='1'>Clothes</option>
                <option value='2'>Electronics</option>
                <option value='3'>Furniture</option>
                <option value='4'>Shoes</option>
                <option value='5'>Miscellaneous</option>
            </select>

            <div>
                <h3>Range Price</h3>
                <input type="text" onChange={handleChangeMinPrice} placeholder="Min..." />
                <input type="text" onChange={handleChangeMaxPrice} placeholder="Max..." />
                <button onClick={handleFilterByPrice}>See products</button>
            </div>
        </div>
    )
}
