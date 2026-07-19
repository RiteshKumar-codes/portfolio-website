import React from 'react'
import "../styles/Projects.css"

const Projects = () => {

     const projects = [
    {
      title: "Local Skill Exchange Platform",
      description:
        "A platform where users exchange skills and connect with local learners."
    },
    {
      title: "Online Voting System",
      description:
        "Secure voting application using web technologies."
    },
    {
      title: "Prison Management System",
      description:
        "Database-based management system for prison records."
    }
  ];

  return (
    <section id='projects' className='projects'>
        <h2>Projects</h2>
        <div className='project-container'>
            {projects.map((project,index) => (
                <div className='project-card' key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects