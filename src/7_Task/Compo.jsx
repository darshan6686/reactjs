import React from 'react'
import { useState } from 'react'

const Compo = () => {
    let array = [
        {
            id: 1,
            Name: "Aryan Kakadiya",
            Email: "Example@gmail.com",
            Location: "Boston,USA",
            Phone: 9934567788,
        },
        {
            id: 2,
            Name: "Camreen Green",
            Email: "Example@gmail.com",
            Location: "Boston,USA",
            Phone: 9934567788,
        },
        {
            id: 3,
            Name: "Alan Green",
            Email: "Example@gmail.com",
            Location: "Boston,USA",
            Phone: 9934567788,
        },
        {
            id: 4,
            Name: "Red Bull",
            Email: "Example@gmail.com",
            Location: "Boston,USA",
            Phone: 9934567788,
        },
        {
            id: 5,
            Name: "Green Bull",
            Email: "Example@gmail.com",
            Location: "Boston,USA",
            Phone: 9934567788,
        },
        {
            id: 6,
            Name: "Yellow Bull",
            Email: "Example@gmail.com",
            Location: "Boston,USA",
            Phone: 9934567788,
        }
    ]

    const [count, Usecount] = useState(array);

    let remov = (itemId) => {
        Usecount(
            count.filter((elem)=>{
                return elem.id!== itemId
            })
        )
    }


  return (
    <div>
        <div className='w-9/12 h-auto p-5 shadow-2xl mx-auto mt-5'>
           <div className='flex justify-between'>
                <h1>Products</h1>
                <button className='bg-blue-500 px-4 text-white'>Add groups</button>
           </div>
           <input type='search' className='w-8/12 border h-10 bg-blue-100 px-3 mt-5' placeholder='Search' />

           <table className="mt-12 table-fixed w-full border-collapse border">
            <thead>
                <tr className='h-16'>
                    <th className='pl-5'>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    {count.map((el)=>{
                        return(
                            <tr className='h-16 border border-collapse'>
                                <td className='pl-5'>{el.Name}</td>
                                <td>{el.Email}</td>
                                <td>{el.Location}</td>
                                <td>{el.Phone}</td>
                                <td>
                                    <button className='border-2 text-blue-600 border-blue-700 px-3 rounded-md'>Edit</button>
                                    <button className='border-2 text-red-600 border-red-600 px-3 rounded-md ml-5' onClick={()=>remov(el.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
           </table>
        </div>
    </div>
  )
}

export default Compo
