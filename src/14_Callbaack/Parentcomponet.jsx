import React from 'react'
import { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

const Parentcomponet = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    let incrimentAge = useCallback( () => {
        setAge(age + 1);
    },[age])

    let incrimentSalary = useCallback(() => {
        setSalary(salary + 1000);
    },[salary])

  return (
    <div className='text-center mt-20'>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrimentAge}>incrimentAge</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrimentSalary}>incrimentSalary</Button>
    </div>
  )
}

export default Parentcomponet