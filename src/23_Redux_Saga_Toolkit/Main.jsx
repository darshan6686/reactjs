import { useEffect } from "react";
import { addToCart, removeToCart, emptyCart } from "./Action";
import { useDispatch } from "react-redux";
import { productList } from './Product/ProductList';
import { useSelector } from 'react-redux';

const Main = () => {
    let data = useSelector(state => state.productData)
    let dispatch = useDispatch();
    console.log("Main component", data)
    
    useEffect(() => {
      dispatch(productList())
    },[])

  return (
    <>
    <button onClick={() => dispatch(emptyCart())} className='border border-black px-2 mx-3'>EMPTY_CART</button>
    <button onClick={() => dispatch(productList())} className='border border-black px-2 mx-3'>PRODUCT_LIST</button>
    
      <div className="flex mt-10 gap-10 p-5">
        {
          data.map((item) =>
            <div key={item.id} className="border border-black p-5">
              <div>Title : {item.title}</div>
              <div className="mt-2">Autohr : {item.author}</div>
              <div className="mt-5">
                <button onClick={() => dispatch(addToCart(item))} className='border border-black px-2'>ADD_TO_CART</button>
                <button onClick={() => dispatch(removeToCart(item.id))} className='border border-black px-2 mt-2'>REMOVE_TO_CART</button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Main