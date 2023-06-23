import React from 'react'
import { useState } from 'react'
import datas from './Hook.json'

const Hookdata = () => {
    const [nData , setnData] = useState(datas)

    const handleClick = () => {
        setnData([])
    }

    const handleClickr = (itemId) => {
        setnData(nData.filter(item => item.id!==itemId))
    }
  return (
    <div>
    <ul>
        {
            nData.map(items =>
                        <li key={items.id} className='my-4'>
                        {items.name}
                        <button onClick= {() => handleClickr(items.id)} className='px-1 py-2 bg-red-600 text-white ml-5'>remove</button>
                        </li>
                )
        }
    </ul>
    <button onClick={handleClick} className='px-4 py-2 bg-blue-600 text-white'>Clear</button>
    </div>
  )
}

export default Hookdata
