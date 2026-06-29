import { useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type {Variants} from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaBoxOpen, FaChartBar, FaBriefcase } from "react-icons/fa6";
import { IoAlertCircle } from "react-icons/io5";
import { GiPeaceDove } from "react-icons/gi";
import "./Projects.css";
 
/* ── Animation ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};
 
/* ── Types ── */
type Categorie = "Tous" | "Applications Web/Mobile" | "Python & Data";
 
interface Projet {
  id: number;
  icon: JSX.Element;
  titre: string;
  statut: "En cours" | "Terminé";
  categorie: Categorie[];
  techs: string[];
  description: string;
  github: string | null;
  site: string | null;
}
 
/* ── Données ── */
const projets: Projet[] = [
  {
    id: 1,
    icon: <IoAlertCircle size={40} color="#1e40af" />,
    titre: "Plateforme connectée d'Assistance Citoyenne",
    statut: "En cours",
    categorie: ["Applications Web/Mobile"],
    techs: ["HTML5/JavaScripts/CSS3", "Base de donnée: SQL pour le moment",  "Flask", "Mobile Responsive"],
    description:
      "Conception et développement d'une solution numérique (Web et Mobile) dédiée à la centralisation et à l'accès rapide aux services d'assistance et d'utilité publique.Ce project se concentre sur l'optimisation des temps de répose et d'ergonomie d'interface pour permettre aux utilisateurs d'accéder aux ressources critiques en un temps de record.",
    github: null,
    site: null,
  },
  {
    id: 2,
    icon: <FaBoxOpen size={40} color="#1e40af" />,
    titre: "Script d'Automatisation de Boutique",
    statut: "En cours",
    categorie: ["Python & Data"],
    techs: ["Python", "Scripting", "Automatisation"],
    description:
      "Création d'un script sur mesure pour optimiser la gestion quotidienne d'une boutique locale. Le programme automatise les tâches répétitives (suivi des stocks, alertes, calculs de ventes), permettant un gain de temps considérable et éliminant le risque d'erreurs manuelles.",
    github: null,
    site: null,
  },
  {
    id: 3,
    icon: <FaChartBar size={40} color="#1e40af" />,
    titre: "Data Processor Python & Excel",
    statut: "Terminé",
    categorie: ["Python & Data"],
    techs: ["Python", "Pandas"],
    description:
      "Développement d'un outil d'analyse et de traitement automatique de fichiers Excel volumineux. Le script nettoie, trie, filtre et extrait les données importantes en quelques secondes, transformant des tableurs bruts et complexes en rapports clairs et exploitables.",
    github: "#",
    site: null,
  },
  {
    id: 4,
    icon: <GiPeaceDove size={40} color="#1e40af" />,
    titre: "Plateforme d'Échanges & Religion",
    statut: "En cours",
    categorie: ["Applications Web/Mobile"],
    techs: ["React", "CSS Moderne"],
    description:
      "Réalisation d'un site web dédié aux questions et discussions autour de la religion. L'accent est mis sur une mise en page épurée, une lecture confortable (ergonomie textuelle) et un espace de navigation serein propice à l'échange.",
    github: null,
    site: null,
  },
  {
    id: 5,
    icon: <FaBriefcase size={40} color="#1e40af" />,
    titre: "Portfolio Professionnel Interactif",
    statut: "Terminé",
    categorie: ["Applications Web/Mobile"],
    techs: ["React", "TypeScript", "Framer Motion", "CSS3"],
    description:
      "Conception de mon propre site vitrine pour présenter mes compétences de développeur. Intégration d'une timeline animée, d'une grille de projets filtrable et d'animations fluides avec Framer Motion. Code propre, responsive et optimisé de bout en bout.",
    github: "#",
    site: "#",
  },
];
 
const filtres: Categorie[] = ["Tous", "Applications Web/Mobile", "Python & Data"];
 
/* ── Composant ── */
const Projects = () => {
  const [filtre, setFiltre] = useState<Categorie>("Tous");
 
  const projetsFiltres =
    filtre === "Tous"
      ? projets
      : projets.filter((p) => p.categorie.includes(filtre));
 
  return (
    <section className="projects" id="projects">
 
      {/* En-tête */}
      <motion.div
        className="projects-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="projects-label">Projets</p>
        <h2 className="projects-title">Mes Réalisations</h2>
        <p className="projects-subtitle">
          Des projets concrets qui reflètent mes compétences et ma passion pour le développement.
        </p>
      </motion.div>
 
      {/* Filtres */}
      <motion.div
        className="projects-filters"
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filtres.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filtre === f ? "active" : ""}`}
            onClick={() => setFiltre(f)}
          >
            {f}
          </button>
        ))}
      </motion.div>
 
      {/* Grille */}
      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {projetsFiltres.map((projet, i) => (
            <motion.div
              key={projet.id}
              className="project-card"
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              {/* Zone image / emoji */}
              <div className="project-thumb">
                <span className="project-icon">{projet.icon}</span>
                <span className={`project-statut ${projet.statut === "Terminé" ? "statut-termine" : "statut-encours"}`}>
                  {projet.statut === "Terminé" ? "✅ Terminé" : "🔄 En cours"}
                </span>
              </div>
 
              {/* Contenu */}
              <div className="project-body">
                <h3 className="project-titre">{projet.titre}</h3>
                <p className="project-desc">{projet.description}</p>
 
                {/* Tags tech */}
                <div className="project-techs">
                  {projet.techs.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
 
                {/* Boutons */}
                <div className="project-actions">
                  <a
                    href={projet.github ?? "#"}
                    className={`project-btn btn-github ${!projet.github ? "btn-disabled" : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => !projet.github && e.preventDefault()}
                  >
                    <FaGithub size={15} />
                    Code Source
                  </a>
                  <a
                    href={projet.site ?? "#"}
                    className={`project-btn btn-site ${!projet.site ? "btn-disabled" : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => !projet.site && e.preventDefault()}
                  >
                    <FaExternalLinkAlt size={13} />
                    {projet.site ? "Visiter" : "Bientôt"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
 
    </section>
  );
};
 
export default Projects;