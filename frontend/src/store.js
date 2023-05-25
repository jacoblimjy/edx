import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";


// npm install react-bootstrap axios react-router-dom redux react-redux redux-thunk redux-devtools-extension @reduxjs/toolkit   

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});

export const initialState = {} //this is where we will add initial state, this is the state that will be used when the app is first loaded

const middleware = [thunk] //thunk is a middleware that allows us to make asynchronous requests in our actions

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});
 
export default store;
