import React from "react";
import Button from "./Task4";

function play1() {
  return (document.getElementById("result").innerHTML = `
    <div>
            <div>
                <h1>Information of science stream</h1>

                <h1>School</h1>
                <li>completed 11 science</li>
                <li>completed 12 science</li>

                <h1>College</h1>
                <li>chose sofware enginer in science stream</li>
                <li>study 4 year in sofware enginer</li>

                <h1 className='text-3xl mt-5 font-bold'>Job</h1>
                <li>after completed study job in company</li>
            </div>
        </div>
    `);
}

function pause1() {
  return (document.getElementById("result").innerHTML = `
    <div>
    <div>
        <h1>Information of commerce stream</h1>

        <h1>School</h1>
        <li>completed 11 commerce</li>
        <li>completed 12 commerce</li>

        <h1>College</h1>
        <li>chose bca in commerce stream</li>
        <li>study 3 year in bca</li>
        <li>study 2 year in master</li>

        <h1>Job</h1>
        <li>after completed study job in company</li>
    </div>

</div>
    `);
}

const Tasklist4 = () => {
  return (
    <div>
      <Button name="click me" onPlay={play1} onPause={pause1}></Button>
    </div>
  );
};

export default Tasklist4;
