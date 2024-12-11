import { Link } from "react-router-dom";
export default function Developer({ team }){
    function renderDevs() {
        return (
            <div className="dev-container">
                {team.map((t) => (
                    <Link to={`/developer/${t.id}`} state={{member: t}}>
                        <div className="dev-details" key={t.id}>
                        <img src={t.img} alt={t.name} className="dev-img" />
                        <h1>{t.name}</h1>
                        <p id="dev-position"><strong>{t.position}</strong></p>
                        <h2>"{t.quote}"</h2>
                        <p className="dev-overview">{t.overview}</p>
                        <div className="dev-experience">
                            <h4>Experience:</h4>
                            <ul>
                                {t.experience.map((exp, index) => (
                                    <li key={index}>{exp}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="dev-skills">
                            <h4>Skills:</h4>
                            <ul>
                                {t.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }    
    return(
        <>
        <div className="">
            {renderDevs()}
        </div>
        </>
    )
}