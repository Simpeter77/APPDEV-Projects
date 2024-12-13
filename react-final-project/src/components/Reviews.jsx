import { useState, useEffect } from "react";

export default function Reviews({ review }) {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        if (review && review.length) {
            setReviews(review);
        }
    }, [review]);

    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const remainingFraction = rating - fullStars; 
        const halfStar = remainingFraction >= 0.5; 
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        let stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star full">★</span>);
        }
        if (halfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }

        return stars;
    }

    const [newReview, setNewReview] = useState({ username: "", rating: 0, review: "" });

    const handleReviewInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({ ...prev, [name]: value }));
    };

    const addReview = () => {
        if (newReview.username && newReview.review) {
            const formattedDate = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            setReviews((prevReviews) => [
                ...prevReviews,
                { ...newReview, date: formattedDate, rating: Number(newReview.rating) },
            ]);
            setNewReview({ username: "", rating: 0, review: "" });
        }
    };

    function renderReviews() {
        return (
            <div className="review-container">
                <h1 id='reviews'>Company Reviews</h1>
                {reviews.length === 0 ? (
                    <p>No reviews available.</p>
                ) : (
                    reviews.map((review, index) => (
                        <div className="review-details" key={index}>
                            <p>{review.date}</p>
                            <h2>{review.username}</h2>
                            <h2>Rated: {renderStars(review.rating)} ({review.rating})</h2>
                            <p>{review.review}</p>
                        </div>
                    ))
                )}
                <div className="review-input">
                    <input
                        type="text"
                        name="username"
                        value={newReview.username}
                        placeholder="Your Name"
                        onChange={handleReviewInputChange}
                    />
                    <input
                        type="number"
                        name="rating"
                        value={newReview.rating}
                        placeholder="Rating (0-5)"
                        min="0"
                        max="5"
                        onChange={handleReviewInputChange}
                    />
                    <textarea
                        name="review"
                        value={newReview.review}
                        placeholder="Your Review"
                        onChange={handleReviewInputChange}
                    />
                    <button onClick={addReview}>Add Review</button>
                </div>
            </div>
        );
    }

    return (
        <>
            {renderReviews()}
            <br />
        </>
    );
}
