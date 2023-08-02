import React from 'react'
import { useState } from 'react'

const Memo = () => {
    const[count  , setCount] = useState(0)
    const[item , setItem]  = useState(5)

    function MultiCount(){
        console.warn("MultiCount");
        return count*2;
    }

  return (
    <div className="p-10">
        <h1>Memo</h1>
        <h2>count = {MultiCount()}</h2>
        <h2>item = {item}</h2>
        <button onClick={() => setCount(count+1)} className='border-black border mx-4 my-2 px-4 py-2'>Update Count</button>
        <button onClick={() => setItem(item+1)} className='border-black border mx-4 my-2 px-4 py-2'>Update Count</button>
    </div>
  )
}

export default Memo
