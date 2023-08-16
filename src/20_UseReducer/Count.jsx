import React from 'react'
import { useReducer } from 'react'

let intialvalue = 0;
let reducer = (state,action) => {
    switch(action){
        case 'incriment':
            return state + 1;
        case 'decriment':
            return state - 1;
        case 'reset':
            return intialvalue;
        default:
            return state;
    }
}
 
const Count = () => {
    let [count, dispatch] = useReducer(reducer, intialvalue)
  return (
    <div>
      <h1>count = {count}</h1>
      <button className='border border-black px-4 py-2' onClick={() => dispatch('incriment')}>increment</button>
      <button className='border border-black px-4 py-2' onClick={() => dispatch('decriment')}>decrement</button>
      <button className='border border-black px-4 py-2' onClick={() => dispatch('reset')} >Reset</button>
    </div>
  )
}

export default Count
