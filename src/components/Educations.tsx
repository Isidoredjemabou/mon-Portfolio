import { motion } from "framer-motion";
import type {Variants} from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaBook,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";
import { FaCertificate, FaRocket } from "react-icons/fa";
import "./Educations.css";
 
/* ── Animation ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};
 
/* ── Données centralisées ── */
const etapes = [
  {
    id: 1,
    statut: "En cours",
    diplome: "Licence 2",
    periode: "2025-2026 — Présent",
    institution: "Université d'Abomey-Calavi (UAC)",
    faculte: "FAST / MIA — Mathématiques, Informatique et Applications",
    matieres: [
      "Fonctions de plusieurs variables réelles",
      "Suites et séries de fonctions",
      "Topologie de Rn",
      "Algèbre linéaire approfondie",
      "Statistiques inférentielle  et applications",
      "Analyse Complexe",
      "Algèbre Multilinéaire",
      "Langage Python",
      "Langage Scilab",
      "Algorithme et langage C",
      "Introduition au web",
      "Anglais scientifique",
      "Traitement de Texte Sciebtifique par LateX"
    ],
    mention: null,
    icon: <FaGraduationCap size={18} />,
    enCours: true,
  },
  {
    id: 2,
    statut: "Validée",
    diplome: "Licence 1",
    periode: "2024 — 2025",
    institution: "Université d'Abomey-Calavi (UAC)",
    faculte: "FAST / MIA — Mathématiques, Informatique et Applications",
    matieres: [
      "Logique et théorie des ensembles",
      "Algèbre linéaire",
      "Topologie de R",
      "Fonction d'une variable réelle",
      "Structure algébriques et arithmétique",
      "Introduition à la probabilité et à la statistique",
      "Intégrales et équations différentielles",
      "Conception et spécification des données relationnelle",
      "Algébre relationnelle et langage SQL",
      "Environnement informatique",
      "Archotecture des ordinateurs",
      "Anglais scientifique",
    ],
    mention: null,
    icon: <FaGraduationCap size={18} />,
    enCours: false,
  },
  {
    id: 3,
    statut: "Obtenu",
    diplome: "BAC Série C",
    periode: "2024",
    institution: "CEG So-Ava",
    faculte: "Baccalauréat Scientifique — 2020 à 2023",
    matieres: [
      "Mathématiques",
      "Physique-Chimie",
      "Sciences de la Vie et de la Terre",
      "Français",
      "Anglais"
    ],
    mention: "Assez Bien", // ← Remplis ta mention ici
    icon: <FaSchool size={18} />,
    enCours: false,
  },
  {
    id: 4,
    statut: "Obtenu",
    diplome: "BEPC",
    periode: "2021",
    institution: "CEG So-Ava",
    faculte: "Brevet d'Études du Premier Cycle — 2017 à 2021",
    matieres: [
      "Physique-Chimie-Technologie (PCT)",
      "Mathématiques",
      "Français",
      "Anglais",
    ],
    mention: null,
    icon: <FaSchool size={18} />,
    enCours: false,
  },
  {
    id: 5,
    statut: "Obtenu",
    diplome: "CEP",
    periode: "2017",
    institution: "Cours Primaire Privé",
    faculte: "Certificat d'Études Primaires — 2010 à 2016",
    matieres: [],
    description:
      "Cycle complet démarré depuis la classe de CI (2010-2011), posant les bases de mon parcours scolaire avec rigueur.",
    mention: null,
    icon: <FaBook size={18} />,
    enCours: false,
  },
];
 
