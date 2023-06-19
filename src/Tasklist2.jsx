import React from 'react';
import Task2 from './Task2';
import tasks from './Tasks.json';

const Tasklist2 = () => {

  var form = "drama";
  return (
    <>
      {
        tasks.filter((elem) => {return form === elem.type }).map((elem) => {
        return (
            <Task2 img={elem.img} name={elem.name} type={elem.type} price={elem.price} />
        )
      })}
    </>
  )
}

export default Tasklist2;