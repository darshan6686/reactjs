import React from 'react'
import { useState } from 'react'
import Callchild from './Callchild'
import { useCallback } from 'react'

const Callparent = () => {

    let [countone, setCountone] = useState(0);
    let [counttwo, setCounttwo] = useState([]);

    let incrimentOne = () => {
        setCountone(countone+1);
    }

    const fun = useCallback(()=>{
      console.log("Hello Chlid")
    }, counttwo)
    
  return (
    <div>
      <Callchild counttwo={counttwo} fun={fun} />
      <button onClick={incrimentOne}>count = {countone}</button>
    </div>
  )
}

export default Callparent