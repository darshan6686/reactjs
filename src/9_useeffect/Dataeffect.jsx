import React from 'react'
import { useEffect,useState } from 'react'

const Dataeffect = () => {
    useEffect(()=>{
        // code to run after
    },[])

    const [clicked, setClicked] = useState();

    useEffect(()=>{
        alert("we are use effect")
    })
  return (
    <div>
      <button onClick={()=> setClicked('subscribe')} className='bg-red-600 text-white px-4'>Subscribe</button>
      <br />
      <hr />
      <button onClick={()=> setClicked('To')} className='bg-red-600 text-white px-4'>To</button>
      <br />
      <hr />
      <button onClick={()=> setClicked('Dropout')} className='bg-red-600 text-white px-4'>Dropout</button>

      <h1>{clicked}</h1>
    </div>
  )
}

export default Dataeffect