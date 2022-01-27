import axios from 'axios';
import { BASE_URL } from '../../config';
import * as action from '../constants/ProductsConstant';



export const getProducts = ()=> async(dispatch)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/product`);
        dispatch({ 
            type: action.GET_PRODUCT_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({ 
            type: action.GET_PRODUCT_FALIURE,
            payload: error.response
        })
    }
}

export const getProductDetail = (id)=> async(dispatch)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/product/${id}`);
        dispatch({ 
            type: action.GET_PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({ 
            type: action.GET_PRODUCT_DETAIL_FALIURE,
            payload: error.response
        })
    }
}