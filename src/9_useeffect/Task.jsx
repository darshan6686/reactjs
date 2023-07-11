import React from 'react'
import { useState } from 'react';

const Task = () => {

    let array = [];
    let [count, setCount] = useState(0);
    let [fcount, Usecount] = useState(array);

    let [Name, setName] = useState("");
    function Fname(e) {
      setName(e.target.value);
    }

    let [creat, setCreat] = useState(array);

    function add(){
      Usecount(array)
      setCreat([{
        "Name": `${Name}`
      },...fcount])
      Usecount(creat);

      setCount(count+1);
  }

    // let remove = (itemId) => {
    //   Usecount(
    //     fcount.filter((elem) => {
    //       return elem.name !== itemId;
    //     })
    //   );

    //   if(count!==0){
    //     setCount(count-1);
    //   }
    // };

    let clear = () => {
      Usecount(
        fcount.filter(() => {
          return 0;
        })
      )
      setCount(0)
    }
    
  return (
    <>
        <nav className='fixed text-2xl mt-5'>
            <div className='relative ml-40'>
                <i className="fa-regular fa-heart"></i>
                <div className='w-5 h-5 rounded-full bg-pink-600 text-white text-sm flex justify-center absolute -top-1 -right-3'>{count}</div>
            </div>
        </nav>
      
        <div>
        <input
        className="border border-black ml-40 w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Name"
        type="text"
        placeholder="Name"
        value={Name}
        onChange={Fname}
      />
          <button className="bg-red-600 text-white px-4 py-2 mt-40" onClick={add}>Add</button><br />
          {fcount.map((ele)=>{
            return(
              <div>
              <h4 className='ml-40'>{ele.Name} { /*<button className="bg-red-600 text-white px-4 mt-3 ml-3" onClick={()=>remove(ele.name)}>Delete</button> */}</h4>
            </div>
            )
          })}
          <button className="bg-red-600 text-white px-4 py-2 ml-40 mt-5" onClick={clear}>Clear All</button>
        </div>

    </>
  )
}

export default Task