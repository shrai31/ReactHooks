import React from 'react'
import useCustomeHooks from './CustomeHooks';

function NormalCounter1() {
    const [count, increment, decrement, reset] = useCustomeHooks();
    
    return (
        <div>
            <h2>Count = { count }</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default NormalCounter1;
