import { motion, } from "framer-motion";
import type {Variants} from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs,FaGraduationCap, FaBookOpen,  FaGitAlt, FaGithub, FaCode, FaPalette  } from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiFlask,
  SiPython,
  SiC,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

import { FiCpu, FiLayers } from "react-icons/fi";
import "./Competences.css";
 
/* ── Animation réutilisable ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};
 
/* ── Données centralisées ── */
const competences = [
  {
    id: 1,
    titre: "Front-End Development",
    sous_titre: "React · TypeScript · Vite · HTML5 · CSS3",
    description:
      "Spécialisé dans la création d'interfaces utilisateur modernes, fluides et responsives. J'associe la flexibilité de React à la sécurité de TypeScript, le tout propulsé par la rapidité de Vite pour garantir des performances optimales et un code hautement maintenable.",
    icones: [
      { icon: <FaReact size={26} />, label: "React", color: "#61dafb" },
      { icon: <SiTypescript size={26} />, label: "TypeScript", color: "#3178c6" },
      { icon: <SiVite size={26} />, label: "Vite", color: "#646cff" },
      { icon: <FaHtml5 size={26} />, label: "HTML5", color: "#e34f26" },
      { icon: <FaCss3Alt size={26} />, label: "CSS3", color: "#1572b6" },
    ],
  },
  {
    id: 2,
    titre: "Back-End & API",
    sous_titre: "Node.js · Python Flask",
    badge: "Intermédiaire",
    description:
      "Capable de concevoir l'architecture logique de serveurs robustes et d'implémenter des API fonctionnelles. Mon approche combine l'asynchronisme de Node.js pour des services agiles et la légèreté de Flask pour structurer des back-ends sécurisés et prêts à communiquer efficacement.",
    icones: [
      { icon: <FaNodeJs size={26} />, label: "Node.js", color: "#339933" },
      { icon: <SiFlask size={26} />, label: "Flask", color: "#000000" },
      { icon: <SiPython size={26} />, label: "Python", color: "#3776ab" },
    ],
  },
  {
    id: 3,
    titre: "Design UI/UX & Animations Interfaces",
    sous_titre: "Figma (Bases) · Ergonomie · Framer Motion",
    description:
      "Avec une maîtrise estimée à 50%, je possède de solides compétences en design d'interface et en expérience utilisateur. Je comprends les règles d'alignement, d'harmonie des couleurs et de typographie. J'allie cette sensibilité graphique à la puissance de Framer Motion pour concevoir des animations fluides, interactives et modernes, garantissant ainsi des interfaces aussi esthétiques que performantes.",
    icones: [
      { icon: <FaPalette size={26} />, label: "UI/UX", color: "#ec4899" },
      { icon: <FiLayers size={26} />, label: "Figma", color: "#a259ff" },
      { icon: <FaReact size={26} />, label: "Framer Motion", color: "#0055ff" },
    ],
  },
  {
    id: 4,
    titre: "Data & Automation",
    sous_titre: "Python · Scripts d'automatisation",
    description:
      "J'exploite la puissance de Python pour traiter des volumes de données ( fichiers Excel et csv ) et optimiser les flux de travail. Je conçois des scripts sur mesure capables d'automatiser des tâches répétitives, d'analyser des métriques clés et de simplifier les processus complexes.",
    icones: [
      { icon: <SiPython size={26} />, label: "Python", color: "#3776ab" },
      { icon: <FiCpu size={26} />, label: "Automatisation", color: "#1e40af" },
    ],
  },
  {
    id: 5,
    titre: "Soutien Scolaire & Pédagogie",
    sous_titre: "Mathématiques (Du CI à la Terminale)",
    description:
      "J'accompagne des élèves du primaire jusqu'au lycée (Terminale) pour les aider à comprendre et progresser en mathématiques. Cette activité me permet de développer ma patience, mon sens de l'explication et ma capacité à simplifier des notions complexes. C'est une expérience humaine qui renforce aussi ma propre logique et ma rigueur au quotidien.",
    icones: [
      { icon: <FaGraduationCap size={26} />, label: "Pédagogie", color: "#1e40af" },
      { icon: <FaBookOpen size={26} />, label: "Mathématiques", color: "#7c3aed" },
    ],
  },
  {
    id: 6,
    titre: "Outils & Environnement",
    sous_titre: "Git · GitHub · VS Code",
    description:
      "J'utilise au quotidien des outils professionnels pour optimiser mon flux de travail et sécuriser mon code. Je maîtrise Git et GitHub pour la gestion de version (versioning) et le suivi des modifications, et j'évolue principalement sous VS Code, configuré pour coder de manière efficace, propre et rapide.",
    icones: [
      { icon: <FaGitAlt size={26} />, label: "Git", color: "#f05032" },
      { icon: <FaGithub size={26} />, label: "GitHub", color: "#111827" },
      { icon: <VscVscodeInsiders size={26} />, label: "VS Code", color: "#007acc" },
    ],
  },
  {
    id: 7,
    titre: "Algorithmique & Logique",
    sous_titre: "Python · Langage C",
    description:
      "Je maîtrise les concepts fondamentaux de Python ainsi que certaines notions plus avancées pour concevoir des algorithmes propres et optimisés. Je possède également de bonnes bases en Langage C, un langage rigoureux qui m'aide à comprendre la gestion de la mémoire. Toujours en apprentissage, j'ai hâte d'approfondir ces technologies et d'élever mon niveau dès la rentrée dans ma formation en informatique.",
    icones: [
      { icon: <SiPython size={26} />, label: "Python", color: "#3776ab" },
      { icon: <SiC size={26} />, label: "Langage C", color: "#a8b9cc" },
      { icon: <FaCode size={26} />, label: "Algorithmique", color: "#1e40af" },
    ],
  },
];
 
/* ── Composant ── */
const Competences = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
      {/* En-tête */}
      <motion.div
        className="skills-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="skills-label">Compétences</p>
        <h2 className="skills-title">Mes Compétences</h2>
        <p className="skills-subtitle">
          Les technologies et outils que j'utilise pour concevoir des solutions numériques.
        </p>
      </motion.div>
 
      {/* Cartes */}
      <div className="skills-grid">
        {competences.map((comp, i) => (
          <motion.div
            key={comp.id}
            className="skill-card"
            custom={0.1 * (i + 1)}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Titre + badge */}
            <div className="skill-card-header">
              <h3 className="skill-card-title">{comp.titre}</h3>
              {comp.badge && (
                <span className="skill-badge">{comp.badge}</span>
              )}
            </div>
 
            {/* Sous-titre */}
            <p className="skill-card-sous-titre">{comp.sous_titre}</p>
 
            {/* Icônes des technologies */}
            <div className="skill-icons">
              {comp.icones.map((tech) => (
                <div className="skill-icon-item" key={tech.label}>
                  <div
                    className="skill-icon-box"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <span className="skill-icon-label">{tech.label}</span>
                </div>
              ))}
            </div>
 
            {/* Séparateur */}
            <div className="skill-divider" />
 
            {/* Description */}
            <p className="skill-card-desc">{comp.description}</p>
          </motion.div>
        ))}
      </div>
     </div>
    </section>
  );
};
 
export default Competences;