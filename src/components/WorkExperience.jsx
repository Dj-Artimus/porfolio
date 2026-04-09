import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
    return (
        <section className="work-experience">
            <h2>Work Experience</h2>
            <div className="experience">
                <h3>Maedric</h3>
                <h4>Position: Software Engineer</h4>
                <p><strong>Duration:</strong> Jan 2021 - Present</p>
                <ul>
                    <li>Developed and maintained web applications using React and Node.js.</li>
                    <li>Collaborated with design teams to create user-friendly interfaces.</li>
                    <li>Participated in code reviews and mentored junior developers.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Heat Scheme</h3>
                <h4>Position: Frontend Developer</h4>
                <p><strong>Duration:</strong> Mar 2020 - Dec 2020</p>
                <ul>
                    <li>Implemented responsive web designs to enhance user experience.</li>
                    <li>Worked with REST APIs to fetch and display dynamic data.</li>
                    <li>Contributed to the redesign of the company's main website.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Immutag</h3>
                <h4>Position: Backend Developer</h4>
                <p><strong>Duration:</strong> Jun 2019 - Feb 2020</p>
                <ul>
                    <li>Built server-side logic and APIs using Node.js and Express.</li>
                    <li>Optimized database queries for performance improvements.</li>
                    <li>Ensured code quality through various testing methodologies.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Unnamed Business Website Project</h3>
                <h4>Position: Full Stack Developer</h4>
                <p><strong>Duration:</strong> Jan 2019 - May 2019</p>
                <ul>
                    <li>Developed a complete business website from concept to deployment.</li>
                    <li>Integrated payment gateway and user authentication systems.</li>
                    <li>Worked closely with clients to gather requirements and feedback.</li>
                </ul>
            </div>
        </section>
    );
};

export default WorkExperience;