import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <About />
        <Works />
        <Services />
        <Trust />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
