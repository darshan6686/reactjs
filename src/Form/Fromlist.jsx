import React, { useState } from 'react'

const Fromlist = () => {

  const [Name , setName] = useState({
    name:'',
    name2:'',
    email:'',
    password:''
  });

  const Hinput = (e) =>{
    const{name,value} = e.target;
    setName({
      ...Name,[name]:value
    })
  }

  const Hsubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div>
      <form className='bg-black w-1/3 h-auto mx-auto p-5 mt-5' onSubmit={Hsubmit}>
          <div className='my-4'>
            <label className='text-xl text-white'>First Name : </label><br/>
            <input type='text' className='border w-full h-10' onChange={Hinput} name='First Name' />
          </div>
          <div className='my-4'>
            <label className='text-xl text-white'>Last Name : </label><br/>
            <input type='text' className='border w-full h-10' onChange={Hinput} name='Last Name' />
          </div>
          <div className='my-4'>
            <label className='text-xl text-white'>Email : </label><br/>
            <input type='email' className='border w-full h-10' onChange={Hinput} name='Email' />
          </div>
          <div className='my-4'>
            <label className='text-xl text-white'>Password : </label><br/>
            <input type='password' className='border w-full h-10' onChange={Hinput} name='Password' />
          </div>

          <div className='flex justify-center'>
            <button className='w-2/5 bg-blue-600 mt-3 h-12 text-white'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default Fromlist
