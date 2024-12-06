import { useLocation } from "react-router-dom";
export default function Product(){
    const location = useLocation();
    const keyboard = location.state.keyboard;

    function renderStars(rating) {
        const fullStars = Math.floor(rating); // Number of full stars
        const remainingFraction = rating - fullStars; // Fractional part of the rating
        const halfStar = remainingFraction >= 0.5; // Add a half-star if the fraction is at least 0.5
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars
    
        let stars = [];
    
        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star full">★</span>);
        }
    
        // Add half star if needed
        if (halfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }
    
        // Add empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }
    
        return stars;
    }
    return(
      <div className="product-specifics">
        <br />
        <div className="product-specifics-left">
            <img src={keyboard.img} alt={keyboard.name} />
        </div>

        <div className="product-specifics-right">
            <h2>{keyboard.name}</h2>
            <h2>₱{keyboard.price}</h2>
            <p>Rating: {renderStars(keyboard.rating)} ({keyboard.rating})</p>
            <button>Add to cart</button>
        </div>
        
      </div>
    )
}