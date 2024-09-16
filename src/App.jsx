import React from 'react';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
// import Projects from './components/Projects';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;