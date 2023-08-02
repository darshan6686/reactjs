import React from 'react'

const Button = ({handleClick, children}) => {
    console.log("Rendring button",children);
  return (
    <div>
      <button onClick={handleClick} className='border border-black px-4 py-2 my-2 text-lg'>{children}</button>
    </div>
  )
}

export default React.memo(Button)