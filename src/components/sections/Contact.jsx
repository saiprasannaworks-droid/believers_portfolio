import { useEffect, useMemo, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPaperPlane,
  FaCircleCheck,
  FaTriangleExclamation,
} from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";
import { canSendEmail, sendPortfolioMessage } from "../../lib/emailjs";

const initialFormState = { name: "", email: "", subject: "", message: "" };
const initialErrors = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: "", message: "" });

  const { email, linkedin, github, location } = portfolioData;
  const emailReady = useMemo(() => canSendEmail(), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((cur) => ({ ...cur, [name]: value }));
    setErrors((cur) => ({ ...cur, [name]: "" }));
    setSubmitState({ type: "", message: "" });
  };

  const validateForm = () => {
    const next = { ...initialErrors };
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!formData.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Please enter a valid email.";
    if (!formData.subject.trim()) next.subject = "Please enter a subject.";
    if (!formData.message.trim()) next.message = "Please enter your message.";
    else if (formData.message.trim().length < 20)
      next.message = "Message should be at least 20 characters.";
    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting || !validateForm()) return;

    if (!emailReady) {
      setSubmitState({
        type: "error",
        message: "EmailJS is not configured. Add your environment variables first.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitState({ type: "", message: "" });
      await sendPortfolioMessage({ ...formData, toEmail: email });
      setSubmitState({ type: "success", message: "Message sent! I'll get back to you soon." });
      setFormData(initialFormState);
      setErrors(initialErrors);
    } catch (error) {
      setSubmitState({
        type: "error",
        message: error?.message || "Something went wrong while sending.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitState.type !== "success") return;
    const timer = setTimeout(() => setSubmitState({ type: "", message: "" }), 4000);
    return () => clearTimeout(timer);
  }, [submitState]);

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <div className="contact-layout">
          <div className="contact-content" data-reveal="up">
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="section-description">
              I'm actively seeking full-time opportunities as a MERN stack developer.
              Feel free to reach out for roles, internships, or to discuss my work.
            </p>

            <div className="contact-info-grid">
              <article className="contact-info-card glass-card glass-card--soft">
                <div className="contact-info-card__icon"><FaEnvelope /></div>
                <div>
                  <p className="contact-info-card__label">Email</p>
                  <a className="contact-info-card__value" href={`mailto:${email}`}>{email}</a>
                </div>
              </article>

              <article className="contact-info-card glass-card glass-card--soft">
                <div className="contact-info-card__icon"><FaLocationDot /></div>
                <div>
                  <p className="contact-info-card__label">Location</p>
                  <p className="contact-info-card__value">{location}</p>
                </div>
              </article>

              <article className="contact-info-card glass-card glass-card--soft">
                <div className="contact-info-card__icon"><FaLinkedinIn /></div>
                <div>
                  <p className="contact-info-card__label">LinkedIn</p>
                  <a className="contact-info-card__value" href={linkedin} target="_blank" rel="noreferrer">
                    View Profile
                  </a>
                </div>
              </article>

              <article className="contact-info-card glass-card glass-card--soft">
                <div className="contact-info-card__icon"><FaGithub /></div>
                <div>
                  <p className="contact-info-card__label">GitHub</p>
                  <a className="contact-info-card__value" href={github} target="_blank" rel="noreferrer">
                    View Repositories
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div className="contact-form-wrap glass-card glow-ring noise-overlay">
            <div className="contact-form-wrap__header">
              <span className="section-eyebrow">Send a Message</span>
              <h3 className="contact-form-wrap__title">Drop me a message</h3>
              <p className="contact-form-wrap__text">
                This form sends directly to my email through EmailJS.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__grid">
                <label className="contact-field">
                  <span className="contact-field__label">Your Name</span>
                  <input className="contact-field__input" type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                  {errors.name && <span className="contact-field__error">{errors.name}</span>}
                </label>
                <label className="contact-field">
                  <span className="contact-field__label">Your Email</span>
                  <input className="contact-field__input" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                  {errors.email && <span className="contact-field__error">{errors.email}</span>}
                </label>
              </div>

              <label className="contact-field">
                <span className="contact-field__label">Subject</span>
                <input className="contact-field__input" type="text" name="subject" placeholder="What is this about?" value={formData.subject} onChange={handleChange} />
                {errors.subject && <span className="contact-field__error">{errors.subject}</span>}
              </label>

              <label className="contact-field">
                <span className="contact-field__label">Message</span>
                <textarea className="contact-field__textarea" name="message" placeholder="Write your message..." rows="6" value={formData.message} onChange={handleChange} />
                {errors.message && <span className="contact-field__error">{errors.message}</span>}
              </label>

              {submitState.message && (
                <div className={`contact-form__status ${submitState.type === "success" ? "contact-form__status--success" : "contact-form__status--error"}`}>
                  {submitState.type === "success" ? <FaCircleCheck /> : <FaTriangleExclamation />}
                  <span>{submitState.message}</span>
                </div>
              )}

              <button type="submit" className="premium-button premium-button--primary contact-form__submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;