import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/sections/Education';
import Competences from './components/sections/Competences';
import Experiences from './components/sections/Experiences';
import Projets from './components/sections/Projets';
import Certifications from './components/sections/Certifications';
import Loisirs from './components/sections/Loisirs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Education />
        <Competences />
        <Experiences />
        <Projets />
        <Certifications />
        <Loisirs />
      </main>
      <Footer />
    </div>
  );
}

export default App;