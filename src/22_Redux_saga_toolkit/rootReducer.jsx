import { combineReducers } from "redux";
import cartData from './Reducer'
import { PRODUCT_LIST } from "./Type";

export default combineReducers({ PRODUCT_LIST,cartData })