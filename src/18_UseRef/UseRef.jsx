import React from 'react'
import { useRef, useEffect } from 'react'

const UseRef = () => {
    let inputref = useRef(null)

    useEffect(()=> {
        inputref.current.focus()
    },[])

  return (
    <div>
        <form className='w-96 h-auto p-8 mx-auto mt-20 shadow-2xl'>
            <fieldset>
                <input type='text' ref={inputref} className='w-80 border border-black h-10 px-3' placeholder='Enter name' />  <br />
                <input type='email' className='w-80 border border-black h-10 mt-10 px-3' placeholder='Enter email' /> <br />
                <input type='password' className='w-80 border border-black h-10 mt-10 px-3' placeholder='Enter password' /> <br />
            </fieldset>
        </form>
    </div>
  )
}

export default UseRef