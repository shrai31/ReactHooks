import React, { useState } from 'react'

function UseStateHooks() {
    const [count, setcount] = useState(0);

    const handleIncrement = () =>{
        setcount(count+5);
    }
    const handleDecrement = () =>{
        for(let i=0;  i<10; i++){
            setcount(prevstate=> prevstate-i);
            // setcount(count-5);
        }
    }
    const handleReset = () =>{
        setcount(0);
    }

    return (
        <div>
            {count}<br />
            <button onClick={handleIncrement}>Increment</button> <br />
            <button onClick={handleDecrement}>Decrement</button> <br/>
            <button onClick={handleReset}>Reset</button> <br/>
        </div>
    )
}

export default UseStateHooks
