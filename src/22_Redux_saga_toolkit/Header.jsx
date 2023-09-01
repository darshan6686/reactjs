import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    let result = useSelector((state => state.cartData))
    console.log('redux data in', result);

  return (
    <div>
      <span className='text-7xl'>{result.length}</span>
    </div>
  )
}

export default Header
