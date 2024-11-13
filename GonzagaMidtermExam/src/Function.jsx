import { useCallback, useState } from "react"

export default function Function(){
    const [num, setNum] = useState(0)

    const update = () =>{
        if(num === 0 || num%2 === 0){
            setNum((num+1)*2)
        }
        else if(num%2 === 1){
            setNum((num+1)+1)
        }   
    }
    return(
        <div className="">
        <h3>Number: {num}</h3>
        <button onClick={update}>Update</button>
        </div>
    )
}