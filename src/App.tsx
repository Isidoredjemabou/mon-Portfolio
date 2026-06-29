import Hero from "./components/Hero";  
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Competences from "./components/Competences";
import Educations from "./components/Educations";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
        <Navbar/>
        <Hero />
        <About />
        <Competences />
        <Projects />
        <Educations />
        <Contact />
        <Footer />
    </main>
  );
}

export default App;