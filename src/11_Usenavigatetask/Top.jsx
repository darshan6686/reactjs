import React from 'react'
import { useNavigate } from 'react-router-dom'

const Top = () => {
  
  const nevigate = useNavigate();

  return (
    <div>
    <button className='px-5 py-2 border mx-10'>Apple</button>
    <button className='px-5 py-2 border mx-10' onClick={() => nevigate('/Middel')}>Mango</button>
    <button className='px-5 py-2 border' onClick={() => nevigate('/Bottom')}>Watermalon</button>

    <img src='https://5.imimg.com/data5/SELLER/Default/2021/8/YN/SE/FV/72826034/red-apple.jpg' className='w-96 h-96 mx-40 my-20' alt='' />
    </div>
  )
}

export default Top