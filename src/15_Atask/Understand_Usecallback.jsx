import React, { useState } from 'react';
import Count12 from './Count';
import Count13 from './Count1';
import { useCallback } from 'react';

const Understand_Usecallback = () => {

  let [Count, setCount] = useState(0);
  let [Count1, setCount1] = useState(0);

  let Countupdation = useCallback(() => {
    setCount(Count + 1);
  }, [Count]);

  let Countdecre = useCallback(() => {
    setCount(Count - 1);
  }, [Count]);

  let Count1updation = useCallback(() => {
    setCount1(Count1 + 1);
  }, [Count1]);
  
  let Count1decre = useCallback(() => {
    setCount1(Count1 - 1);
  }, [Count1]);

  return (
    <>
      <div className='text-2xl'>
        <div className='flex justify-center mt-10'>
          <div className='font-bold'>square : </div>
          <div className='ms-5'>{Count*Count}</div>
        </div>

        <div className='flex justify-center'>
          <div className='font-bold'>cube : </div>
          <div className='ms-5'>{Count1*Count1*Count1}</div>
        </div>

        <div className='text-center mt-10 mb-3'>square</div>
        <div className='flex justify-center'>
          <button className='border-2 border-black p-1 hover:text-white hover:bg-black font-semibold' onClick={Countdecre}>-</button>
          <Count12 value={Count}></Count12>
          <button className='border-2 border-black p-1 hover:text-white hover:bg-black font-semibold' onClick={Countupdation}>+</button>
        </div>

        <div className='text-center mt-10 mb-3'>cube</div>
        <div className='flex justify-center'>
          <button className='border-2 border-black p-1 hover:text-white hover:bg-black font-semibold' onClick={Count1decre}>-</button>
          <Count13 value={Count1}></Count13>
          <button className='border-2 border-black p-1 hover:text-white hover:bg-black font-semibold' onClick={Count1updation}>+</button>
        </div>
      </div>
    </>
  )
}

export default Understand_Usecallback;