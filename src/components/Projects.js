import React, { useState } from 'react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedProj, setSelectedProj] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#F7F0E6] dark:bg-[#1A1412] text-[#2B231D] dark:text-[#F4ECE3] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5C4033] dark:text-[#E6C594] text-xs font-bold uppercase tracking-widest block mb-2 font-sans">
            Selected Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B231D] dark:text-[#F4ECE3]">
            Featured Engineering Projects
          </h2>
          <p className="text-[#6B5F56] dark:text-[#B5A699] text-base mt-4 font-sans leading-relaxed">
            Full-stack Web Applications, Spring AI integrations, Microservices, and LLM Tokenizers crafted with focus.
          </p>
        </motion.div>

        {/* Project Card Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <motion.div 
              key={proj.id || index}
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                {/* Project Image Frame */}
                {proj.image && (
                  <div className="relative overflow-hidden h-48 border-b border-[#E2D6C5] dark:border-[#382E28] bg-[#E7DDCD] dark:bg-[#1A1412]">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B231D] dark:text-[#F4ECE3] mb-3">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B5F56] dark:text-[#B5A699] font-sans leading-relaxed mb-6 line-clamp-2">
                    {proj.description || (proj.bullets && proj.bullets[0])}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.technologies && proj.technologies.slice(0, 4).map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="bg-[#E7DDCD] dark:bg-[#342A24] border border-[#E2D6C5] dark:border-[#42352E] text-[#2B231D] dark:text-[#E8D4C8] text-[11px] font-semibold px-3 py-1 rounded-full font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies && proj.technologies.length > 4 && (
                      <span className="bg-[#E7DDCD] dark:bg-[#342A24] text-[#8C7A6B] dark:text-[#9E8E81] text-[11px] font-semibold px-2.5 py-1 rounded-full font-sans">
                        +{proj.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Action Links Footer */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-3 border-t border-[#E2D6C5]/60 dark:border-[#382E28]/60 pt-4 mt-auto">
                <button 
                  onClick={() => setSelectedProj(proj)}
                  className="text-xs font-bold text-[#2B231D] dark:text-[#F4ECE3] hover:text-[#5C4033] dark:hover:text-[#E6C594] transition-colors font-sans"
                >
                  View Details &rarr;
                </button>

                <div className="flex items-center gap-2">
                  {(proj.links?.github || proj.links?.code) && (
                    <a 
                      href={proj.links.github || proj.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2.5 rounded-full bg-[#E7DDCD] dark:bg-[#342A24] text-[#2B231D] dark:text-[#F4ECE3] hover:bg-[#B8AA94] dark:hover:bg-[#4D3F38] transition-colors text-sm"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {proj.links?.demo && (
                    <a 
                      href={proj.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#5C4033] dark:bg-[#E6C594] text-white dark:text-[#2B231D] hover:bg-[#4A3328] dark:hover:bg-[#F5D6A0] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-sans inline-flex items-center gap-1.5 shadow-sm"
                    >
                      Demo <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal View for Project Detail */}
        <AnimatePresence>
          {selectedProj && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProj(null)}
            >
              <motion.div 
                className="bg-[#F7F0E6] dark:bg-[#201A17] border border-[#E2D6C5] dark:border-[#382E28] text-[#2B231D] dark:text-[#F4ECE3] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProj(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-[#E7DDCD] dark:bg-[#342A24] text-[#2B231D] dark:text-[#F4ECE3] hover:bg-[#B8AA94] transition-colors"
                  aria-label="Close dialog"
                >
                  <FaTimes />
                </button>

                <span className="text-[#5C4033] dark:text-[#E6C594] text-xs font-bold uppercase tracking-wider block mb-1 font-sans">
                  Project Insight
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-4 pr-8">
                  {selectedProj.title}
                </h3>

                <p className="text-sm text-[#6B5F56] dark:text-[#B5A699] font-sans leading-relaxed mb-6">
                  {selectedProj.description}
                </p>

                {(selectedProj.details || selectedProj.bullets) && (
                  <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B231D] dark:text-[#F4ECE3] font-sans">
                      Key Highlights & Architecture:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#6B5F56] dark:text-[#B5A699] font-sans">
                      {(selectedProj.details || selectedProj.bullets).map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#5C4033] dark:text-[#E6C594] font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProj.technologies && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B231D] dark:text-[#F4ECE3] font-sans mb-3">
                      Technologies & Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProj.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-[#E7DDCD] dark:bg-[#342A24] border border-[#E2D6C5] dark:border-[#42352E] text-[#2B231D] dark:text-[#E8D4C8] text-xs font-semibold px-3 py-1 rounded-full font-sans"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#E2D6C5] dark:border-[#382E28]">
                  {(selectedProj.links?.github || selectedProj.links?.code) && (
                    <a 
                      href={selectedProj.links.github || selectedProj.links.code} 
                      className="bg-[#B8AA94] dark:bg-[#3D322C] text-[#2B231D] dark:text-[#F4ECE3] hover:bg-[#A89A84] dark:hover:bg-[#4A3D36] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Repository
                    </a>
                  )}
                  {selectedProj.links?.frontend && (
                    <a 
                      href={selectedProj.links.frontend} 
                      className="bg-[#B8AA94] dark:bg-[#3D322C] text-[#2B231D] dark:text-[#F4ECE3] hover:bg-[#A89A84] dark:hover:bg-[#4A3D36] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Frontend
                    </a>
                  )}
                  {selectedProj.links?.backend && (
                    <a 
                      href={selectedProj.links.backend} 
                      className="bg-[#B8AA94] dark:bg-[#3D322C] text-[#2B231D] dark:text-[#F4ECE3] hover:bg-[#A89A84] dark:hover:bg-[#4A3D36] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Backend
                    </a>
                  )}
                  {selectedProj.links?.demo && (
                    <a 
                      href={selectedProj.links.demo} 
                      className="bg-[#5C4033] dark:bg-[#E6C594] text-white dark:text-[#2B231D] hover:bg-[#4A3328] dark:hover:bg-[#F5D6A0] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
