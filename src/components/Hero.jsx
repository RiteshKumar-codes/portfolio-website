import "../styles/Hero.css";

function Hero() {
    return (
        <section id="home" className="hero">
            <h1>Hi, I'm Ritesh Kumar</h1>
            <h2>Software Developer</h2>
            <p>
                Final Year B.Tech CSE Student passionate about
                Full Stack Development, Java, and building
                scalable web applications using the MERN Stack.
            </p>
            <div className="hero-buttons">
                <a href="/resume.pdf" download>
                    <button>Download Resume</button>
                </a>

                <a href="#projects">
                    <button>View Projects</button>
                </a>
            </div>

        </section>
    );
}

export default Hero;