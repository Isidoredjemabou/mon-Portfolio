import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";
import "./Navbar.css";



const AnimatedLogo = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Lance l'animation toutes les 5 secondes
    const interval = setInterval(() => {
      setExpanded(true);
      // Revient à "ID" après 2 secondes
      setTimeout(() => setExpanded(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className="logo-name"
      animate={{ width: expanded ? "auto" : "auto" }}
    >
      <motion.span
        className="logo-short"
        animate={{ opacity: expanded ? 0 : 1, width: expanded ? 0 : "auto" }}
        transition={{ duration: 0.4 }}
      >
        ID
      </motion.span>
      <motion.span
        className="logo-full"
        animate={{ opacity: expanded ? 1 : 0, width: expanded ? "auto" : 0 }}
        transition={{ duration: 0.4 }}
      >
        Isidore DJEMABOU
      </motion.span>
    </motion.span>
  );
};
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeSection = useActiveSection([
    "home",
    "about", 
    "skills",
    "projects",
    "educations",
    "contact",
  ]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    const navbarHeight = 70;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
  };

 
  const links = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Éducations", href: "#educations" },
    { label: "Contact", href: "#contact" },
  ];
 
 
  return (
  <section className="home" id="home">
    <header className="navbar">
      {/* Logo */}
     <a href="#home" className="navbar-logo">
        <span className="logo-icon">&lt;/&gt;</span>
        <span className="logo-text">
             <AnimatedLogo />
        </span>
   </a>
 
      {/* ── MENU DESKTOP (toujours visible) ── */}
      <nav className="navbar-desktop">
        {links.map((link) => (
      <a
      key={link.href}
      href={link.href}
      className={`navbar-link ${
        activeSection === link.href.replace("#", "") ? "active" : ""
      }`}
      onClick={(e) => handleNavClick(e, link.href)}
    >
      {link.label}
    </a>
  ))}

      </nav>
 
      {/* ── BOUTON HAMBURGER (mobile uniquement) ── */}
      <button
        className="navbar-burger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className={`burger-line ${isOpen ? "open" : ""}`} />
        <span className={`burger-line ${isOpen ? "open" : ""}`} />
        <span className={`burger-line ${isOpen ? "open" : ""}`} />
      </button>
 
      {/* ── MENU MOBILE (s'ouvre/ferme) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="navbar-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link) => (
      <a
      key={link.href}
      href={link.href}
      className={`navbar-link ${
        activeSection === link.href.replace("#", "") ? "active" : ""
      }`}
      onClick={(e) => handleNavClick(e, link.href)}
    >
      {link.label}
    </a>
  ))}
          </motion.nav>
        )}
      </AnimatePresence>
 
      {/* Overlay pour fermer en cliquant dehors */}
      {isOpen && (
        <div className="navbar-overlay" onClick={() => setIsOpen(false)} />
      )}
    </header>
    </section> 
  );
};
 
export default Navbar;