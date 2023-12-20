import axios from "axios";
import ProductsReducer from "./ProductsReducer";
import { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import { FILTER_BY_CATEGORY, FILTER_RANGE_PRICE, GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, SEARCH_PRODUCT } from "../Types";


export default function ProductsState(props) {

    const initialState = {
        products: [],
        productDetail:{},
    }
    const [state, dispatch] = useReducer(ProductsReducer, initialState)


    const getAllProducts = async () =>{
        const url= 'https://api.escuelajs.co/api/v1/products';
        const data = await axios.get(url)
        const results = data.data;
        // console.log(results);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: results
        })
    }

    const getProductById = async (idProduct) =>{
        const url= `https://api.escuelajs.co/api/v1/products/${idProduct}`;
        const data = await axios.get(url)
        const results = data.data;
        // console.log(results);
        dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: results
        })
    }

    const searchProduct = async (title) =>{
        // console.log(title);
        const url = `https://api.escuelajs.co/api/v1/products/?title=${title}`
        const data =  await axios.get(url)
        const results = data.data;

        dispatch({
            type:SEARCH_PRODUCT,
            payload:results
        })
    }
    
    const filterByCategory = async (idCategory) =>{
        // console.log(idCategory);
        const url = `https://api.escuelajs.co/api/v1/products/?categoryId=${idCategory}`
        const data =  await axios.get(url)
        const results = data.data;

        dispatch({
            type:FILTER_BY_CATEGORY,
            payload:results
        })
    }
    
    const filterByRangePrice = async (maxPrice, minPrice) =>{
        // console.log(`max: ${maxPrice}, min: ${minPrice}`);
        const url = `https://api.escuelajs.co/api/v1/products/?price_min=${minPrice}&price_max=${maxPrice}`
        const data =  await axios.get(url)
        const results = data.data;

        dispatch({
            type:FILTER_RANGE_PRICE,
            payload:results
        })
    }




    return (
        <ProductsContext.Provider value={{
            products: state.products,
            productDetail: state.productDetail,
            getAllProducts,
            searchProduct,
            filterByCategory,
            filterByRangePrice,
            getProductById
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

