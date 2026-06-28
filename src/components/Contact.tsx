import { useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle
} from "react-icons/fa";
import "./Contact.css";

const SERVICE_ID = "service_0f68uhb";
const TEMPLATE_ID = "template_vdsbsdm";
const PUBLIC_KEY = "aLAP47rN-4gy35UtO";


 

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};
 
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


type Status = "idle" | "sending" | "success" | "error";
 
/* ── Composant ── */
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const [errors, setErrors] = useState({
  user_name: "",
  user_email: "",
  message: "",
});
 
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!formRef.current) return;

  const nom = (formRef.current.elements.namedItem("user_name") as HTMLInputElement)?.value.trim();
  const email = (formRef.current.elements.namedItem("user_email") as HTMLInputElement)?.value.trim();
  const message = (formRef.current.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

  // Validation
  const newErrors = { user_name: "", user_email: "", message: "" };
  let hasError = false;

  if (!nom) {
    newErrors.user_name = "⚠️ Le nom complet est requis.";
    hasError = true;
  }
  if (!email) {
    newErrors.user_email = "⚠️ L'adresse email est requise.";
    hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.user_email = "⚠️ L'adresse email n'est pas valide.";
    hasError = true;
  }
  if (!message) {
    newErrors.message = "⚠️ Le message est requis.";
    hasError = true;
  }

  setErrors(newErrors);
  if (hasError) return;

  setStatus("sending");

  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
    .then(() => {
      setStatus("success");
      formRef.current?.reset();
      setErrors({ user_name: "", user_email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    })
    .catch(() => {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    });
};
 
  const getBtnContent = () => {
    switch (status) {
      case "sending":
        return <span>Envoi en cours...</span>;
      case "success":
        return <><FaCheckCircle size={16} /><span>Message envoyé !</span></>;
      case "error":
        return <><FaExclamationCircle size={16} /><span>Erreur, réessayez</span></>;
      default:
        return (
          <>
            <span>Envoyer le message</span>
            <motion.span
              className="btn-icon"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPaperPlane size={15} />
            </motion.span>
          </>
        );
    }
  };
 
  return (
    <section className="contact" id="contact">
 
      {/* ── En-tête ── */}
      <motion.div
        className="contact-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="contact-label">Contact</p>
        <h2 className="contact-title">Travaillons Ensemble</h2>
 
        {/* Ligne dégradée */}
        <div className="contact-divider" />
 
        <p className="contact-subtitle">
          Une opportunité, un projet ou une question ?<br />
          Je lis chaque message avec attention et réponds sous{" "}
          <strong>24h</strong>.
        </p>
      </motion.div>
 
      {/* ── Carte formulaire ── */}
      <motion.div
        className="contact-card"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          noValidate
        >
 
          {/* Nom */}
          <div className="form-group">
            <label className="form-label" htmlFor="user_name">
              Nom complet <span className="required">*</span>
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className="form-input"
              placeholder="Ex : Jean Dupont"
              required
            />
            {errors.user_name && (
                 <span className="form-error">{errors.user_name}</span>
                  ) }
          </div>
  
          {/* Email */}
          <div className="form-group">
            <label className="form-label" htmlFor="user_email">
              Adresse Email <span className="required">*</span>
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Ex : jean@exemple.com"
              required
            />
            {errors.user_email && (
                <span className="form-error">{errors.user_email}</span>
             )}
          </div>
 
          {/* Message */}
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Votre Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Décrivez votre projet, votre opportunité ou posez votre question..."
              rows={6}
              required
            />
            {errors.message && (
              <span className="form-error">{errors.message}</span>
            )}
          </div>
 
          {/* Bouton */}
          <motion.button
            type="submit"
            className={`contact-btn contact-btn--${status}`}
            disabled={status === "sending"}
            whileHover={status === "idle" ? { scale: 1.02 } : {}}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {getBtnContent()}
          </motion.button>
 
        </form>
      </motion.div>
 
    </section>
  );
};
 
export default Contact;
 