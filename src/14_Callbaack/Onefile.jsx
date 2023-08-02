import React from 'react'
import { useCallback, useState } from 'react'

const Onefile = () => {
    let [age, setAge] = useState(25);
    let [salary, setSalary] = useState(25000);

    let incrimentAge = useCallback(() => {
        console.log('Incramenting age');
        setAge(age+1);
    },[age])

    let incrimentSalary = useCallback(() => {
        console.log('Incramenting salary');
        setSalary(salary+1000);
    }, [salary])

  return (
    <>
        <div className='text-center mt-10'>
            <h1>useCallback hook</h1>
            <h3>age - {age}</h3>
            <button onClick={incrimentAge} className='border border-black px-4 py-2 my-2 text-lg'>incrimentAge</button>
            <h3>salary - {salary}</h3>
            <button onClick={incrimentSalary} className='border border-black px-4 py-2 my-2 text-lg'>incrimentSalary</button>
        </div>
    </>
  )
}

export default Onefile