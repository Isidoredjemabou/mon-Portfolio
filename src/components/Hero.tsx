import { motion } from "framer-motion";
import "./Hero.css";
import isidore from "../assets/isidore.png"
 
const Hero = () => {
  return (
    <section className="hero">
      {/* Décorations de fond */}
      <div className="hero-bg-circle hero-bg-circle--1" />
      <div className="hero-bg-circle hero-bg-circle--2" />
      <div className="hero-bg-dots" />
 
      {/* Contenu gauche */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="hero-greeting">Bonjour, je suis</p>
 
        <h1 className="hero-name">
          <span className="hero-name--blue">Djemabou</span>
          <span className="hero-name--blue"> Isidore</span>
        </h1>
 
        <div className="hero-title-line" />
 
        <p className="hero-role">Étudiant en Mathématiques,  Informatique et Applications (MIA) </p>
 
        <h4 className="hero-description">
          Passionné par le développement logiciel, les technologies web et la
          résolution de problèmes complexes. Curieux et rigoureux, je m'investis
          continuellement dans l'apprentissage de nouvelles compétences afin de
          concevoir des solutions numériques performantes et utiles.
        </h4>
 
        <div className="hero-actions">
          <a href="#projects" className="btn btn--primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn--outline">
            Me contacter
          </a>
        </div>
      </motion.div>
 
      {/* Photo à droite */}
      <motion.div
        className="hero-image-wrapper"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="hero-image-circle">
          {/*
            Remplace l'src par ta vraie photo :
            1. Mets ta photo dans src/assets/photo.jpg
            2. Importe-la en haut : import photo from "../assets/photo.jpg"
            3. Utilise src={photo}
          */}
          <img
            src={isidore}
            alt="Djemabou Isidore"
            className="hero-photo"
          />
        </div>
        <div className="hero-dot hero-dot--tl" />
        <div className="hero-dot hero-dot--br" />
      </motion.div>
    </section>
  );
};
 
export default Hero;