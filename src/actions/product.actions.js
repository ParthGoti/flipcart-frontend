import axios from "../helpers/axios";
import { productConstants } from "./constant";

export const getProductBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axios.get(`/products/${slug}`);
    console.log("slug",res)
    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_SLUG,
        payload: res.data,
      });
    } else {
      // dispatch({
      // })
    }
  };
};

export const getProductPage = (payload) => {
  return async (dispatch) => {
    try {
      const { cid, type } = payload.params;
      const res = await axios.get(`/page/${cid}/${type}`);
      dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
      if (res.status === 200) {
        const { pageData } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
          payload: {
            pageData: pageData,
          },
        });
      } else {
        dispatch({
          type: productConstants.GET_PRODUCT_PAGE_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
    let res;
    try {
      const { productId } = payload.params;
      res = await axios.get(`/product/${productId}`);
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
        payload: { productDetails: res.data.product },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: { 
          error: "Hello"
         },
      });
    }
  };
};
