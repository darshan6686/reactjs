import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import  Productsaga from './Product/Productsaga';
import createSagaMiddelware from 'redux-saga'

let sagaMiddelware = createSagaMiddelware()

let store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddelware]
})
sagaMiddelware.run(Productsaga)

export default store;