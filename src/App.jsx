import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      // delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      disable: 'mobile'
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
