import React from 'react'

const Faked = (props) => {
    let { userId, id, title, completed } = props;
    return (
        <div className='d-inline-block'>
            <div className="card ms-5 mt-5 shadow-lg" style={{ width: "22.5rem" }}>
                <div className="card-body ps-4">
                    <label className="fw-bold" style={{ width: "7rem" }}>userId </label>  : {userId}<br />
                    <label className="fw-bold" style={{ width: "7rem" }}>id</label>  : {id}<br />
                    <label className="fw-bold" style={{ width: "7rem" }}>title </label>  : {title}<br />
                    <label className="fw-bold" style={{ width: "7rem" }}>completed </label>  :  {completed}<br />
                </div>
            </div>
        </div>
    )
}

export default Faked;
