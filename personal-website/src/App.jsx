import StarryBackground from './components/StarryBackground';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Feed from './components/Feed';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <StarryBackground />
      <div className="content">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Feed />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
