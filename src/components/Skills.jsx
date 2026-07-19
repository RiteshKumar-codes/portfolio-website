import React from 'react'
import "../styles/Skills.css"

const Skills = () => {
    const skills = [
        "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Java"
    ];
  return (
     <section id='skills' className='skills'>
        <h2>Skills</h2>
        <div className='skills-container'>
            {skills.map((skill,index) => (
                <div className='skill-card' key={index}>
                    {skills}
                </div>

            ))}
        </div>
     </section>
  )
}

export default Skills