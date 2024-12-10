import Vmo from "./Vmo";
import { Link } from "react-router-dom";
import React from "react";
export default function About({vmo, story, team }) {
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
                    <Link to={`/developer/${person.id}`} state={{person: person}} key={person.id} className="team-details">
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
                    </Link>
                ))}
                <Link to='/developer'>
                <button id='team-btn'>Learn More</button>
                </Link>
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
