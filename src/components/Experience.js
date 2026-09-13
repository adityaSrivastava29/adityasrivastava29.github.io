import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-[#F7F0E6] dark:bg-[#1A1412] text-[#2B231D] dark:text-[#F4ECE3] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5C4033] dark:text-[#E6C594] text-xs font-bold uppercase tracking-widest block mb-2 font-sans">
            Career Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B231D] dark:text-[#F4ECE3]">
            Professional Experience
          </h2>
          <p className="text-[#332721] dark:text-[#D6C7B8] text-base mt-4 font-sans leading-relaxed">
            Building scalable Java microservices, Spring Boot backends, and cloud solutions across enterprise environments.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#E2D6C5] dark:border-[#382E28] ml-4 sm:ml-8 md:ml-32 space-y-12 transition-colors duration-300">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative pl-6 sm:pl-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Node Pin on Timeline */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#5C4033] dark:bg-[#E6C594] border-4 border-[#F7F0E6] dark:border-[#1A1412] shadow-sm" />

              {/* Date Badge on left for larger screens */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-bold font-sans uppercase tracking-wider text-[#8C7A6B] dark:text-[#9E8E81] mb-2 md:mb-0 md:text-right md:w-28">
                {exp.period}
              </div>

              {/* Stoneware Card Container */}
              <div className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-6 sm:p-8 shadow-sm transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#2B231D] dark:text-[#F4ECE3]">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-bold text-[#5C4033] dark:text-[#E6C594] font-sans mt-0.5">
                      {exp.companyLink ? (
                        <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>

                  <span className="inline-block bg-[#E7DDCD] dark:bg-[#342A24] text-[#2B231D] dark:text-[#E8D4C8] text-xs font-semibold px-3.5 py-1 rounded-full font-sans border border-[#E2D6C5] dark:border-[#42352E] self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements List */}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="space-y-2.5 mt-4 text-sm text-[#332721] dark:text-[#D6C7B8] font-sans leading-relaxed">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#5C4033] dark:text-[#E6C594] mt-1 shrink-0">❖</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;