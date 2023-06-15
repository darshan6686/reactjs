import React from 'react'


let sci = () => {
    var stream = ["sofware", "mechenical", "chemist"];
    return (
        <div>
            <div className='w-2/5 h-auto p-5 bg-gray-300 shadow-2xl mx-auto my-10'>
                <h1 className='text-5xl mb-4'>Information of science stream</h1>

                <h1 className='text-3xl mt-5 font-bold'>School</h1>
                <li className='text-lg leading-8'>completed 11 science</li>
                <li className='text-lg leading-8'>completed 12 science</li>

                <h1 className='text-3xl mt-5 font-bold'>College</h1>
                <li className='text-lg leading-8'>chose {stream[0]} enginer in science stream</li>
                <li className='text-lg leading-8'>study 4 year in {stream[0]} enginer</li>

                <h1 className='text-3xl mt-5 font-bold'>Job</h1>
                <li className='text-lg leading-8'>after completed study job in company</li>
            </div>
        </div>
    )
}

let com = () => {
    var comstream = ["CA", "bca", "bcom"];
    return (
        <div>
            <div className='w-2/5 h-auto p-5 bg-gray-300 shadow-2xl mx-auto my-10'>
                <h1 className='text-5xl mb-4'>Information of commerce stream</h1>

                <h1 className='text-3xl mt-5 font-bold'>School</h1>
                <li className='text-lg leading-8'>completed 11 commerce</li>
                <li className='text-lg leading-8'>completed 12 commerce</li>

                <h1 className='text-3xl mt-4 font-bold'>College</h1>
                <li className='text-lg leading-8'>chose {comstream[1]} in commerce stream</li>
                <li className='text-lg leading-8'>study 3 year in {comstream[1]}</li>
                <li className='text-lg leading-8'>study 2 year in master</li>

                <h1 className='text-3xl mt-4 font-bold'>Job</h1>
                <li className='text-lg leading-8'>after completed study job in company</li>
            </div>

        </div>
    )
}

let Product = ({ Item, Status, isStock }) => {
    switch (isStock) {
        case "science":
            return (<h1>{Item}</h1>)

        case "commerce":
            return (<h1>{Status}</h1>)

        default:
            return (<h1>Not Found!</h1>);

    };

}

const Task = () => {
    return (
        <>         
            <div>
                <Product Item={sci()} Status={com()} isStock="science" />
            </div>
        </>
    )
}

export default Task
