export default function Home(){
    const hero =[
        {id:1,
         img:'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychron-v2-custom-mechanical-keyboard-with-qmk-viacarbon-black-frame-1663404343089.jpg?v=1663404347',
         tagline : "Crafting the Ultimate Typing Experience",
        }]

    function renderHero(){
        return(
            <div className="hero-container">
                {hero.map((item) =>(
                    <div className="hero-details">
                        <img src={item.img}/>
                        <h1>{item.tagline}</h1>
                    </div>
                ))}
            </div>
        )
    }
    return(
        <div className="home-container">
            <h1>Welcome to Keystaxx</h1>
            {renderHero()}
        </div>
    )
}