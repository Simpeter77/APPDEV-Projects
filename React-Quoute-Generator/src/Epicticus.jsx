import { useState } from "react"
const epicticus = [
    "Don't explain your philosophy. Embody it.",
    "Wealth consists not in having great possesions, but in having few wants.",
    "If you want to improve, be content to be thought foolish and stupid",
    "It is impossible for a man to learn what he thinks he already knows",
    "He who laughs at himself never runs out of thingsto laugh at"
]
let past = null
export default function Epicticus(){
const [quouteE,setQuouteE] = useState("Generate a quoute!")
function getRandomNumber() {
    return Math.floor(Math.random() * epicticus.length); 
}
function getRandomQuouteEpicticus() {
    let epi;
    let randomIndex;
    do {
        randomIndex = getRandomNumber();
        epi = epicticus[randomIndex]; 
    } while (randomIndex === past); 
    past = randomIndex; 
    return epi
}

function changeRandomQuouteEpicticus() {
    setQuouteE(getRandomQuouteEpicticus()); 
}
    return(
        <div>
            <h1>Epicticus</h1>
            <div className="epic">
            <h2>{quouteE}</h2>  
            </div>
            <br />
            <button onClick={changeRandomQuouteEpicticus}><h3>Generate Quote!</h3></button>
            <hr />
        </div>
    )
}