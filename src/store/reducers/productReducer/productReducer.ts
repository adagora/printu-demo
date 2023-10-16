import { productFetchTypes } from "../../Actiontypes/productTypes";
import { DataProductState, ProductActions } from "../../types/types";

const initialState: DataProductState = {
  pending: false,
  data: null,
  error: null,
};

export default (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case productFetchTypes.PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case productFetchTypes.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data,
        error: null,
      };
    case productFetchTypes.PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        data: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
