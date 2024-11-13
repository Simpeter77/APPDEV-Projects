import {useState} from 'react'
export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [game, setGame] = useState("")
    const [rating, setRating] = useState("")

    function handleGame(event){
        setGame(event.target.value)
    }

    function handleRating(event){
        setRating(event.target.value)
    }

    function handleAddGame(){
        if(game && rating){
            const newRating = {game, rating}
            setReviews([...reviews, newRating])
        }
        setGame("")
        setRating("")
    }

    function renderGames(){
        return(
            reviews.map((item, index) =>(
                <li key={index}>
                {item.game} - {item.rating} - {new Date().getUTCDate()}/{new Date().getUTCMonth()}/{new Date().getFullYear()}
              </li>
            ))
        )
    }

    return(
        <div className="reviews">
            <h1>Game Review</h1>
            Game: <br />
            <input type='text' placeholder='Enter Game Name' onChange={handleGame} value={game}></input>
            <br /><br />
            Review:
            <br />
            <textarea placeholder='Enter Rating' onChange={handleRating} value={rating}></textarea>
            <br /> <br />
            <button onClick={handleAddGame}>Add Game</button>
            {reviews.length>0? 
                (<h1>This are my game reviews</h1>):(<h1>Add a Game Review!</h1>)
            }
            <ol>{renderGames()}</ol>
        </div>
    )
}