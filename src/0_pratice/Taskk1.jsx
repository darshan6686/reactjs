import React, { useState } from 'react'

const Taskk1 = () => {
    let [name, setName] = useState("");
    let [name1, setName1] = useState("");

    let f1 = (e) => {
        setName(e.target.value);
    }

    let f2 = (e) => {
        setName1(e.target.value);
    }

    let show = () => {
        alert(`Hello ${name} ${name1}`);
    }

  return (
    <div className='container mx-auto mt-10'>
      <input type='text' placeholder='First Name' value={name} onChange={f1} className='border border-black px-3 w-96 h-10 focus:outline-none' /><br/>
      <input type='text' placeholder='Last Name' value={name1} onChange={f2} className='border border-black px-3 w-96 h-10 mt-3 focus:outline-none' />  <br />
      <button className='bg-blue-600 text-white px-4 py-2 mt-5 ml-32' onClick={show}>Submit</button>
    </div>
  )
}

export default Taskk1