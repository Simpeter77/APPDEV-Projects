import About from "./About"
const pesorate=59.00
export default function Home(){
    const hero =[
        {id:1,
         img:'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychron-v2-custom-mechanical-keyboard-with-qmk-viacarbon-black-frame-1663404343089.jpg?v=1663404347',
         tagline : "Crafting the Ultimate Typing Experience",
        }]

    const newArrival =[
        {id:1,
         img:"https://massdrop-s3.imgix.net/product-images/womier-stacked-acrylic-rgb-mechanical-keyboard/FP/YdlZrdh8TP6dHrrx32mY_1080x1080_MD-93147_01.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
         name:"Womier K66 V2 Hotswap Acrylic RGB Mechanical Keyboard",
         price: 55* pesorate,
        },
        {id:2,
         img:"https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/erFboS5uSV2hA9MLKqzl_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
         name:"Keydous NJ80 Wireless RGB Hot-Swappable Keyboard",
         price: 219*pesorate
        },
        {id:3,
         img:"https://massdrop-s3.imgix.net/product-images/idobao-id80-crystal-75-gasket-hotswappable-keyboard-kit/FP/QONc7ASwQoy3Ld9HTWJh_RSBJ6u3BSFGhDYoPhSgm_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
         name:"IDOBAO ID80 Crystal Gasket Keyboard ",
         price: 229* pesorate,
        }
    ]

    const bestSeller = [
        {id:4,
        img:"https://massdrop-s3.imgix.net/product-images/wobkey-rainy75-mechanical-keyboard/FP/UwmgPuM5TnuVIWVrgTfe_lite_black.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"WOBKEY Rainy75 Mechanical Keyboard",
        price:79*pesorate,
        },
        {id:5,
        img:"https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/jdkkOZNSRdS05G6io9Qz_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        name:"Drop Expression Series Mechtropolis Keyboard",
        price:99*pesorate,
        },
        {id:1,
            img:"https://massdrop-s3.imgix.net/product-images/womier-stacked-acrylic-rgb-mechanical-keyboard/FP/YdlZrdh8TP6dHrrx32mY_1080x1080_MD-93147_01.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            name:"Womier K66 V2 Hotswap Acrylic RGB Mechanical Keyboard",
            price: 55* pesorate,
        }
    ]

    const custom = [
        {id:1,
        img:"https://massdrop-s3.imgix.net/mk-builder/mk-builder-homepage-banner.jpg?auto=format&fm=jpg&fit=crop&w=1390&h=760&dpr=1&chromasub=444&q=70",
        description:"Select the color, keycaps, and feel for a truly custom creation to complete your desktop.",
        title:"Build Your Keyboard"
        }
    ]
    function renderCustom(){
        return(
            <div className="custom-container">
                {custom.map((cust) =>(
                    <div className="custom-details" key={cust.id}>
                        <div className="custom-details-left">
                            <img src={cust.img}></img>
                        </div>
                        <div className="custom-details-right">
                            <div className="custom-details-right-specifics">
                            <h1>{cust.title}</h1>
                            <p>{cust.description}</p>
                            <button>Start Building</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )

    }
    function renderHero(){
        return(
            <div className="hero-container">
                {hero.map((item) =>(
                    <div className="hero-details">
                        <img src={item.img}/>
                        <h1>"{item.tagline}"</h1>
                    </div>
                ))}
            </div>
        )
    }

    function renderNewArrival(){
        return(
            <div className="new-container">
                {newArrival.map((newItem) =>(
                    <div className="new-details">
                        <img src={newItem.img}/>
                        <strong><p>{newItem.name}</p></strong>
                        <p>₱{newItem.price}</p>
                    </div>
                ))}
            </div>
        )
    }

    function renderBestSeller(){
        return(
            <div className="best-container">
                {bestSeller.map((best) =>(
                    <div className="best-details">
                        <img src={best.img}/>
                        <strong><p>{best.name}</p></strong>
                        <p>₱{best.price}</p>
                    </div>
                ))}
            </div>
        )
    }
    return(
        <div className="home-container">
            <h1>Welcome to Keystaxx</h1>
            <hr className="home-hr"/>
            {renderHero()}
            <h1>Our Products</h1>
            <hr className="home-hr"/>
            <h1>New Arrivals</h1>
            <div className="new-parent">
                {renderNewArrival()}
                <button>See More</button>
            </div>
            <h1>Best Sellers</h1>
            <div className="best-parent">
                {renderBestSeller()}
                <button>See More</button>
            </div>
            <h1>Create Your Own Artisan Keyboard</h1>
            <div className="custom-parent">
                {renderCustom()}
            </div>
            <About/>
        </div>
    )
}