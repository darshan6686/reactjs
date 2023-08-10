import React from 'react'
import D from './D'
import { Objectt } from './Mains'
import { useContext } from 'react'

const B = () => {
  let {obj} = useContext(Objectt)
  return ( 
    <div>
      <h1>B</h1>
      {obj.map((ele) => {
        return(
          <p className='leading-3'>
            {ele.Name} : {ele.Age}
          </p>
        )
      })}
      <D></D>
    </div>
  )
}

export default B
