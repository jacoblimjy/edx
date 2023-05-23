import { configureStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// npm install react-bootstrap axios react-router-dom redux react-redux redux-thunk redux-devtools-extension @reduxjs/toolkit   

const reducer = combineReducers({}) //this is where we will add reducers, reducers are functions that take in state and action and return a new state

const initialState = {lol} //this is where we will add initial state, this is the state that will be used when the app is first loaded

const middleware = [thunk] //thunk is a middleware that allows us to make asynchronous requests in our actions

const store = configureStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) //this is where we create the store, we pass in the reducer, initial state, and middleware

export default store

