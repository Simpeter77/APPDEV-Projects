import Vmo from "./Vmo";
import React from "react";
export default function About(props) {
    const vmo = [
        {id: 1, name: "Mission", description:[
            "To deliver innovative, high-quality mechanical keyboards that cater to the diverse needs of office workers and PC enthusiasts, enhancing productivity and user experience through superior craftsmanship and thoughtful design."
        ]},
        {id: 2, name: "Vision", description:[
            "To be the leading global provider of cutting-edge mechanical keyboards, inspiring creativity and passion in the digital age while fostering a community of keyboard enthusiasts and professionals"
        ]},
        {id: 3, name: "Objectives",description: [ "Quality Excellence: Continuously improve the quality and durability of our keyboards by integrating the latest technologies and premium materials.", "Customer Satisfaction: Ensure exceptional customer experiences by offering personalized service, comprehensive product manuals, and responsive support.", "Innovative Designs: Stay at the forefront of design innovation by regularly introducing new and unique artisan keyboard designs that capture the essence of creativity and functionality.", "Community Engagement: Build and nurture a vibrant community of keyboard enthusiasts by encouraging feedback, showcasing user reviews, and fostering meaningful connections through our digital platforms.", "Sustainable Practices: Commit to environmentally responsible practices in our manufacturing processes and product lifecycle, promoting sustainability in all aspects of our business.", "Employee Development: Invest in the growth and development of our employees by providing continuous learning opportunities and fostering a supportive and collaborative work environment.", "Global Reach: Expand our market presence globally by establishing strong partnerships and leveraging digital channels to reach a wider audience.", "Innovation and Adaptability: Embrace change and innovation, continuously adapting to market trends and customer needs to remain a leader in the industry." ]}
    ]

    const story = [
        {id:1, title:"Our Story", 
        quoute:"From humble beginnings to crafting keystrokes of perfection.",
        text:"In 2018, Keystaxx was born in a small garage where three friends, fueled by their shared passion for mechanical keyboards, set out to redefine the typing experience. Armed with only a 3D printer and an unyielding drive for perfection, the team meticulously designed keyboards that were not only functional but also beautiful, blending art with engineering. The journey wasn’t easy, but with countless hours of experimentation and innovation, they crafted products that set new standards in the world of keyboards. What began as a small project is now a global brand, recognized for pushing the boundaries of design, quality, and technology. From gamers seeking precision to office professionals in need of efficiency, Keystaxx keyboards are more than just tools—they are a testament to our commitment to excellence, crafted for everyone, everywhere."}
    ]

    const team= [
        { 
            id: 1, 
            img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/454999099_2372230773108864_8461404286643287097_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2Wqq7e34O73F7Qpao5yaSXqyZxIha-hterJnEiFr6G3kbTnc5iD7v7_G6_b84n0Wpt8UFnw5xjgVcm92xgSMy&_nc_ohc=UN9nnZuguPIQ7kNvgEk75vL&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=AJINW4zBRaQha1RQDxgx088&oh=00_AYDe71AH1znKdQ85VhvKpzuMnk3zj_QTYR9ToxvVmIQMZw&oe=67586B49", 
            name: "James Peter Gonzaga", 
            position: "Founder & CEO", 
            quote: "Turning ideas into realities one keystroke at a time.", 
            experience: [
                "Background in industrial design and product innovation.",
                "Passionate about blending aesthetics with performance."
            ] 
        },
        { 
            id: 2, 
            img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-1/441253984_1663693657703516_3776085941013426418_n.jpg?stp=c120.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEsDSvklyDJ_Zo_Z8NZXqwCysRgzivBW_zKxGDOK8Fb_HrfUrLFBRqMyiFIhnZ8fqvexMRxqSezpLrLOBLfq2yT&_nc_ohc=kwEpPQg6m8sQ7kNvgHIwxc0&_nc_zt=24&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=AIiPakJwWiPrdpmVlysDeaz&oh=00_AYBpGnXbMqoKbUJg-fxwE5GYFYAD2dZW9VjF0e7Fdm7j5w&oe=675841DB", 
            name: "William D. Dosil", 
            position: "Founder & Chief Engineer", 
            quote: "Precision is the soul of every keyboard.", 
            experience: [
                "Expert in switch mechanics and PCB design.",
                "Designed over 50 keyboard prototypes for the company."
            ] 
        },
        { 
            id: 3, 
            img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-1/412825736_2331983020332787_6183900205711737811_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9_xbyPOle11p19wMebk-5m5UhkM5dLUOblSGQzl0tQ4CKFTZtPylVRcyG4MkqmDolfCYYluaT6irz6fgXi2rZ&_nc_ohc=HjBGCiSJyDYQ7kNvgEjBB3S&_nc_zt=24&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=Adx8gNSy5hfnhVo53hRE9hi&oh=00_AYAP3QoC1xTNllkCfdf-9Z2A-Io1GMdwwBpQ-idfCqI_Xw&oe=67586E2E", 
            name: "Alfredo II Fajardo", 
            position: "Founder & Creative Director", 
            quote: "Every keyboard tells a story.", 
            experience: [
                "Specializes in artisan keycap design.",
                "Known for creating unique themed keyboards like 'Galaxy Key' and 'Retro Type'."
            ] 
        },
        { 
            id: 4, 
            img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/361632630_3399954010254072_2765873733267857660_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGCKT_48ebnIZjQWvf5F86Sg74dUK_IM-uDvh1Qr8gz60enjY-_qc-t5sqSpIeAWz1_W0tgQ23I14t1Rrmul7aD&_nc_ohc=TQFEULlfAv8Q7kNvgH-Gt1U&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=ANvcm78p5pZah0MC2HMRUmq&oh=00_AYD5YAECNmrG-UvUlDSQ7iphe0WAy7QKhhsumRDP3aO3-w&oe=675853E4", 
            name: "Mark Bringas", 
            position: "Marketing Manager", 
            quote: "Keystaxx isn’t just a product, it’s a lifestyle.", 
            experience: [
                "Handles branding and customer engagement.",
                "Built Keystaxx’s online presence, growing the community by 200% in two years."
            ] 
        },
        { 
            id: 5, 
            img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/438229742_7616636511726728_2238280202694369559_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEwY7WPm3gheuxIMUwy5BT5pGBK7XAbowukYErtcBujCwj4SE5bcnTpPKCPNrkKSyZY3fYt-16zFrESeyHz-b_2&_nc_ohc=SsCSvBqCLYoQ7kNvgHyVo1s&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=Ae2g3ZhWY9Fs4uU5ZeJkeFF&oh=00_AYDycGAKym8AJgGOvpgdmD1PN14T1uwSN2hGiPNDHNj2Gw&oe=675845DE", 
            name: "Rj Salcedo", 
            position: "Community Manager", 
            quote: "The best designs come from listening.", 
            experience: [
                "Runs Keystaxx’s forums and social media channels.",
                "Collects user feedback to drive new product designs."
            ] 
        }
    ];

    function renderStory(){
        return(
            <div className="story-container">
                {story.map((item) => (
                    <div className="story-details">
                        <h1>{item.title}</h1>
                        <hr />
                        <p className="story-details-quoute">"{item.quoute}"</p>
                        <p className="story-details-text">{item.text}</p>
                    </div>
                ))}
            </div>
        )
    }

    function renderTeam() {
        return (
            <ol className="team-container">
                {team.map((person) => (
                    <div key={person.id} className="team-details">
                        <img src={person.img} alt="" />
                        <div className="team-details-text">
                            <li className="person-header"><strong>{person.name}</strong> - {person.position}</li>
                            <p>" {person.quote} "</p>
                            <ul>
                                {person.experience.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </ol>
                
        );
    }
    
    
    return (
        <>
        <div className="about-container">
            <h1>About KeyStaxx</h1>
            <hr />
            <h2>"We Are What We Stand For"</h2>
            <Vmo item={vmo}/>
            {renderStory()}
            <h1>Meet Our Team</h1>
            <hr />
            {renderTeam()}
        </div>
        </>
    );
}
