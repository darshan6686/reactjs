import React from 'react'
import { useContext } from 'react'
import { Objectt } from './Mains'

const A = () => {
  const {obj} = useContext(Objectt)
  return (
    <div>
    <h1>A</h1>
      {obj.map((ele)=>{
        return (
        <p className='leading-3'>
          {ele.Name} : {ele.Age}
        </p>
        )
      })}
    </div>
  )
}

export default A