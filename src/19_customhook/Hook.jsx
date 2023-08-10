import React from 'react'
import { useState } from 'react'
import CustomHook from './CustomHook'

const Hook = () => {

    let [count, setCount] =  useState(0)

    CustomHook(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)} className='border border-black m-10 px-3'>{count}</button>
    </div>
  )
}

export default Hook