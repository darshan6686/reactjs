import React from 'react'
import { useState } from 'react'

const Taskk3 = () => {
    let array = [
        {
            id: 1,
            Name: "Dog"
        },
        {
            id: 2,
            Name: "Cat"
        },
        {
            id: 3,
            Name: "Horse"
        },
        {
            id: 4,
            Name: "Rabbit"
        },
        {
            id: 5,
            Name: "Elephant"
        },
        {
            id: 6,
            Name: "Cow"
        },
    ];

    const [count, Usecount] = useState(array);

  let remov = (itemId) => {
    Usecount(
      count.filter((elem) => {
        return elem.Name !== itemId;
      })
    );
  };


  return (
    <div>
    <ul>
      {array.map((el)=>{
        return(
            <div className='flex my-3'>
                <li key={el.id} className='border border-black w-28 h-10 flex items-center justify-center'>{el.Name}</li>
                <button className='bg-red-600 text-white px-4 ml-3' onClick={() => remov(el.Name)}>Delete</button>
            </div>
        )
      })}
      </ul>
    </div>
  )
}

export default Taskk3