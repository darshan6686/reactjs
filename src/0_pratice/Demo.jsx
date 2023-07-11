import React from 'react'
import { useState } from 'react';

const Demo = () => {

  const arr  = ["apple","orange","banana","mango","watermalon"];
  const [name1, setName] = useState(arr);

  const f1 = (e) => {
    if(e.target.value === ""){
      setName(arr);
      return 1;
    }
    const filteredValues = arr.filter((item) => 
        item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setName(filteredValues);
  }

  return (
    <div className='container-xl mx-auto mt-10'>
      <label className='font-bold'>Search : </label>
      <input name='query' type='text' className='border border-black w-96 h-10 ml-4 focus:outline-none px-3' onChange={f1} />

      {name1 && name1.map((item, index) => (
        <div className='leading-10 w-4/12 ml-12 text-center' key={index}>{item}</div>
        ))}
    </div>
  )
}

export default Demo