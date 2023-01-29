import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  ALL_ERRORS_CLEAR,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.Products,
        productCount: action.payload.productCount,
      };

    case ALL_PRODUCT_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    case ALL_ERRORS_CLEAR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const productDetailSReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case PRODUCT_DETAILS_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    case ALL_ERRORS_CLEAR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
