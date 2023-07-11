import React from 'react'
import { useEffect, useState } from 'react';

const Normal = () => {

    let [count, setCount] = useState(0);

    useEffect(()=>{
        setCount(count)
    })
  return (
    <div>
        <div className='w-10 h-10 bg-black text-white text-2xl ml-40 mt-10 flex px-2.5 items-center'>{count}</div>
      <button className='bg-red-600 px-4 py-2 mt-10 ml-40 text-white' onClick={() => setCount(count+1)}>Add</button><br/>
      <button className='bg-red-600 px-4 py-2 mt-3 ml-40 text-white' onClick={() => {if(count!==0){setCount(count-1)}}}>Delete</button><br/>
      <button className='bg-red-600 px-4 py-2 mt-3 ml-40 text-white' onClick={() => setCount(0)}>Clear All</button><br/>
    </div>
  )
}

export default Normal
