import React from 'react'
import Expences from './Expences'

const Main = () => {
    let expances = [
        {
          id:'e1',
          title:'school Fee',
          amount:250,
          date:new Date(2023, 5, 15)
        },
        {
          id:'e2',
          title:'Books',
          amount:1000,
          date:new Date(2023, 5, 15)
        },
        {
          id:'e3',
          title:'Vacation',
          amount:500,
          date:new Date(2023, 5, 15)
        },
        {
          id:'e4',
          title:'food',
          amount:700,
          date:new Date(2023, 5, 15)
        }
      ];
  return (
    <div>
    <Expences item={expances}/>
    </div>
  )
}

export default Main
