import { Link } from "react-router-dom";
import Cart from "./Cart";
import React,{ useState} from "react";
const pesorate = 59;
const keyboards = [
    {id:1,
        img:"https://massdrop-s3.imgix.net/product-images/womier-stacked-acrylic-rgb-mechanical-keyboard/FP/YdlZrdh8TP6dHrrx32mY_1080x1080_MD-93147_01.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"Womier K66 V2 Hotswap Acrylic RGB Mechanical Keyboard",
        price: 55* pesorate,
        rating:4.7,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
       },
       {id:2,
        img:"https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/erFboS5uSV2hA9MLKqzl_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"Keydous NJ80 Wireless RGB Hot-Swappable Keyboard",
        price: 219*pesorate,
        rating:4.9,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
       },
       {id:3,
        img:"https://massdrop-s3.imgix.net/product-images/idobao-id80-crystal-75-gasket-hotswappable-keyboard-kit/FP/QONc7ASwQoy3Ld9HTWJh_RSBJ6u3BSFGhDYoPhSgm_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"IDOBAO ID80 Crystal Gasket Keyboard ",
        price: 229* pesorate,
        rating:4.5,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
       },
       {id:4,
        img:"https://massdrop-s3.imgix.net/product-images/wobkey-rainy75-mechanical-keyboard/FP/UwmgPuM5TnuVIWVrgTfe_lite_black.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"WOBKEY Rainy75 Mechanical Keyboard",
        price:79*pesorate,
        rating: 4.2,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        },
        {id:5,
        img:"https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/jdkkOZNSRdS05G6io9Qz_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"Drop Expression Series Mechtropolis Keyboard",
        price:99*pesorate,
        rating:4.1,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        },
        {id:6,
        img:"https://massdrop-s3.imgix.net/product-images/magicforce-21-keys-v2/FP/59YmkBkRTcG8H0NASuPk_AI7B7416-copy-pc.jpg?auto=format&fm=jpg&fit=crop&w=1080&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"Magicforce 21-Key Mechanical Numpad V2",
        price:19*pesorate,
        rating:4.25,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        },
        {id:7,
        img:"https://massdrop-s3.imgix.net/product-images/melgeek-mojo68-plastic-keyboard/FP/Cm7MPmMpRte6dPzmRLRM_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"MelGeek Mojo68 Wireless Plastic Keyboard",
        price:199*pesorate,
        rating:4,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        },
        {id:8,
        img:"https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/5NJfnjBXRdOcO3R1WdLA_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"SHIFT V2 Mechanical Keyboard",
        price:179*pesorate,
        rating:4.5,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        },
        {id:9,
        img:"https://massdrop-s3.imgix.net/product-images/drop-ctrl-v2-mechanical-keyboard/FP/NKNLWrrRxWDVlCHVEvTw_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"CTRL V2 Mechanical Keyboard",
        price:149*pesorate,
        rating:3.75,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        }, 
        {id:10,
        img:"https://massdrop-s3.imgix.net/product-images/yunzii-l75-low-profile-wireless-mechanical-keyboard/FP/KaPQPH25RyuGC7AywlOv_01.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"YUNZII L75 Low-Profile Wireless Mechanical Keyboard",
        price:200*pesorate,
        rating:4,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        }, 
        {id:11,
        img:"https://massdrop-s3.imgix.net/product-images/yunzii-rt68-rapid-trigger-magnetic-gaming-mechanical-keyboard/FP/5STnQdCtTBOd3AeSAklp_black.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"YUNZII RT68 Rapid-Trigger Magnetic Gaming Mechanical Keyboard",
        price:175*pesorate,
        rating:4,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        
        },
        {id:12,
        img:"https://massdrop-s3.imgix.net/product-images/mistel-md750-delight-mechanical-keyboard/FP/thZIe65Sp2z5AolmkFjQ_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"Mistel MD750 Delight Mechanical Keyboard",
        price:175*pesorate,
        rating:4.25,
        switch:
        [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"},
        ],
        },
]
export default function Products(){
            const [cart, setCart] = useState([]);
            const addToCart = (item) => {
                setCart((prevCart) => {
                    const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
                    if (existingItemIndex !== -1) {
                        const updatedCart = [...prevCart];
                        updatedCart[existingItemIndex].quantity += 1;
                        return updatedCart;
                    } else {
                        return [...prevCart, { ...item, quantity: 1 }];
                    }
                });
            };
        
        
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
    
    function renderKeyboards(){
        return (
            <div className="products-container">
                {keyboards.map((keyboard) => (
                    <div  className="products-details" key={keyboard.id}>
                        <Link to ={`/products/${keyboard.id}`} state={{keyboard}} >
                        <img src={keyboard.img} alt={keyboard.name} />
                        <strong><p>{keyboard.name}</p></strong>
                        <p>₱{keyboard.price}</p>
                        <p>Rating: {renderStars(keyboard.rating)} ({keyboard.rating})</p>
                        </Link>
                        <button onClick={() => addToCart(keyboard)}>Add to Cart</button>
                    </div>
                ))}             
            </div>
        );
    }
    return(
        <div className="products-parent">
            <Cart cart = {cart}/>
            <h1>Check Out Our Products</h1>
            {renderKeyboards()}
        </div>
        
    )
}