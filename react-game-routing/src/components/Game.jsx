import { useLocation } from "react-router-dom"
export default function Game(){
    const location = useLocation()
    const game = location.state.game;
    function renderReview(){
        return(
            <>
            {game.reviews.map((rev) => (
                <div className="review-container">
                    <hr />
                    <li key={rev.id}><strong>{rev.username}</strong> - Rating: {rev.rating} / 5</li>
                    <p>{rev.review}</p> 
                    <hr />
                </div>
            ))}
            </>
        )
    }
    return(
        <div className="game-details">
            <img src={game.img} alt={game.name} /><br />
            <h1>{game.name}</h1>
            <p>{game.description}</p><br />
            <h3>Publisher: {game.publisher}</h3>
            <h3>Developer: {game.developer}</h3><br />
            <hr />
            <h2>Reviews:</h2>
            {renderReview()}
        </div>
    )
}