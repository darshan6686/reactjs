import React from 'react'

const Taskk2 = () => {

    function dispaly(e){
        document.getElementsByTagName("p").innerHTML += e;
    }
    
  return (
    <div className='container-2xl flex justify-end items-center h-screen bg-slate-300'>
      <div className='w-96 h-[575px] bg-slate-500 mr-40 text-white'>
        <div className='h-2/6 text-4xl text-right pt-32 mr-5'>
            <p id='result'></p>
        </div>

        <div className='h-4/6'>
            <div className='grid grid-cols-4'>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(7)}>7</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(8)}>8</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(9)}>9</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly("x")}>x</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(4)}>4</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(5)}>5</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(6)}>6</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly("-")}>-</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(1)}>1</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(2)}>2</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(3)}>3</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly("+")}>+</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly("÷")}>/</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(0)}>0</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer' onClick={dispaly(".")}>.</div>
                <div className='w-24 h-24 border text-4xl text-center py-4 cursor-pointer'>=</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Taskk2