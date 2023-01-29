import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  ALL_ERRORS_CLEAR,
} from "../constants/productConstants"


const serverURL="http://localhost:4000"

export const getProduct= () => async (dispatch) =>{
    try {

        dispatch({
            type:ALL_PRODUCT_REQUEST,
        });

        const {data}= await axios.get(`${serverURL}/api/v1/products`);

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.reponse.data.message,
        })
    }
}

export const getProductDetails= (id) => async (dispatch) =>{
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST});
        const {data}= await axios.get(`${serverURL}/api/v1/product/${id}`);
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data.product,
        })
        
    } catch (error) {
        console.log(error.response)
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.reponse.data.message,
        })
    }
}

//Clearing All Erros
export const clearErrors= () => async (dispatch) =>{
  
    dispatch({
        type:ALL_ERRORS_CLEAR
    })
}