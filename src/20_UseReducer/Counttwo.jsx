import React from 'react'
import { useReducer } from 'react'

let initialState = {
    firstcounter:0
}
let reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {firstcounter:state.firstcounter+1}
        case 'decrement':
            return {firstcounter : state.firstcounter-1}
        case 'reset':
            return initialState
        default:
            return state
    }
} 

const Counttwo = () => {

    let [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>count - {count.firstcounter}</h1>
      <button className='border border-black px-4 py-2' onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button className='border border-black px-4 py-2' onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button className='border border-black px-4 py-2' onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default Counttwo
