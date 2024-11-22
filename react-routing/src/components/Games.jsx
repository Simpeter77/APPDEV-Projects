const games = [
    {
    id:1,
    name:"Teamfight Tactics",
    description:"The Most Popular Chess Auto Battler in the world"
    },
    {
    id:2,
    name:"Valorant",
    description:"The Most Popular FPS game in the world"
    },
    {
    id:3,
    name:"2XKO",
    description:"Upcoming 2v2 tag team fighting game"
    }
]
import { Link } from "react-router-dom"
export default function Games(){
    function renderGames(){
        return(
            <>
            {games.map((game) => (
                <div className="">
                    <li key={game.id}>
                    <Link to ={'/games/${game.id}'} state={{game}}>
                        {game.name.toUpperCase()} 
                    </Link>
                    - {game.description}
                    
                    </li>
                    <br />
                    
                </div>
                
    ))}
            </>
        )
    }
    return(
        <>
        <h1>Games List</h1>
        {renderGames()}
        </>
    )
}