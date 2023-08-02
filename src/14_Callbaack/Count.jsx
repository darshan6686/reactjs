import React from 'react'

const Count = ({text, count}) => {
    console.log(`Rendeing ${text}`);
  return (
    <div className='text-xl'>
      {text} - {count}
    </div>
  )
}

export default React.memo(Count)