import { Link } from "react-router-dom";
import About from "./About";
const pesorate = 59.0;
export default function Home({newarrival,bestseller,team,story,vmo} ) {
    const hero = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychron-v2-custom-mechanical-keyboard-with-qmk-viacarbon-black-frame-1663404343089.jpg?v=1663404347",
            tagline: "Crafting the Ultimate Typing Experience",
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
                {newarrival.map((newItem) => (
                    <Link
                    to={`/products/${newItem.id}`}
                    state={{ keyboard: newItem }} 
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
                {bestseller.map((best) => (
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
            <About team={team} story={story} vmo={vmo}/>
        </div>
    );
}
