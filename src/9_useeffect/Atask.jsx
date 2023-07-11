import React from 'react'
import Navbar from './Adesign';
import { useEffect, useState } from 'react';

const Atask = () => {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);

    useEffect(() => {
        setCount1(count);
    },[count]);
  return (
    <div>
    <div>
    <Navbar Count={count1}></Navbar>

    <div className='flex'>
        <div>Phone</div>
        <button className='border-black border-2 p-2' onClick={()=>setCount(count+1)}>Add to cart</button>
    </div>
    <div className='flex'>
        <div>Laptop</div>
        <button className='border-black border-2 p-2' onClick={()=>setCount(count+1)}>Add to cart</button>
    </div>
    <div className='flex'>
        <div>Tv</div>
        <button className='border-black border-2 p-2' onClick={()=>setCount(count+1)}>Add to cart</button>
    </div>
    <button className='border-black border-2 p-2' onClick={()=>setCount(0)}>Clear</button>


</div>
    </div>
  )
}

export default Atask
