import { useState, useEffect } from "react";

export default function Reviews({ reviews }) {
    const [reviewed, setReviewed] = useState([]);
    const [newReview, setNewReview] = useState({ name: "", rating: 0, review: "" });

    useEffect(() => {
        setReviewed(reviews || []);
    }, [reviews]);

    const handleReviewInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({ ...prev, [name]: value }));
    };

    const addReview = () => {
        if (newReview.name && newReview.review) {
            const formattedDate = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            setReviewed((prevReviews) => [
                ...prevReviews,
                { ...newReview, date: formattedDate, rating: Number(newReview.rating) },
            ]);
            setNewReview({ name: "", rating: 0, review: "" });
        }
    };

    const renderStars = (rating) => {
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
    };

    const renderReview = () => (
        <div className="reviewpage-container">
            {reviewed.map((review) => (
                <div className="reviewpage-specific" key={review.id}>
                    <p>{review.date}</p>
                    <h2>
                        {review.name} {renderStars(review.rating)} ({review.rating})
                    </h2>
                    <h3>{review.review}</h3>
                </div>
            ))}
            <div className="review-input">
                <input
                    type="text"
                    name="name" // Fixed to match the state key
                    value={newReview.name}
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

    return <div className="showcase-parent">{renderReview()}</div>;
}
