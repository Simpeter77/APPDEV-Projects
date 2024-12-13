import { useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Product({ addToCart }) {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    const [cart, setCart] = useState([]);
    const [selectedSwitch, setSelectedSwitch] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const location = useLocation();
    const { keyboard } = location.state; 

    useEffect(() => {
        if (selectedSwitch === "") {
            setSelectedSwitch(keyboard.switch[0].color);
        }
        setCurrentImage(keyboard.img[0]); 
    }, [keyboard.switch, selectedSwitch, keyboard.img]);


    const handleAddToCart = () => {
        const item = {
            id: keyboard.id,
            name: keyboard.name,
            price: keyboard.price,
            img: keyboard.img[0], 
            switch: selectedSwitch,
        };
        addToCart(item);
        window.alert("Added item To Cart")
    };

    const handleSwitchChange = (e) => {
        setSelectedSwitch(e.target.value);
    };

    function renderSwitches() {
        return (
            <div className="switch-container">
                <h3>Available Switches</h3>
                <select name="Switches" id="switch-select" value={selectedSwitch} onChange={handleSwitchChange}>
                    {keyboard.switch.map((switchItem) => (
                        <option key={switchItem.id} value={switchItem.color}>
                            {switchItem.color}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

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

    function renderspecs() {
        return (
            <div className="specs-container">
                <h1>Specs:</h1>
                <ul>
                    {keyboard.specs.map((spec, index) => (
                        <li key={index} className="specs-details">{spec}</li>
                    ))}
                </ul>
            </div>
        );
    }

    function renderIncluded() {
        return(
            <div className="included-container">
                <h1>What's Included in the box: </h1>
                <ol>
                {keyboard.included.map((include) =>(
                    <div className="included-container" key={include}>
                        <li>{include}</li>
                    </div>
                ))}
                </ol>
            </div>
        );
    }

    function handleImageChange(event) {
        setCurrentImage(event.target.src); 
    }

    function renderSample() {
        return (
            <div className="sample-container">
                {keyboard.img.map((image, index) => (
                    <div
                        key={index}
                        className={`sample-details ${currentImage === image ? 'active' : ''}`} 
                        onClick={handleImageChange}
                    >
                        <img src={image} alt={`Keyboard image ${index + 1}`} />
                    </div>
                ))}
            </div>
        );
    }

    function renderOverview() {
        return (
            <div className="overivew-container">
                {keyboard.overview.map((over) => (
                    <div className="overview-details" key={over.tagline}>
                        <div className="overview-details-left">
                            <h1>{over.tagline}</h1>
                        </div>
                        <div className="overview-details-right">
                            <p>{over.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(keyboard.reviews || []);
    }, [keyboard.reviews]);

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
                <h1 id='reviews'>Reviews</h1>
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
                {reviews.map((review, index) => (
                    <div className="review-details" key={index}>
                        <p>{review.date}</p>
                        <h2>{review.username}</h2>
                        <h2>Rated: {renderStars(review.rating)} ({review.rating})</h2>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
        );
    }

    function renderManual(){
        return(
            <div className="product-manual-container">
                {keyboard.manual.map((man) =>(
                    <div className="product-manual-details">
                        <h1>Troubleshoot</h1>
                        <p>{man.troubleshoot}</p>
                        <h1>Maintenance</h1>
                        <p>{man.maintenance}</p>
                        <h1>Setup</h1>
                        <p>{man.setup}</p>
                    </div>
                ))}
            </div>
        )
    }

    function calculateAvg() {
        if (reviews.length === 0) return 0; 
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0); // Start at 0
        const avgRating = totalRating / reviews.length; 
        return avgRating;
    }
    

    return (
        <>
            <div className="product-specifics">
                <br />
                <div className="product-specifics-left">
                    <img src={currentImage} alt={keyboard.name} />
                </div>
                <div className="product-specifics-right">
                    <h2>{keyboard.name}</h2>
                    <h2>₱{keyboard.price}</h2>
                    <p>Rating: {renderStars(calculateAvg())} ({calculateAvg().toFixed(2)})</p>
                    {renderSwitches()}
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            {renderSample()}
            {renderOverview()}
            <hr />
            <div className="specs-included-manual">
                <div className="specs-included">
                    {renderspecs()}
                    {renderIncluded()}
                </div>
                {renderManual()}
            </div>
            {renderReviews()}
            <br />
        </>
    );
}
