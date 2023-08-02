import React from 'react'
import { useState, useMemo } from 'react'

const Usememos = () => {
    let [count, setCount] = useState(0);
    let [item,setItem] = useState(0);

    function incrementOne(){
        setCount(count+1)
    }

    function incrementTwo(){
        setItem(item+1)
    }

    let isEven = useMemo(()=>{
        console.warn(".......");
        let i=0;
        while(i> 20000000000000)i++;
        return count%2===0;
    },[count])

  return (
    <div className='p-10'>
      <h1>Usememos</h1>
      <h1>count = {count}</h1>
      <h1>item = {item}</h1>
      <button onClick={incrementOne} className='border px-4 py-2'>count = {count}</button>
      <span className='mx-4'>{isEven?"Even":"Odd"}</span>
      <button onClick={incrementTwo} className='border px-4 py-2'>item = {item}</button>
    </div>
  )
}

export default Usememos