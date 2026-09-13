import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ModeToggle } from './theme/mode-toggle';
import resumePdf from '../Assets/Aditya_kumar_Java_full_stack_developer_resume.pdf';
import { trackResumeDownload } from '../lib/analytics';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-3 z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="bg-[#EFE6D8]/95 dark:bg-[#251E1A]/95 backdrop-blur-md border border-[#E2D6C5] dark:border-[#382E28] rounded-full px-6 py-3 shadow-md">
        <nav className="flex items-center justify-between">
          <button
            className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2B231D] dark:text-[#F4ECE3] hover:text-[#5C4033] dark:hover:text-[#E6C594] transition-colors"
            onClick={() => scrollToSection('about')}
          >
            Aditya Kumar Srivastava
          </button>
          <ul className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#332721] dark:text-[#D6C7B8]">
            <li><a className="hover:text-[#2B231D] dark:hover:text-[#F4ECE3] transition-colors" href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a className="hover:text-[#2B231D] dark:hover:text-[#F4ECE3] transition-colors" href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a className="hover:text-[#2B231D] dark:hover:text-[#F4ECE3] transition-colors" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a className="hover:text-[#2B231D] dark:hover:text-[#F4ECE3] transition-colors" href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a className="hover:text-[#2B231D] dark:hover:text-[#F4ECE3] transition-colors" href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a className="hover:text-[#2B231D] dark:hover:text-[#F4ECE3] transition-colors" href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
            <li><a className="hover:text-[#2B231D] dark:hover:text-[#F4ECE3] transition-colors" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li className="ml-1">
              <a 
                href={resumePdf} 
                download="Aditya_Kumar_Resume.pdf" 
                onClick={() => trackResumeDownload('Desktop PDF')}
                className="inline-flex h-9 items-center rounded-full bg-[#5C4033] text-white hover:bg-[#4A3328] dark:bg-[#E6C594] dark:text-[#2B231D] dark:hover:bg-[#F5D6A0] px-5 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Resume
              </a>
            </li>
            <li><ModeToggle /></li>
          </ul>
          <div className="lg:hidden flex items-center gap-3">
            <ModeToggle />
            <button className="text-xl text-[#2B231D] dark:text-[#F4ECE3]" onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-6 shadow-xl">
          <ul className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-wider text-[#332721] dark:text-[#D6C7B8]">
            <li><a className="block hover:text-[#2B231D] dark:hover:text-[#F4ECE3]" href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a className="block hover:text-[#2B231D] dark:hover:text-[#F4ECE3]" href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a className="block hover:text-[#2B231D] dark:hover:text-[#F4ECE3]" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a className="block hover:text-[#2B231D] dark:hover:text-[#F4ECE3]" href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a className="block hover:text-[#2B231D] dark:hover:text-[#F4ECE3]" href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a className="block hover:text-[#2B231D] dark:hover:text-[#F4ECE3]" href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
            <li><a className="block hover:text-[#2B231D] dark:hover:text-[#F4ECE3]" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li className="mt-2">
              <a 
                href={resumePdf} 
                download="Aditya_Kumar_Resume.pdf" 
                onClick={() => trackResumeDownload('Mobile PDF')}
                className="inline-flex h-10 w-full justify-center items-center rounded-full bg-[#5C4033] text-white dark:bg-[#E6C594] dark:text-[#2B231D] px-5 text-xs font-bold uppercase tracking-wider"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

