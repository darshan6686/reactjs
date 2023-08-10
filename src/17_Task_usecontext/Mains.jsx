import React from 'react'
import A from './A'
import B from './B'
import C from './C'
import { useState } from 'react'

export const Objectt = React.createContext()

const Mains = () => {
    let [obj] = useState([{Name: "Darshan",Age: 18},{Name: "Ajay",Age: 20}])
  return (
    <div>
      <h1 className='text-center my-16 text-6xl font-semibold'>Main</h1>

      <div className='flex justify-around'>
        <Objectt.Provider value={{obj : obj}}>
          <A />
          <B />
          <C />
        </Objectt.Provider>
      </div>
    </div>
  )
}

export default Mains