import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

export function canSendEmail() {
  return Boolean(
    EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.templateId &&
      EMAILJS_CONFIG.publicKey
  );
}

export async function sendPortfolioMessage(payload) {
  if (!canSendEmail()) {
    throw new Error("EmailJS environment variables are missing.");
  }

  const templateParams = {
    from_name: payload.name,
    from_email: payload.email,
    subject: payload.subject,
    message: payload.message,
    to_email: payload.toEmail,
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
}