/* ── Composant ── */
const Educations = () => {
  return (
    <section className="educations" id="educations">
 
      {/* En-tête */}
      <motion.div
        className="education-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="edu-label">Éducation</p>
        <h2 className="edu-title">Mon Parcours Académique</h2>
        <p className="edu-subtitle">
          Mon cursus, mes diplômes et les compétences théoriques acquises au fil des années.
        </p>
      </motion.div>
 
      {/* Timeline */}
      <div className="timeline">
        {etapes.map((etape, i) => (
          <motion.div
            key={etape.id}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            custom={0.1 * (i + 1)}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Point sur le trait */}
            <div className={`timeline-dot ${etape.enCours ? "active" : ""}`}>
              {etape.icon}
            </div>
 
            {/* Carte */}
            <div className={`timeline-card ${etape.enCours ? "card-active" : ""}`}>
 
              {/* Badge statut */}
              <div className="card-top">
                <span className={`edu-badge ${etape.enCours ? "badge-encours" : "badge-valide"}`}>
                  {etape.enCours ? (
                    <><FaSpinner className="spin" size={10} /> {etape.statut}</>
                  ) : (
                    <><FaCheckCircle size={10} /> {etape.statut}</>
                  )}
                </span>
                <span className="edu-periode">{etape.periode}</span>
              </div>
 
              {/* Diplôme */}
              <h3 className="edu-diplome">{etape.diplome}</h3>
 
              {/* Institution */}
              <p className="edu-institution">{etape.institution}</p>
              <p className="edu-faculte">{etape.faculte}</p>
 
              {/* Mention (si remplie) */}
              {etape.mention !== null && etape.mention !== "" && (
                <p className="edu-mention">🏅 Mention : {etape.mention}</p>
              )}
 
              {/* Matières */}
              {etape.matieres && etape.matieres.length > 0 && (
                <div className="edu-matieres">
                  {etape.matieres.map((m) => (
                    <span key={m} className="edu-matiere-tag">{m}</span>
                  ))}
                </div>
              )}
 
              {/* Description (primaire) */}
              {etape.description && (
                <p className="edu-desc">{etape.description}</p>
              )}
            </div>
          </motion.div>
        ))}
 
        {/* Trait vertical */}
        <div className="timeline-line" />
      </div>
      {/* ── Formations Complémentaires & Objectifs ── */}
<div className="edu-extra">
  <motion.div
    className="edu-extra-header"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <p className="edu-label">Pour aller plus loin</p>
    <h2 className="edu-title">Formations Complémentaires & Objectifs</h2>
  </motion.div>

  <div className="edu-extra-grid">

    {/* Carte 1 */}
    <motion.div
      className="edu-extra-card"
      custom={0.1}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="edu-extra-icon">
        <FaCertificate size={24} />
      </div>
      <h3 className="edu-extra-title">
        Formations Complémentaires & Autodidactisme
      </h3>
      <p className="edu-extra-sous-titre">
        Bibliothèque Bénin Excellente (BE) · Plateformes Web · Communautés Tech
      </p>
      <p className="edu-extra-desc">
        Convaincu que le développement logiciel demande une évolution constante,
        je propulse mes compétences au-delà des cours universitaires. J'ai
        notamment suivi une formation spécialisée en Python à la Bibliothèque
        Bénin Excellente (BE). Je complète quotidiennement ce parcours par une
        veille active sur des sites spécialisés, des documentaires tech et des
        cours en ligne pour maîtriser les architectures de code les plus modernes.
      </p>
    </motion.div>

    {/* Carte 2 */}
    <motion.div
      className="edu-extra-card"
      custom={0.2}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="edu-extra-icon">
        <FaRocket size={24} />
      </div>
      <h3 className="edu-extra-title">
        Ambitions & Objectifs Professionnels
      </h3>
      <p className="edu-extra-sous-titre">
        Expertise · Transmission · Innovation
      </p>
      <p className="edu-extra-desc">
        Mon but à long terme est de devenir un Expert en Génie Logiciel. Je
        construis mon parcours pour maîtriser les stacks technologiques les plus
        modernes et performantes afin de concevoir des architectures complètes et
        de participer à des projets d'envergure, complexes et innovants.
      </p>
      <ul className="edu-extra-points">
        <li>
          🚀 <strong>Ingénierie & Full-Stack</strong> — Maîtriser de bout en
          bout le cycle de développement pour concevoir des applications robustes
          et scalables.
        </li>
        <li>
          🧠 <strong>Partage & Enseignement</strong> — Transmettre mes
          connaissances en mathématiques appliquées et en technologies pour
          former la prochaine génération de passionnés d'informatique.
        </li>
        <li>
          💡 <strong>Innovation Tech</strong> — M'investir dans la résolution de
          problèmes techniques complexes pour apporter des solutions concrètes et
          à fort impact.
        </li>
      </ul>
    </motion.div>

  </div>
</div>
 
    </section>
  );
};
 
export default Educations;
 