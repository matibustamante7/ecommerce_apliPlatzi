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

    const handleChangeMinPrice = (e) => {
        setMin(Number(e.target.value))
    }

    const handleChangeMaxPrice = (e) => {
        setMax(Number(e.target.value))
    }

    const handleFilterByPrice = () => {
        // console.log(`maximo: ${max}, minimo: ${min}`);
        filterByRangePrice(max, min)
    }

    return (
        <div className="flex justify-evenly align-center p-2 flex-row">
            <div className="relative rounded-md shadow-sm flex gap-2">

                <input type="number" onChange={handleChangeMinPrice} placeholder="Min..."
                    className="p-2 w-24 rounded-md border-none text-zinc-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
                <input type="number" onChange={handleChangeMaxPrice} placeholder="Max..."
                    className="p-2 w-24 rounded-md border-none text-zinc-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
                <button onClick={handleFilterByPrice}
                    className="bg-zinc-300 text-zinc-900 px-4 py-2 rounded hover:bg-zinc-400  hover:shadow-lg transition-all delay-50">See products</button>
            </div>
            
            <select onChange={handleChangeCategory}
                className="bg-zinc-300 text-zinc-900 p-2 rounded hover:bg-zinc-400  hover:shadow-lg transition-all delay-50"
            >
                <option value='1'>Clothes</option>
                <option value='2'>Electronics</option>
                <option value='3'>Furniture</option>
                <option value='4'>Shoes</option>
                <option value='5'>Miscellaneous</option>
            </select>


        </div>
    )
}
