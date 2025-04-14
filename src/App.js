// src/App.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Aditya Kumar Srivastava - Software Engineer</title>
        <meta name="description" content="Welcome to Aditya Kumar Srivastava's portfolio website. I'm Aditya Kumar Srivastava, a passionate software developer showcasing my projects, skills, and experience." />
        <meta name="keywords" content="Aditya Kumar Srivastava, portfolio, web development, software engineer, projects, skills" />
        <meta name="author" content="Aditya Kumar Srivastava" />
        <meta property="og:title" content="Aditya Kumar Srivastava - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adityasri.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aditya Kumar Srivastava - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <link rel="canonical" href="https://adityasri.in" />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;