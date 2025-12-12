import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ReactArchitecture } from './components/ReactArchitecture';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* The requested React Skills Section inserted here for prominent flow */}
        <ReactArchitecture />
        
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;