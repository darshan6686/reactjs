import React, { useState } from 'react'

const Fromlist2 = () => {

  const [Name , setName] = useState("");
  const [Name2 , setName2] = useState("");
  const [Email , setEmail] = useState("");
  const [Password , setPasssword] = useState("");

  const handleName = (e) =>{
    console.log(e.target.value);
    setName(e.target.value);
  }
  const handleName2 = (e) =>{
    console.log(e.target.value);
    setName2(e.target.value);
  }
  const handleEmail = (e) =>{
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  const handlePassword = (e) =>{
    console.log(e.target.value);
    setPasssword(e.target.value);
  }

  function Fsubmit(e){
    e.preventDefault();
  }

  return (
    <div>
      <form className='bg-black w-1/3 h-auto mx-auto p-5' onSubmit={Fsubmit}>
          <div className='my-4'>
            <label className='text-xl text-white'>First Name : </label><br/>
            <input type='text' className='border w-full h-10' onChange={handleName} />
          </div>
          <div className='my-4'>
            <label className='text-xl text-white'>Last Name : </label><br/>
            <input type='text' className='border w-full h-10' onChange={handleName2} />
          </div>
          <div className='my-4'>
            <label className='text-xl text-white'>Email : </label><br/>
            <input type='email' className='border w-full h-10' onChange={handleEmail} />
          </div>
          <div className='my-4'>
            <label className='text-xl text-white'>Password : </label><br/>
            <input type='password' className='border w-full h-10' onChange={handlePassword} />
          </div>

          <div className='flex justify-center'>
            <button className='w-2/5 bg-blue-600 mt-3 h-12'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default Fromlist2