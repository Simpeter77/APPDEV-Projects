import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Showcase({ keyboards }) {
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

    function renderShowcase() {
        return (
            <div className="showcase-container">
                {keyboards.map((keyb) => (
                    <div className="showcase-details" key={keyb.id}>
                        {keyb.reviews.map((rev) => (
                            <Link
                                to={`/products/${keyb.id}`}
                                state={{ keyboard: keyb }}>
                                <div className="showcase-review"
                                key={rev.id}>
                                <img src={keyb.img[0]} alt={keyb.name} />
                                <p className="showcase-p">₱{keyb.price}</p>
                                <p className="showcase-p">{keyb.name}</p>
                                <p className="showcase-p">{rev.date}</p>
                                <p className="showcase-p">
                                    <strong>{rev.username}</strong>
                                </p>
                                <p className="showcase-p">
                                    {renderStars(rev.rating)} ({rev.rating})
                                </p>
                                <p className="showcase-p">{rev.review}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return <div className="showcase-parent">
        <h1 id="showcase-header">What Our Customers Have to say About Our Products</h1>
        {renderShowcase()}
        </div>;
}
