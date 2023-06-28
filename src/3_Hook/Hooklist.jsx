import React from 'react'
import { useState } from 'react'

const Hook = () => {

    const [count, setCount] = useState(0);

    // console.log(useState());

    function handleClick() {
        setCount(count+1);
    }

    function handleClickr() {
        setCount(count-1);
    }
  return (
    <div className='flex mt-5 ml-5'>
    <button onClick={handleClick} className='p-3 bg-blue-600 text-white text-3xl mx-3'>+</button>
    <h1>{count}</h1>
      <button onClick={handleClickr} className='p-3 bg-blue-600 text-white text-3xl mx-3'>-</button>
    </div>
  )
}

export default Hook
