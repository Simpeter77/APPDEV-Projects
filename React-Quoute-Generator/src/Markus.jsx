import { useState } from "react"
const markus = ["The happiness of your life depends upon the quality of your thoughts.",
"Waste no more time arguing about what a good man should be. Be one.",
"The best revenge is to be unlike him who performed the injury.",
"If it is not right do not do it; if it is not true do not say it.",
"The soul becomes dyed with the color of its thoughts."]
let i = 0 
let y =""
export default function Markus(){
const [quouteM,setQuouteM] = useState("Generate a quoute!")
function incrementMarkus(){
    let q = ""
    if(i>markus.length-1){
        i=0
    }
    q = markus[i]
    i++
    return q
}
function changeRandomQuouteMarkus(){
    setQuouteM(incrementMarkus())
}
return(
        <div>
            <h1>Markus Aurelius </h1>
            <div className="mark">
            <h2> {quouteM}</h2>  
            </div>
            <br />
            <button onClick={changeRandomQuouteMarkus}><h3>Generate Quote!</h3></button>
        </div>
)
}
