import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>
        Open to internships, collaborations and
        software development opportunities.
      </p>

      <div className="contact-links">

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=riteshk7710@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>

        <a
          href="https://github.com/RiteshKumar-codes"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/riteshkumar7"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <h3 style={{ marginTop: "20px" }}>
        riteshk7710@gmail.com
      </h3>
    </section>
  );
};

export default Contact;