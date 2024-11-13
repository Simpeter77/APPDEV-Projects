import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    
    function increment(){
        setCount(c => c+2)
    }
    function decrement(){
        setCount(c => c-2)
    }

    return(
        <div className="">
            <h3>Counter: {count}</h3>
            <button onClick={decrement}>Decrement by 2</button>
            <button onClick={increment}>Increment by 2</button>
        </div>
        
    )
}