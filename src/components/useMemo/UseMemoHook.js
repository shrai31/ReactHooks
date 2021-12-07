import React, {useState, useMemo} from 'react'

function UseMemoHook() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const incrementOne = () =>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo = () =>{
        setCounterTwo(counterTwo+1)
    }
   const isEven = useMemo(()=>{
        let i=0;
        while(i<2000) i++;
        return counterOne % 2 ===0
    },[counterOne])
    // const isEven = () =>{
    //     let i=0;
    //     while(i<2000000) i++;
    //     return counterOne % 2 ===0
    // }
    return (
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            {/* <span>{isEven()?'Even':'Odd'}</span><br/> */}
            <span>{isEven?'Even':'Odd'}</span><br/>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    )
}

export default UseMemoHook
