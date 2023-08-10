import React from 'react'
import F from './F'
import { useContext } from 'react'
import { Objectt } from './Mains'

const E = () => {
  let {obj} = useContext(Objectt)
  return (
    <div className='mt-10'>
    <h1>E</h1>
      {obj.map((ele) => {
        return(
          <p className='leading-3'>
            {ele.Name} : {ele.Age}
          </p>
        )
      })}
      <F></F>
    </div>
  )
}

export default E
