import React from "react";
import { useState } from "react";
import datas from "./Hooktas.json";

const Hooktask1 = () => {
  const [nData, setnData] = useState(datas);

  const handleClick = () => {
    setnData([]);
  };

  const handleClickr = (itemId) => {
    setnData(
      nData.filter((ele) => {
        return ele.id !== itemId;
      })
    );
  };
  let form = ["drama","action","love"];
  return (
    <>
    <div>
        {form.map((elem) => {return (<div>
            <h1 className="ml-20 text-5xl font-bold my-5">{elem}</h1>
            <table className="table-fixed w-11/12 mx-auto">
                <thead className="bg-black text-white">
                    <tr className="border border-black px-3 py-1">
                        <th className="pl-5"><h2>Id</h2></th>
                        <th><h2>Image</h2></th>
                        <th><h2>Name</h2></th>
                        <th><h2>Type</h2></th>
                        <th><h2>Price</h2></th>
                        <th><h2>Button</h2></th>
                    </tr>
                </thead>

                <tbody>
                    {nData.filter((el) => {return elem === el.type}).map((items) => (
                        <tr className="border border-black px-3 py-1">
                            <td className="pl-5"><h5>{items.id}</h5></td>
                            <td><img src={items.img} alt="" height={"100px"} width={"90px"} className="p-2" /></td>
                            <td><h5>{items.name}</h5></td>
                            <td><h5>{items.type}</h5></td>
                            <td><h5>{items.price}</h5></td>
                            <td><button onClick={() => handleClickr(items.id)}className="px-5 py-2 bg-red-600 text-white">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>)})
                }
            <button onClick={handleClick}className="px-20 py-3 bg-blue-600 text-white ml-20 my-5">Clear All</button>
      </div>
    </>
  );
};

export default Hooktask1;
