import React from 'react'
import { useReducer, useState } from 'react'

const Countone = () => {

    let [item, setItem] = useState("")
    let [item1, setItem1] = useState("")

    let reducer = (state, action) => {
    switch (action){
        case 'increment':
            return +item + +item1
        case 'decrement':
            return item - item1
        case 'multipication':
            return item * item1
        case 'divide':
            return item / item1
        default:
            return state
    }
}
let [count, dispatch] = useReducer(reducer, 0)

    let f1 = (e) => {
        setItem(e.target.value)
    }

    let f2 = (e) => {
      setItem1(e.target.value)
    }

  return (
    <div className='container-2xl ml-[43%] mt-40'>
    <div className='w-full h-auto'>
      <input type='text' onChange={f1} value={item} className='border border-black w-80 h-10 px-3' placeholder='Enter Number 1' /> <br/>
      <input type='text' onChange={f2} value={item1} className='border border-black w-80 h-10 mt-3 mb-5 px-3' placeholder='Enter Number 2' />
      <h1 className='italic'> Output = {count}</h1>
      <div className='flex gap-20 mt-5 -ml-20'>
          <button className='border border-black px-4 py-2' onClick={() => dispatch('increment')}>+</button>
          <button className='border border-black px-4 py-2' onClick={() => dispatch('decrement')}>-</button>
          <button className='border border-black px-4 py-2' onClick={() => dispatch('multipication')}>x</button>
          <button className='border border-black px-4 py-2' onClick={() => dispatch('divide')}>/</button>
      </div>
    </div>
    </div>
  )
}

export default Countone
