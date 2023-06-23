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
  let form = ["drama","love"];
  return (
    <>
      <div>
        {form.map((elem) => {return (<div>
          <h1 className="ml-20 text-5xl font-bold">{elem}</h1>
          <ul className="flex flex-wrap">
            {nData.filter((el) => {return elem === el.type;}).map((items) => (
                <li className="my-4">
                  <div>
                    <div className="card ms-5 mt-5 shadow-lg" style={{ width: "22rem" }} >
                      <img src={items.img} style={{ height: "270px" }} alt="" />
                      <div className="card-body ps-4">
                        <label className="font-bold" style={{ width: "7rem" }}>name{" "}</label>{" "}: {items.name} <br />
                        <label className="font-bold" style={{ width: "7rem" }}>type</label>{" "}: {items.type}<br />
                        <label className="font-bold" style={{ width: "7rem" }}>price{" "}</label>{" "}: {items.price} <br />
                      </div>
                    </div>
                  </div>
                    <button
                    onClick={() => handleClickr(items.id)}className="px-4 py-2 bg-red-600 text-white ml-12 mt-3">Delete</button>
                </li>))}
          </ul>
        </div>)})
        }
        <button onClick={handleClick}className="px-4 py-2 bg-blue-600 text-white ml-14">Clear All</button>
      </div>
    </>
  );
};

export default Hooktask1;
