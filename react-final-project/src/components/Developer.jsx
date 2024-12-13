import { useEffect, useState } from "react";
export default function Developer({ developers }) {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    const [vouch, setVouch] = useState(developers[0].vouch); 
    const renderDeveloperDetails = (developer) => {
        return (
            <div className="resume-container">
                <div className="profile-header">
                    <img 
                        src={developer.img} 
                        alt={developer.name} 
                        className="profile-img" 
                    />
                    <div className="profile-info">
                        <h1>{developer.name}</h1>
                        <p><strong>{developer.role}</strong></p>
                        <p className="bio">{developer.bio}</p>
                    </div>
                </div>

                <div className="resume-details">
                    <section className="summary">
                        <h2>Summary</h2>
                        <p>{developer.bio}</p>
                    </section>

                    <section className="skills">
                        <h2>Skills</h2>
                        <ul>
                            {developer.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </section>
                    <section className="achievements">
                        <h2>Achievements</h2>
                        <ul>
                            {developer.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </section>
   
                    <section className="education">
                        <h2>Education</h2>
                        <p><strong>{developer.education.degree}</strong> from {developer.education.university}</p>
                        <p>Graduation Year: {developer.education.graduationYear}</p>
                        <ul>
                            {developer.education.relevantCourses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="certifications">
                        <h2>Certifications</h2>
                        <ul>
                            {developer.certifications.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="experience">
                        <h2>Work Experience</h2>
                        {developer.workExperience.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <h3>{exp.role} - {exp.company}</h3>
                                <p>{exp.duration}</p>
                                <ul>
                                    {exp.responsibilities.map((task, idx) => (
                                        <li key={idx}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                    <section className="contact">
                        <h2>Contact</h2>
                        <p>Email: <a href={`mailto:${developer.contact.email}`}>{developer.contact.email}</a></p>
                        <p>Phone: <a href={`tel:${developer.contact.phone}`}>{developer.contact.phone}</a></p>
                        <p>GitHub: <a 
                            href={developer.contact.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {developer.contact.github}
                        </a></p>
                    </section>

                    <section className="vouch">
                        <h2>Vouches</h2>
                        <p> Vouches: {vouch}</p>
                        <button id="vouch-btn" onClick={() => setVouch(vouch + 1)}className="vouch-btn">
                            Vouch Me
                        </button>
                    </section>
                </div>
            </div>
        );
    };

    return (
        <div className="developer-page">
            {renderDeveloperDetails(developers[0])}
        </div>
    );
}
