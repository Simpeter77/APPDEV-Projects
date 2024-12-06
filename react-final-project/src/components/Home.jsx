import { Link } from "react-router-dom";
import About from "./About";

const pesorate = 59.0;

export default function Home() {
    const hero = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychron-v2-custom-mechanical-keyboard-with-qmk-viacarbon-black-frame-1663404343089.jpg?v=1663404347",
            tagline: "Crafting the Ultimate Typing Experience",
        },
    ];

    const newArrival = [
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
    ];

    const bestSeller = [
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
    ];

    const custom = [
        {
            id: 1,
            img: "https://massdrop-s3.imgix.net/mk-builder/mk-builder-homepage-banner.jpg?auto=format&fm=jpg&fit=crop&w=1390&h=760&dpr=1&chromasub=444&q=70",
            description: "Select the color, keycaps, and feel for a truly custom creation to complete your desktop.",
            title: "Build Your Keyboard",
        },
    ];

    function renderCustom() {
        return (
            <div className="custom-container">
                {custom.map((cust) => (
                    <div className="custom-details" key={cust.id}>
                        <div className="custom-details-left">
                            <img src={cust.img} alt="Custom Keyboard Banner" />
                        </div>
                        <div className="custom-details-right">
                            <div className="custom-details-right-specifics">
                                <h1>{cust.title}</h1>
                                <p>{cust.description}</p>
                                <Link to="/artisan">
                                    <button>Start Building</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    function renderHero() {
        return (
            <div className="hero-container">
                {hero.map((item) => (
                    <div className="hero-details" key={item.id}>
                        <img src={item.img} alt="Hero Keyboard" />
                        <h1>"{item.tagline}"</h1>
                    </div>
                ))}
            </div>
        );
    }

    function renderNewArrival() {
        return (
            <div className="new-container">
                {newArrival.map((newItem) => (
                    <Link
                    to={`/products/${newItem.id}`}
                    state={{ keyboard: newItem }} // Pass product data via state
                    className="new-details"
                    key={newItem.id}
                  >
                    <img src={newItem.img} alt={newItem.name} />
                    <strong>
                      <p>{newItem.name}</p>
                    </strong>
                    <p>₱{newItem.price}</p>
                  </Link>
                  
                ))}
            </div>
        );
    }

    function renderBestSeller() {
        return (
            <div className="best-container">
                {bestSeller.map((best) => (
                    <Link
                    to={`/products/${best.id}`}
                    state={{ keyboard: best}} // Pass product data via state
                    className="best-details"
                    key={best.id}
                  >
                    <img src={best.img} alt={best.name} />
                    <strong>
                      <p>{best.name}</p>
                    </strong>
                    <p>₱{best.price}</p>
                  </Link>
                  
                ))}
            </div>
        );
    }

    return (
        <div className="home-container">
            <h1>Welcome to Keystaxx</h1>
            <hr className="home-hr" />
            {renderHero()}
            <h1>Our Products</h1>
            <hr className="home-hr" />
            <h1>New Arrivals</h1>
            <div className="new-parent">
                {renderNewArrival()}
                <Link to="/products">
                    <button>See More</button>
                </Link>
            </div>
            <h1>Best Sellers</h1>
            <div className="best-parent">
                {renderBestSeller()}
                <Link to="/products">
                    <button>See More</button>
                </Link>
            </div>
            <h1>Create Your Own Artisan Keyboard</h1>
            <div className="custom-parent">{renderCustom()}</div>
            <About />
        </div>
    );
}
