import React from 'react'
import Faked from './Faked';
import fakejson from './Fakejson.json';

const Fake = () => {
  return (
    <>
        {fakejson.map((ele) => {
            return (
                <Faked userId={ele.userId} id={ele.id} title={ele.title} completed={ele.completed} />
            )
        })}
    </>
  )
}

export default Fake;