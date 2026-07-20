import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skill-category">
        <h3>Frontend</h3>

        <div className="skills-container">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
        </div>
      </div>

      <div className="skill-category">
        <h3>Backend</h3>

        <div className="skills-container">
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">REST API</div>
        </div>
      </div>

      <div className="skill-category">
        <h3>Programming</h3>

        <div className="skills-container">
          <div className="skill-card">Java</div>
          <div className="skill-card">DSA</div>
        </div>
      </div>

      <div className="skill-category">
        <h3>Tools</h3>

        <div className="skills-container">
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
          <div className="skill-card">VS Code</div>
          <div className="skill-card">Postman</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;