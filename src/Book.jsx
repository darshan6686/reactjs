import React from 'react';

const Book = (props) => {
  let { name, Email, Address, qualification, contact, Img} = props;
  return (

    <div className='d-inline-block'>
      <div className="card ms-5 mt-5 shadow-lg" style={{ width: "23rem" }}>
      <img src={Img} style={{height: "250px"}} />
        <div className="card-body ps-4">
          <label className="fw-bold" style={{ width: "7rem" }}>Name </label>  : {name}<br />
          <label className="fw-bold" style={{ width: "7rem" }}>Email</label>  : {Email}<br />
          <label className="fw-bold" style={{ width: "7rem" }}>Address </label>  : {Address}<br />
          <label className="fw-bold" style={{ width: "7rem" }}>qualification </label>  :  {qualification}<br />
          <label className="fw-bold" style={{ width: "7rem" }}>contact </label>  : {contact}<br />
        </div>
      </div>
    </div>
  )
}


export default Book;