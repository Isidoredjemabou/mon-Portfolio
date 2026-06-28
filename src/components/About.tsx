import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaBolt, FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";
import { FiMonitor, FiZap, FiGrid } from "react-icons/fi";
import "./About.css";
 
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};
 
const piliers = [
  {
    icon: <FaBolt size={22} />,
    title: "Évolution Constante",
    text: "La tech change tous les jours, et c'est ce qui me plaît. Je me forme continuellement pour rester à la page et enrichir mes compétences.",
  },
  {
    icon: <FaBullseye size={22} />,
    title: "Détermination & Focus",
    text: "Face à un bug ou un problème complexe, je ne lâche rien. Chaque obstacle technique est une occasion de monter en compétences.",
  },
  {
    icon: <FaLightbulb size={22} />,
    title: "Esprit d'Innovation",
    text: "Je ne me contente pas de faire fonctionner un code ; je cherche toujours à optimiser l'expérience et à proposer des approches modernes.",
  },
  {
    icon: <FaUsers size={22} />,
    title: "Synergie & Partage",
    text: "Le code est une aventure humaine. J'accorde une grande importance aux échanges constructifs et au travail d'équipe.",
  },
];
 
const interets = [
  { icon: "⚽", label: "Stratégie & Sport", sub: "Discipline, esprit collectif et dépassement de soi" },
  { icon: "🎵", label: "Immersion Musicale", sub: "Booster ma concentration et ma productivité en codant" },
  { icon: "📺", label: "Veille & Culture Tech", sub: "Documentaires et biographies sur les pionniers du numérique" },
  { icon: "♟️", label: "Logique & Réflexion", sub: "Puzzles et jeux stratégiques pour garder l'esprit vif" },
];
 
const vision = [
  {
    icon: <FiZap size={20} />,
    title: "L'Art de Créer",
    text: "Écrire du code, c'est donner vie à une idée à partir d'une page blanche. C'est une liberté technique fascinante.",
  },
  {
    icon: <FiGrid size={20} />,
    title: "Le Plaisir du Problème",
    text: "Trouver l'origine d'un bug et le résoudre procure une satisfaction intellectuelle unique.",
  },
  {
    icon: <FiMonitor size={20} />,
    title: "Impact Réel",
    text: "Concevoir des outils qui facilitent le quotidien des gens est ma plus grande source de motivation.",
  },
];
 
const About = () => {
  return (
    <section className="about" id="about">
 
      {/* ── EN-TÊTE ── */}
      <motion.div
        className="about-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="about-label">À propos</p>
        <h2 className="about-title">Mon Parcours</h2>
        <p className="about-subtitle">
          Qui je suis, ce qui me motive et ma vision du développement.
        </p>
      </motion.div>
 
      {/* ── PRÉSENTATION ── */}
      <motion.div
        className="about-intro"
        custom={0.1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>
         
          Passionné par l'univers du numérique et la création technique, je suis
          un étudiant développeur rigoureux et constamment en quête de
          progression. Mon aventure dans l'informatique a débuté par une
          profonde curiosité : celle de comprendre l'envers du décor des
          applications que nous utilisons au quotidien. Aujourd'hui, cette
          curiosité est devenue un véritable moteur qui me pousse à concevoir
          des solutions fluides, performantes et centrées sur l'utilisateur,
          tout en prenant un réel plaisir à relever des défis logiques complexes.
      
        </p>
      </motion.div>
 
      {/* ── PILIERS ── */}
      <motion.div
        className="about-block-title"
        custom={0.15}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Mes Piliers Professionnels
      </motion.div>
 
      <div className="about-piliers">
        {piliers.map((p, i) => (
          <motion.div
            key={p.title}
            className="pilier-card"
            custom={0.1 * (i + 1)}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="pilier-icon">{p.icon}</div>
            <h4 className="pilier-title">{p.title}</h4>
            <p className="pilier-text">{p.text}</p>
          </motion.div>
        ))}
      </div>
 
      {/* ── CENTRES D'INTÉRÊT ── */}
      <motion.div
        className="about-block-title"
        custom={0.15}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Hors du Code
      </motion.div>
 
      <div className="about-interets">
        {interets.map((item, i) => (
          <motion.div
            key={item.label}
            className="interet-badge"
            custom={0.1 * (i + 1)}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="interet-emoji">{item.icon}</span>
            <div>
              <div className="interet-label">{item.label}</div>
              <div className="interet-sub">{item.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
 
      {/* ── VISION ── */}
      <motion.div
        className="about-block-title"
        custom={0.15}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Ma Vision de l'Informatique
      </motion.div>
 
      <div className="about-vision">
        {vision.map((v, i) => (
          <motion.div
            key={v.title}
            className="vision-card"
            custom={0.1 * (i + 1)}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="vision-icon">{v.icon}</div>
            <h4 className="vision-title">{v.title}</h4>
            <p className="vision-text">{v.text}</p>
          </motion.div>
        ))}
      </div>
 
    </section>
  );
};
 
export default About;