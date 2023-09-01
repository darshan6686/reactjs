import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Type";

export let addToCart = (data) => {
    console.warn('action called', data);
    return{
        type: ADD_TO_CART,
        data
    }
}

export let removeToCart = (data) => {
    console.log('action called', data);
    return{
        type: REMOVE_TO_CART,
        data
    }
}

export let emptyCart = (data) => {
    console.warn('action called', data);
    return{
        type: EMPTY_CART,
        data
    }
}