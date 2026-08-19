import useTheme from "./hooks/useTheme";
import useReveal from "./hooks/useReveal";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <div className="portfolio-app">
      <div className="ambient-background">
        <div className="ambient-background__orb ambient-background__orb--one" />
        <div className="ambient-background__orb ambient-background__orb--two" />
        <div className="ambient-background__orb ambient-background__orb--three" />
        <div className="ambient-background__grid" />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;