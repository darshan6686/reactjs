import React from 'react'

const Task4 = ({ name, onPlay, onPause}) => {
    let playing = false;
    function handleClick(){
        if(playing)
        {
            onPause()
        }
        else
        {
            onPlay()
        }

        playing = !playing;
    }
  return (
    <div>
      <button onClick={handleClick} className='px-4 mt-5 ml-16 py-3 bg-red-600 text-white'>{name}</button>
      <h5 id='result' className='w-2/5 h-auto p-5 bg-gray-300 shadow-2xl mx-auto my-10 leading-10'>Click the button and show Information</h5>
    </div>
  )
}

export default Task4
