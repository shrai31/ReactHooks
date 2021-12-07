import React, {useRef, useEffect} from 'react'

export default function UseRefsHooks() {
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
        console.log("inputRef.current.value",inputRef.current.value);
    },[]);

    const handleClick = () =>{
        console.log(inputRef.current.value);
    } 
    
    return (
        <div>
            <input ref ={inputRef} type="text" onChange={handleClick} />
        </div>
    )
}
