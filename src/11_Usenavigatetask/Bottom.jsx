import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bottom = () => {
  
  const nevigate = useNavigate();

  return (
    <div>
    <button className='px-5 py-2 border mx-10' onClick={() => nevigate('/')}>Apple</button>
    <button className='px-5 py-2 border' onClick={() => nevigate('/Middel')}>Mango</button>
    <button className='px-5 py-2 border'>Watermalon</button>

    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3gbQ7OkRjZ00PnxeykL9AJq-odv9ZjHJl2KdMSdZnDby45rOYeSnoc8B32HmGpTURXM&usqp=CAU' className='w-96 h-80 mx-40 my-20' alt='' />
    </div>
  )
}

export default Bottom
