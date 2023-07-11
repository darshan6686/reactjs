import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {

    const [count, setCount] = useState(60)

    useEffect(()=>{
        if(count!==0){
            setTimeout(()=>{
              setCount(count-1)
          },1000)
        }
        else{
            setTimeout(()=>{
              setCount(count)
          })
        }
    })
  return (
    <div className='text-5xl m-24 bg-black text-white w-10 flex justify-center px-10'>
     {count}
    </div>
  )
}

export default Timer