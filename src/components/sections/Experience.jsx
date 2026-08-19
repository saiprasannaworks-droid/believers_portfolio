import {
  FaGraduationCap,
  FaBriefcase,
  FaBookOpen,
  FaCertificate,
  FaCircleCheck,
  FaArrowUpRightFromSquare,
  FaCalendarDays,
} from "react-icons/fa6";
import {
  education,
  training,
  internship,
  certifications,
} from "../../data/experienceData";

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container-shell">
        <div data-reveal="up">
          <span className="section-eyebrow">Experience & Education</span>
          <h2 className="section-title">
            Background and{" "}
            <span className="gradient-text">professional journey</span>
          </h2>
          <p className="section-description">
            My education, training, internship experience, and professional certifications.
          </p>
        </div>

        <div className="experience-grid">
          {/* Education */}
          {education.map((item) => (
            <article
              key={item.degree}
              className="experience-card glass-card glow-ring noise-overlay"
              data-reveal="up"
            >
              <span className="experience-card__eyebrow">
                <FaGraduationCap style={{ marginRight: "0.4rem", verticalAlign: "-1px" }} />
                Education
              </span>
              <h3 className="experience-card__title">{item.degree}</h3>
              <p className="experience-card__subtitle">{item.institution}</p>
              <p className="experience-card__period">
                <FaCalendarDays /> {item.year}
              </p>
              <div className="experience-card__badge">CGPA: {item.cgpa}</div>
              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="experience-card__link"
                >
                  <FaArrowUpRightFromSquare /> View Credential
                </a>
              )}
            </article>
          ))}

          {/* Internship */}
          {internship.map((item) => (
            <article
              key={item.company}
              className="experience-card glass-card glow-ring noise-overlay"
              data-reveal="up"
            >
              <span className="experience-card__eyebrow">
                <FaBriefcase style={{ marginRight: "0.4rem", verticalAlign: "-1px" }} />
                Internship
              </span>
              <h3 className="experience-card__title">{item.role}</h3>
              <p className="experience-card__subtitle">{item.company}</p>
              <p className="experience-card__period">
                <FaCalendarDays /> {item.period}
              </p>
              <ul className="experience-card__list">
                {item.highlights.map((point) => (
                  <li key={point} className="experience-card__list-item">
                    <FaCircleCheck className="experience-card__list-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Technical Training */}
          {training.map((item) => (
            <article
              key={item.title}
              className="experience-card glass-card glow-ring noise-overlay"
              data-reveal="up"
            >
              <span className="experience-card__eyebrow">
                <FaBookOpen style={{ marginRight: "0.4rem", verticalAlign: "-1px" }} />
                Technical Training
              </span>
              <h3 className="experience-card__title">{item.title}</h3>
              <p className="experience-card__subtitle">{item.institution}</p>
              <p className="experience-card__period">
                <FaCalendarDays /> {item.period}
              </p>
              <ul className="experience-card__list">
                {item.highlights.map((point) => (
                  <li key={point} className="experience-card__list-item">
                    <FaCircleCheck className="experience-card__list-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="experience-card__link"
                >
                  <FaArrowUpRightFromSquare /> View Certificate
                </a>
              )}
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: "2rem" }} data-reveal="up">
          <h3 style={{ margin: "0 0 0.8rem", fontSize: "1.2rem", fontWeight: 700 }}>
            <FaCertificate style={{ marginRight: "0.5rem", verticalAlign: "-2px", color: "var(--accent)" }} />
            Certifications
          </h3>
          <div className="certs-grid">
            {certifications.map((cert) => (
              <article key={cert.title} className="cert-card glass-card glass-card--soft">
                <h4 className="cert-card__title">{cert.title}</h4>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <p className="cert-card__date">{cert.date}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-card__link"
                  >
                    <FaArrowUpRightFromSquare /> Verify
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
