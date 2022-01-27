import axios from "axios";
import { BASE_URL } from "../../config";
import * as action from '../constants/addtoCartType';



export const addToCartAction =(id)=> async(dispatch) =>{
    try{
        const {data} = await axios.get(`${BASE_URL}/product/${id}`);
        dispatch({
            type: action.ADD_TO_CART,
            payload: data
        })

    }catch(error){
        console.log('Error Add to Cart', error);
    }
}

export const removeCartItem = (id) => (dispatch)=>{
    try{
        dispatch({ type: action.REMOVE_TO_CART, payload: id })
    }catch(error){
        console.log('Remove Cart')
    }
}