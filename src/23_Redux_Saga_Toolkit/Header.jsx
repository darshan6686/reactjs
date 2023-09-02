import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    let result = useSelector((state => state.cartData))
    console.log('redux data in', result);

  return (
    <div>
      <Link to='/Cart' className='no-underline'>
        <span className='text-4xl m-5 text-black'>{result.length}</span>
      </Link>
    </div>
  )
}

export default Header