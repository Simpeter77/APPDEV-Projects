import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
export default function Products(props) {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
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
    function renderKeyboards() {
        return (
            <div className="products-container">
                {props.keyboards.map((keyboard) => (
                    <div className="products-details" key={keyboard.id}>
                        <Link to={`/products/${keyboard.id}`} state={{ keyboard }}>
                            <img src={keyboard.img} alt={keyboard.name} />
                            <strong><p>{keyboard.name}</p></strong>
                            <p>₱{keyboard.price}</p>
                            <p>Rating: {renderStars(keyboard.rating)} ({keyboard.rating})</p>
                        </Link>
                        <Link to={`/products/${keyboard.id}`} state={{ keyboard }} className='products-button-container'>
                            <button>Learn More</button>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="products-parent">
            {renderKeyboards()}
            <br />
        </div>
    );
}
