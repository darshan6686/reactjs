import React from 'react'
import { useReducer } from 'react'

let initialState = 0;
let reducer = (state, action) => {
    switch (action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Countone = () => {

    let [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Count - {count}</h1>
      <button className='border border-black px-4 py-2' onClick={() => dispatch('increment')}>Increment</button>
      <button className='border border-black px-4 py-2' onClick={() => dispatch('decrement')}>Decrement</button>
      <button className='border border-black px-4 py-2' onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Countone
