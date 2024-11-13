import { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [game, setGame] = useState("");
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  function handleGame(event) {
    setGame(event.target.value);
  }

  function handleRating(event) {
    setRating(event.target.value);
  }

  function handleReviewText(event) {
    setReviewText(event.target.value);
  }

  function handleAddGame() {
    if (game && rating && reviewText) {
      const newReview = { game, rating, reviewText };
      setReviews([...reviews, newReview]);
    }
    else{
        alert("Enter All needed information")
    }
    setGame("");
    setRating("");
    setReviewText("");
  }

  function renderGames() {
    return reviews.map((item, index) => {
      const stars = "⭐".repeat(Number(item.rating));
      return (
        <li key={index}>
          {item.game} - {stars}<br />
          Review: {item.reviewText}<br />
          Date Added: {new Date().getUTCDate()}/{new Date().getUTCMonth() + 1}/{new Date().getFullYear()}
        </li>
      );
    });
  }

  return (
    <>
    <div className="reviews">
      <h1>Game Review</h1>
      Game: <br />
      <input type="text" placeholder="Enter Game Name" onChange={handleGame} value={game} />
      <br /><br />
      Review: <br />
      <textarea
        placeholder="Enter additional review details here"
        onChange={handleReviewText}
        value={reviewText}
      />
      <br /><br />
      Rating: <br />
      <select onChange={handleRating} value={rating}>
        <option value="">Select Rating</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <br /><br />
      <button onClick={handleAddGame}>Add Game</button>
    </div>
    {reviews.length > 0 ? (
        <h1>These are my game reviews</h1>
      ) : (
        <h1>Add a Game Review!</h1>
      )}
      <ol>{renderGames()}</ol>
    </>
    
  );
}
