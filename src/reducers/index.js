import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import productReducers from "./product.reducers";
import authReducers from "./auth.reducers";
import cartReducers from "./cart.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  product: productReducers,
  auth: authReducers,
  cart: cartReducers,
});

export default rootReducer;
