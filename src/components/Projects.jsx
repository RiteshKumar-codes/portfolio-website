import "../styles/Projects.css";

const projects = [
  {
    title: "Local Skill Exchange Platform",
    tech: "React | Node.js | Express | MongoDB",
    description:
      "A platform where users can exchange skills and connect with local learners.",
    github:
      "https://github.com/RiteshKumar-codes/skill-exchange-platform"
  },

  {
    title: "Online Voting System",
    tech: "HTML | CSS | JavaScript | MySQL",
    description:
      "Secure voting platform with voter registration and management.",
    github:
      "https://github.com/RiteshKumar-codes"
  },

  {
    title: "Prison Management System",
    tech: "Java | MySQL",
    description:
      "Database management system for prison records.",
    github:
      "https://github.com/RiteshKumar-codes"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <h4>{project.tech}</h4>

            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;