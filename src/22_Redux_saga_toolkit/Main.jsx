import React from 'react'
import { addToCart, removeToCart, emptyCart } from "./Action";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { productList } from './ProductList';
import { useSelector } from 'react-redux';

const Main = () => {
    let data = useSelector(state => state)
    let dispatch = useDispatch();
    console.log("Main component", data)
    let product = {
        name: 'iphone',
        type: 'Mobile',
        price: 20000,
        color: 'red'
    }
  return (
    <div>
      <Header />
      <button onClick={() => dispatch(addToCart(product))} className='border border-black px-5 py-2 mx-3'>ADD_TO_CART</button>
      <button onClick={() => dispatch(removeToCart(product))} className='border border-black px-5 py-2 mx-3'>REMOVE_TO_CART</button>
      <button onClick={() => dispatch(emptyCart(product))} className='border border-black px-5 py-2 mx-3'>EMPTY_CART</button>
      <button onClick={() => dispatch(productList(product))} className='border border-black px-5 py-2 mx-3'>PRODUCT_LIST</button>
    </div>
  )
}

export default Main
