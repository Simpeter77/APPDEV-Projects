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
    const incrementCountby5 =()=>{
        // previous state => new state
         setCount(c=>c+5)
     }
     const decrementCountby5 =()=>{
        // previous state => new state
         setCount(c=>c-5)
     }
    function generatePositiveRandomNumber(){
        return Math.floor(Math.random()*999)
     }
     function generateNegativeRandomNumber(){
        return Math.floor(Math.random()*-999)
     }
     const randomizeCount = () =>{
      
        if(count<=0){
            if(setCount(generatePositiveRandomNumber())==count){
                setCount(generatePositiveRandomNumber()+2)
            }
            else{
                setCount(generatePositiveRandomNumber())
            }
                
        }
        else if(count>0){
            if(setCount(generateNegativeRandomNumber())==count){
                setCount(generateNegativeRandomNumber()+2)
            }
            else{
                setCount(generateNegativeRandomNumber())
            }
        }

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
            <br/>
            <button className="button-container-decrement" onClick={decrementCountby5}>Decrement 5</button>
            <button className="button-container-reset" onClick={randomizeCount}>Randomize</button>
            <button className="button-container-increment" onClick={incrementCountby5}>Increment 5</button>
        </div>
    </>
    );
}