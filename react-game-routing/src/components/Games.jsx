const games = [
    {
        id: 1,
        img: "https://media-management-service.s3.amazonaws.com/media/images/613041093e47cd0c43b6323a1f3448d3_large_cover.original.jpg",
        name: "Teamfight Tactics",
        description: "Teamfight Tactics (TFT) is an auto-battler game where players strategically place units on a board to fight against other players' armies. The game is set in the League of Legends universe, with champions from the game being used as units. Players must choose their champions, upgrade them, and build strong synergies between them to secure victory. TFT is a unique blend of strategic planning and adaptation, with players needing to adjust their strategies based on the units they are given, as well as the tactics employed by their opponents.",
        publisher: "Riot Games",
        developer: "Riot Games",
        reviews: [
            { id: 1, rating: 4, username: "simpeter77", review: "Really enjoyable once you get the hang of it. It can feel random at times, but overall it’s a fun challenge to build your team and outsmart the others." },
            { id: 2, rating: 4, username: "Alfred69", review: "A solid auto-battler. I love the strategic depth, but it can sometimes feel like luck plays too big a role. Still, a great game to unwind with." },
            { id: 3, rating: 4, username: "BJ Mark", review: "I’ve been playing this game for a few months now, and I really enjoy it. It’s easy to jump in, but hard to master. Some balance changes can be frustrating, but it’s still a great time." }
        ]
    },
    {
        id: 2,
        img: "https://th.bing.com/th/id/OIP.C2caZoLKJAE25LqPXtKJrwHaHx?rs=1&pid=ImgDetMain",
        name: "League of Legends",
        description: "League of Legends (LoL) is a multiplayer online battle arena (MOBA) game where two teams of five players each battle to destroy the opposing team's Nexus. The game features a wide variety of unique champions, each with distinct abilities and playstyles. Players work together to outmaneuver the enemy team, control the map, and secure objectives. With a competitive ladder, frequent updates, and a highly active community, League of Legends has become one of the most iconic games in esports and gaming culture, offering intense gameplay and a high skill ceiling.",
        publisher: "Riot Games",
        developer: "Riot Games",
        reviews: [
            { id: 1, rating: 5, username: "mid_lane_master", review: "Hands down one of the best competitive games ever made. It’s incredibly rewarding once you get better, but it’s a tough grind. There’s always something new to learn!" },
            { id: 2, rating: 3, username: "SupportMain22", review: "I love the game but the community can be toxic sometimes, which makes it frustrating. I mostly play support, and it’s hard to carry a game from that position." },
            { id: 3, rating: 4, username: "SummonerBeast", review: "The game is great for competitive play, but I find the constant balance changes a bit annoying. Overall, though, it’s an amazing game and I love the strategy involved." }
        ]
    },
    {
        id: 3,
        img: "https://th.bing.com/th/id/OIP.hyhsT2zhe4LTpMRqp1i5MQHaHa?rs=1&pid=ImgDetMain",
        name: "Valorant",
        description: "Valorant is a tactical first-person shooter that combines precise gunplay with hero-based abilities. Players select from a diverse roster of 'Agents,' each possessing unique abilities that can help their team gain the upper hand. The gameplay revolves around planting or defusing a bomb or eliminating the enemy team. Valorant's tactical depth, fast-paced action, and emphasis on team coordination have made it a favorite among FPS fans. The game also features regular updates, including new agents, maps, and seasonal events, keeping the gameplay fresh and engaging for its competitive community.",
        publisher: "Riot Games",
        developer: "Riot Games",
        reviews: [
            { id: 1, rating: 4, username: "shooterPro", review: "Great game if you love tactical shooters, but it can feel a bit slow at times. The abilities add an interesting layer, but nothing beats landing a good headshot." },
            { id: 2, rating: 5, username: "aim_master", review: "I’m addicted! The gunplay is top-notch, and the characters’ abilities add a nice tactical twist. It’s one of the most rewarding shooters I’ve ever played." },
            { id: 3, rating: 3, username: "tactical_king", review: "I enjoy the game, but the learning curve is steep. It feels like you either need to already know the maps and the characters, or you’re going to get steamrolled." }
        ]
    },
    {
        id: 4,
        img: "https://i.pinimg.com/originals/fd/af/24/fdaf24809f4489431908bbe45da4fe62.jpg",
        name: "Fortnite",
        description: "Fortnite is a dynamic battle royale game that combines fast-paced combat with the ability to build structures. Players are dropped into a large, ever-shrinking map and must scavenge for weapons and resources while battling to be the last one standing. One of Fortnite's signature features is its building mechanics, where players can construct walls, ramps, and other structures to gain a tactical advantage. The game's bright, cartoony art style and frequent updates with new skins, challenges, and events have made it a cultural phenomenon. Whether you're playing solo, with friends, or as part of a squad, Fortnite delivers an exciting and unpredictable experience every match.",
        publisher: "Epic Games",
        developer: "Epic Games",
        reviews: [
            { id: 1, rating: 5, username: "buildmaster", review: "This game is a blast, especially if you like fast-paced action mixed with building. It’s a bit chaotic sometimes, but that’s part of the fun!" },
            { id: 2, rating: 4, username: "no_snipe_here", review: "Great game overall, but I find the building mechanics to be a bit over the top. Once you get into a fight with someone who can build faster than you, it’s almost impossible to win." },
            { id: 3, rating: 3, username: "campingCody", review: "Fortnite’s fun but gets repetitive. It’s all about grinding for the best skins and surviving long enough, but some matches can feel like a chore." }
        ]
    },
    {
        id: 5,
        img: "https://i.pinimg.com/originals/3e/ce/2a/3ece2a1e5a5e5f430f5a530ba1104a14.jpg",
        name: "Minecraft",
        description: "Minecraft is a sandbox video game that allows players to explore a procedurally generated world made up of blocks, crafting and building anything they can imagine. Whether you prefer to play in survival mode, where you gather resources, fight monsters, and try to survive, or in creative mode, where you have unlimited resources to build freely, Minecraft offers endless possibilities. The game has become a global phenomenon thanks to its accessibility, open-ended gameplay, and a strong community that shares creations, mods, and custom content. From building sprawling cities to exploring dungeons, Minecraft offers a rich, engaging world for players of all ages.",
        publisher: "Mojang",
        developer: "Mojang",
        reviews: [
            { id: 1, rating: 5, username: "blockBuilderX", review: "I’ve been playing Minecraft for years and it still never gets old. It’s a perfect game for creativity and exploring, and there’s always something new to build or discover." },
            { id: 2, rating: 4, username: "RedstoneRanger", review: "Minecraft is awesome, but I wish there were more challenges in survival mode. After a while, it can feel repetitive unless you’re building something huge or playing with friends." },
            { id: 3, rating: 4, username: "pixelPioneer", review: "Perfect for creative types, but the survival mode can get a bit tough if you're not prepared. Love the community and the mods, though—there’s always something to keep me coming back." }
        ]
    }
];

import { Link } from "react-router-dom"
export default function Games(){
    function renderGames(){
        return(
            <>
            <div className="games">
            {games.map((game) => (
                <div className="">
                    <Link to ={'/games/${game.id}'} state={{game}}>
                    <li key={game.id}>
                        <hr />
                    <img src={game.img} alt={game.name} id="images"/><br />
                    <strong>{game.name.toUpperCase()} </strong>
                    - {game.description}
                    <br />
                    <br />
                    <hr />
                    </li>
                    </Link>
                    
                </div>
                
    ))}
            </div>
            
            </>
        )
    }
    return(
        <>
        <div className="games-container">
        <h1 id="games-header">Games List</h1>
        {renderGames()}
        </div>
        </>
    )
}