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
import PageContainer from "../layout/PageContainer";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../common/SectionHeading";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "",
    message: "",
  });

  const { email, linkedin, github, location } = portfolioData;
  const emailReady = useMemo(() => canSendEmail(), []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSubmitState({
      type: "",
      message: "",
    });
  };

  const validateForm = () => {
    const nextErrors = { ...initialErrors };

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = "Message should be at least 20 characters long.";
    }

    setErrors(nextErrors);

    return !Object.values(nextErrors).some(Boolean);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;
    if (!validateForm()) return;

    if (!emailReady) {
      setSubmitState({
        type: "error",
        message:
          "EmailJS is not configured yet. Add your EmailJS environment variables first.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitState({
        type: "",
        message: "",
      });

      await sendPortfolioMessage({
        ...formData,
        toEmail: email,
      });

      setSubmitState({
        type: "success",
        message: "Message sent successfully. I will get it in my email inbox.",
      });

      setFormData(initialFormState);
      setErrors(initialErrors);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error?.message || "Something went wrong while sending the message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitState.type !== "success") return;

    const timer = setTimeout(() => {
      setSubmitState({
        type: "",
        message: "",
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, [submitState]);

  return (
    <SectionWrapper id="contact" className="contact-section">
      <PageContainer>
        <div className="contact-layout">
          <div className="contact-content" data-reveal="up">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something"
              highlight="meaningful together"
              description="Whether it is a full stack product, a polished frontend build, or a UI-focused implementation, I am open to discussing opportunities and collaborations."
            />

            <div className="contact-info-grid">
              <article className="contact-info-card glass-card glass-card--soft">
                <div className="contact-info-card__icon">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="contact-info-card__label">Email</p>
                  <a className="contact-info-card__value" href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>
              </article>

              <article className="contact-info-card glass-card glass-card--soft">
                <div className="contact-info-card__icon">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="contact-info-card__label">Location</p>
                  <p className="contact-info-card__value">{location}</p>
                </div>
              </article>

              <article className="contact-info-card glass-card glass-card--soft">
                <div className="contact-info-card__icon">
                  <FaLinkedinIn />
                </div>
                <div>
                  <p className="contact-info-card__label">LinkedIn</p>
                  <a
                    className="contact-info-card__value"
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </article>

              <article className="contact-info-card glass-card glass-card--soft">
                <div className="contact-info-card__icon">
                  <FaGithub />
                </div>
                <div>
                  <p className="contact-info-card__label">GitHub</p>
                  <a
                    className="contact-info-card__value"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repositories
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div className="contact-form-wrap glass-card glow-ring noise-overlay">
            <div className="contact-form-wrap__header">
              <span className="section-eyebrow">Send a Message</span>
              <h3 className="contact-form-wrap__title">
                Start the conversation with a clear project brief.
              </h3>
              <p className="contact-form-wrap__text">
                This form sends directly to your email through EmailJS.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__grid">
                <label className="contact-field">
                  <span className="contact-field__label">Your Name</span>
                  <input
                    className="contact-field__input"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="contact-field__error">{errors.name}</span>
                  )}
                </label>

                <label className="contact-field">
                  <span className="contact-field__label">Your Email</span>
                  <input
                    className="contact-field__input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="contact-field__error">{errors.email}</span>
                  )}
                </label>
              </div>

              <label className="contact-field">
                <span className="contact-field__label">Subject</span>
                <input
                  className="contact-field__input"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <span className="contact-field__error">{errors.subject}</span>
                )}
              </label>

              <label className="contact-field">
                <span className="contact-field__label">Message</span>
                <textarea
                  className="contact-field__textarea"
                  name="message"
                  placeholder="Write your project details or message..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="contact-field__error">{errors.message}</span>
                )}
              </label>

              {submitState.message && (
                <div
                  className={`contact-form__status ${
                    submitState.type === "success"
                      ? "contact-form__status--success"
                      : "contact-form__status--error"
                  }`}
                >
                  {submitState.type === "success" ? (
                    <FaCircleCheck />
                  ) : (
                    <FaTriangleExclamation />
                  )}
                  <span>{submitState.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="premium-button premium-button--primary contact-form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}

export default Contact;