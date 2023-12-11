import axios from "axios";
import ProductsReducer from "./ProductsReducer";
import { useReducer } from "react";
import ProductsContext from "./ProductsContext";


export default function ProductsState(props) {

    const initialState = {
        products: [],
        productDetail:{}
    }
    const [state, dispatch] = useReducer(ProductsReducer, initialState)


    const getAllProducts = async () =>{
        const url= 'https://api.escuelajs.co/api/v1/products';
        const data = await axios.get(url)
        const results = data.data;
        // console.log(results);
        dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: results
        })
    }


    return (
        <ProductsContext.Provider value={{
            products: state.products,
            productDetail: state.productDetail,
            getAllProducts
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

