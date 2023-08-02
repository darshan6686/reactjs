import React from 'react'
import { memo } from 'react'

const Callchild = ({counttwo, setCounttwo}) => {

    console.log("Chlid componets !!!");

  return (
    <div>
      <h1>Child componets</h1>
    </div>
  )
}

export default memo(Callchild)