import React from 'react'
import E from './E'
import { Objectt } from './Mains'
import { useContext } from 'react'

const C = () => {
  let {obj} = useContext(Objectt)
  return (
    <div>
    <h1>C</h1>
    {obj.map((ele) => {
      return(
        <p className='leading-3'>
          {ele.Name} : {ele.Age}
        </p>
      )
    })}
      <E></E>
    </div>
  )
}

export default C
