import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCoco, buyCoco } from './Coco/Cocoaction'

const Hookcoco = () => {
    
    let coco = useSelector(state => state.coco)
    let dispatch = useDispatch()

  return (
    <div className='text-center mt-16'>
      <h1 className='text-3xl font-semibold'>Number of coco = {coco}</h1>
      <div className='flex justify-center gap-20 mt-7'>
        <button className='border border-black px-5 py-2' onClick={() => dispatch(buyCoco())}>BUY_COCO</button>
        <button className='border border-black px-5 py-2' onClick={() => dispatch(addCoco())}>PURCHASE_COCO</button>
      </div>
    </div>
  )
}

export default Hookcoco