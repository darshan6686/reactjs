import React from 'react'
import { useNavigate } from 'react-router-dom'

const Middle = () => {

  const nevigate = useNavigate();

  return (
    <div>
    <button className='px-5 py-2 border mr-10' onClick={() => nevigate('/')}>Apple</button>
    <button className='px-5 py-2 border'>Mango</button>
    <button className='px-5 py-2 border mx-10' onClick={() => nevigate('/Bottom')}>Watermalon</button>
    
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxW5FrAE00dBpWz0eUh5V5XVcn_YtHFnKkEA&usqp=CAU' className='w-80 h-72 mx-40 my-20 bg-cover' alt='' />
    </div>
  )
}

export default Middle