import React, {useState, useCallback} from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title'

function UseCallbackHooks() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(200000);
    
    

    const incrementAge = useCallback(() =>{
        setAge(age+1);
    },[age]);

    const incrementSalary = useCallback(() =>{
        setSalary(salary+1000);
    },[salary]);

    return (
        <div>
            <Title />
            ------------------
            <h2>age: {age}</h2>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default UseCallbackHooks
