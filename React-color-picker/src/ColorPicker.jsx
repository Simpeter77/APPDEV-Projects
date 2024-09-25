import React,{useState} from "react";
const randomColor = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"]
export default function ColorPicker(){
    // a function component -> useState = Hook
    // statles component -> funciton component
     
    const [color, setColor] = useState('#FFFFFF')
    
    function getRandomNumber(){
        return Math.floor(Math.random()*randomColor.length)
    }

    // get a random color from the array "randoColor"
    function getRandomColor(){
        let hex="#";
        for(let i =0;i<6;i++){
            hex += randomColor[getRandomNumber()]
        }
        return hex
    }

    // updating the state=> color
    function randomColorChange(){
        setColor(getRandomColor())
        useState({color})
    }

    //event handling color changes for color input
    function handleColorChange(event){
        setColor(event.target.value)
    }
    return(
        <>
        <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>Selected Color: {color} </p>
        </div>
        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
        <button className="randomize" onClick={randomColorChange}>Randomize</button>
        </div>
        </>
    )
}