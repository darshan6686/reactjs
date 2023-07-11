import React from 'react'

const Adesign = (Props) => {
  return (
    <>
    <div className='container'>
        {/* This is an example component */}
        <div className="flex justify-center h-20 bg-black text-white">
            Aryan {Props.Count}
        </div>
    </div>
</>
  )
}

export default Adesign
