import React from 'react'

const Task2 = (props) => {
  let { name, type, price} = props;
  return (

    <div className='inline-block'>
        <div className="card ms-5 mt-5 shadow-lg" style={{ width: "23rem" }}>
          <div className="card-body ps-4">
            <label className="font-bold" style={{ width: "7rem" }}>name </label>  : {name}<br />
            <label className="font-bold" style={{ width: "7rem" }}>type</label>  : {type}<br />
            <label className="font-bold" style={{ width: "7rem" }}>price </label>  : {price}<br /> 
          </div>
        </div>
    </div>
  )
}

export default Task2;