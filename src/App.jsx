import AmbientBackground from "./components/layout/AmbientBackground";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import useTheme from "./hooks/useTheme";
import useReveal from "./hooks/useReveal";

function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <main className="portfolio-app">
      <AmbientBackground />
      <div className="mouse-glow mouse-glow--one" />
      <div className="mouse-glow mouse-glow--two" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;