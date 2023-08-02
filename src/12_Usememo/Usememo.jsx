import React from 'react'
import { useState, useMemo } from 'react'

const Usememo = () => {
    let [count, setCount] = useState(0);
    let [item, setItem] = useState(5);

    let multimemo = useMemo(
        function MultiCount(){
            console.warn("Multicount");
            return count*2;
        }, [count]
    )
  return (
    <div className='p-10'>
      <h1>Usememo</h1>
      <h1>count =  {multimemo}</h1>
      <h1>item =  {item}</h1>
      <button onClick={() => setCount(count+1)} className='border-black border mx-4 my-2 px-4 py-2'>Update count</button>
      <button onClick={() => setItem(item+1)} className='border-black border mx-4 my-2 px-4 py-2'>Update item</button>
    </div>
  )
}

export default Usememo