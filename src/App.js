import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Experience from './components/Experience';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden w-full" style={{ maxWidth: '100%' }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;