import React from 'react'
import { useEffect } from 'react'

const CustomHook = (count) => {

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

  return (
    <div>
      
    </div>
  )
}

export default CustomHook
