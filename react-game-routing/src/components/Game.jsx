import { useLocation } from "react-router-dom"
export default function Game(){
    const location = useLocation()
    const game = location.state.game;
    function renderReview(){
        return(
            <>
            {game.reviews.map((rev) => (
                <div className="review-container">
                    <li key={rev.id}><strong>{rev.username}</strong> - Rating: {rev.rating}</li>
                    <p>{rev.review}</p>
                </div>
            ))}
            </>
        )
    }
    return(
        <div className="game-details">
            <img src={game.img} alt={game.name} />
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <h3>Publisher: {game.publisher}</h3>
            <h3>Developer: {game.developer}</h3>
            <h2>Reviews:</h2><br />
            {renderReview()}
        </div>
    )
}