import React, {useState, useEffect} from 'react'

export default function BasicUseEffect() {

    const [count, setcount] = useState(0);
    const [name , setName] = useState("");

    useEffect(()=>{
        console.log("useEffect is running");
         document.title = `you clicked ${count} times`;  
    // },[count])
   
    })
    
    return (
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>
            <button onClick={()=>setcount(count+1)}>Clicked on incremment {count} times </button> <br/>
            {count}           
        </div>
    )
}


// return () =>{
//     console.log("Component is unmount");
// }