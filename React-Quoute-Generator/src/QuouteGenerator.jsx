import { useState } from "react"
const epicticus = [
    "Don't explain your philosophy. Embody it.",
    "Wealth consists not in having great possesions, but in having few wants.",
    "If you want to improve, be content to be thought foolish and stupid",
    "It is impossible for a man to learn what he thinks he already knows",
    "He who laughs at himself never runs out of thingsto laugh at"
]
const markus = ["The happiness of your life depends upon the quality of your thoughts.",
"Waste no more time arguing about what a good man should be. Be one.",
"The best revenge is to be unlike him who performed the injury.",
"If it is not right do not do it; if it is not true do not say it.",
"The soul becomes dyed with the color of its thoughts."]
let i = 0 
let y =""
export default function QuouteGenerator(){
const [quouteE,setQuouteE] = useState("Generate a quoute!")
const [quouteM,setQuouteM] = useState("Generate a quoute!")
function getRandomNumber(){
    let randomnum
    let past
    randomnum = Math.floor(Math.random() * epicticus.length)
    past = randomnum
    return randomnum
}
function getRandomQuouteEpicticus(){
    let epi = epicticus[getRandomNumber()]
    y = epi
    return epi
}

function changeRandomQuouteEpicticus(){
    setQuouteE(getRandomQuouteEpicticus())
}



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
        <div class="container">
            <h1>My quoute generator project</h1>
            <hr />
            <h1>Epicticus</h1>
            <div className="epic">
            <h2>Quoute: {quouteE}</h2>  
            </div>
            <br />
            <button onClick={changeRandomQuouteEpicticus}><h3>Generate Quote!</h3></button>
            <hr />
            <h1>Markus Aurelius </h1>
            <div className="mark">
            <h2>Quoute: {quouteM}</h2>  
            </div>
            <br />
            <button onClick={changeRandomQuouteMarkus}><h3>Generate Quote!</h3></button>
        </div>
)
}
