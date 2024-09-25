import React, {useState} from "react";
// useState Hook for updating variable or STATEFUL VARIABLES
export default function Counter(){
    const[count, setCount] = useState(0)
    //to increment count
    const incrementCount =()=>{
       // previous state => new state
        setCount(c=>c+1)
    }
    const decrementCount=()=>{
        setCount(c=>c-1)
    }
    const resetCount = () => {
        setCount(c=>0)
    }

    return(
    <>
        <div className="container">
            <p className="counter-container">
                Counter: <br />{count}
            </p>
            &nbsp; 
            
            <button className="button-container-decrement" onClick={decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick={resetCount}>Reset</button>
            <button className="button-container-increment" onClick={incrementCount}>Increment</button>
        </div>
    </>
    );
}