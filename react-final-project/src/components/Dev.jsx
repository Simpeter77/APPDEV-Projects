import { useLocation } from "react-router-dom";
export default function Dev() {
    const location = useLocation();
    const person = location.state.person;

    return (
        <div className="resume-container">
            <div className="profile-header">
                <img src={person.img} alt={person.name} className="profile-img" />
                <div className="profile-info">
                    <h1>{person.name}</h1>
                    <p><strong>{person.position}</strong></p>
                    <p className="quote">"{person.quote}"</p>
                </div>
            </div>

            <section className="summary">
                <h2>Summary</h2>
                <p>{person.summary}</p>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    {person.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section className="achievements">
                <h2>Achievements</h2>
                <ul>
                    {person.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </section>

            <section className="education">
                <h2>Education</h2>
                <p>{person.education}</p>
            </section>

            <section className="certifications">
                <h2>Certifications</h2>
                <ul>
                    {person.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                    ))}
                </ul>
            </section>

            <section className="experience">
                <h2>Experience</h2>
                <ul>
                    {person.experience.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </section>

            <section className="contact">
                <h2>Contact</h2>
                <p>Email: <a href={`mailto:${person.contact.email}`}>{person.contact.email}</a></p>
                <p>Phone: <a href={`tel:${person.contact.phone}`}>{person.contact.phone}</a></p>
                <p>LinkedIn: <a href={`https://${person.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{person.contact.linkedin}</a></p>
            </section>
        </div>
    );
}
