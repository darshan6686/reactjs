import React from 'react'
import { useContext } from 'react'
import { Objectt } from './Mains'

const F = () => {
  let {obj} = useContext(Objectt)
  return (
    <div className='mt-10'>
    <h1>F</h1>
      {obj.map((ele) => {
        return(
          <p className='leading-3'>
            {ele.Name} : {ele.Age}
          </p>
        )
      })}
    </div>
  )
}

export default F