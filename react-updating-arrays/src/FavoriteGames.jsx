import React, {useState} from 'react'
export default function FavoriteGames(){
    const [games,setgames] = useState(["Hades", "Risk of Rain 2","Doomsday Hunters"])
    function  handleAddGame(){
        const newGame = document.getElementById('gameInput').value
        setgames(g=>[...g,newGame])
        document.getElementById('gameInput').value = "";
    }
    function handleRemoveGame(index){
        const newGame = games.filter((game, i)=> i !== index)
        setgames(newGame)
    }

    return(
        <>
        <div>
            <h2>This is my favorite games in 2024: </h2>
            <ul>
                {
                    games.map((game, index)=>
                    <li key={index} onClick={() => handleRemoveGame(index)}> {game}</li>)
                }
            </ul>
            <input type="text" name="gameinput" id="gameInput" />
           <br />
           <br />
            <button type='button' onClick={handleAddGame}>Add Game</button>
        </div>
        </>
    )
}