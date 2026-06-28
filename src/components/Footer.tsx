import { motion } from "framer-motion";
import type { Variants } from "framer-motion"
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";
 
/* ── Animation ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
 
/* ── Réseaux sociaux ── */
const socials = [
  {
    icon: <FaFacebookF size={18} />,
    label: "Facebook",
    href: "https://facebook.com/Isidore_Djemabou",
    hoverColor: "#1877f2",
  },
  {
    icon: <FaWhatsapp size={18} />,
    label: "WhatsApp",
    href: "https://wa.me/22948267028",
    hoverColor: "#25d366",
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    href: "https://instagram.com/IsidoreDjemabou",
    hoverColor: "#e1306c",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/Isidore_DJEMABOU",
    hoverColor: "#0a66c2",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/Isidoredjemabou",
    hoverColor: "#ffffff",
  },
  {
    icon: <FaEnvelope size={18} />,
    label: "Email",
    href: "mailto:isidoredjemabou@gmail.com",
    hoverColor: "#1e40af",
  },
];
 
/* ── Composant ── */
const Footer = () => {
  return (
    <motion.footer
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footer-inner">
 
        {/* ── Gauche : Identité ── */}
        <div className="footer-identity">
          <h3 className="footer-name">Isidore DJEMABOU</h3>
          <p className="footer-role">
            Étudiant en Mathématiques, Informatique et Applications (MIA)
          </p>
          <p className="footer-bio">
            Passionné par la tech, je me forme continuellement au développement
            informatique pour concevoir des solutions performantes, innovantes
            et adaptées aux besoins de demain.
          </p>
        </div>
 
        {/* ── Centre : Réseaux sociaux ── */}
        <div className="footer-socials">
          <p className="footer-socials-title"> Mes Réseaux Sociaux</p>
          <div className="footer-socials-icons">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={s.label}
                style={{ "--hover-color": s.hoverColor } as React.CSSProperties}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
 
        {/* ── Droite : Copyright ── */}
        <div className="footer-copy">
          <p>© 2026 Isidore Djemabou.</p>
          <p>Tous droits réservés.</p>
          <p className="footer-made">
            Fait avec ❤️ en React & TypeScript + Vite
          </p>
        </div>
 
      </div>
 
      {/* Ligne de bas */}
      <div className="footer-bottom">
        <p>Conçu & développé par <span>Isidore Djemabou</span></p>
      </div>
 
    </motion.footer>
  );
};
 
export default Footer;
 