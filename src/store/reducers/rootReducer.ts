import { combineReducers } from "redux";
import dataInitReducer from "./initReducer/initReducer";
import dataProductReducer from "./productReducer/productReducer";

const rootReducer = combineReducers({
  data: dataInitReducer,
  product: dataProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
