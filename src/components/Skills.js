import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = skills.map((c) => ({ title: c.title, skills: c.items }));

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#F7F0E6] dark:bg-[#1A1412] text-[#2B231D] dark:text-[#F4ECE3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5C4033] dark:text-[#E6C594] text-xs font-bold uppercase tracking-widest block mb-2 font-sans">
            Technical Stack
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B231D] dark:text-[#F4ECE3]">
            Crafts & Capabilities
          </h2>
          <p className="text-[#332721] dark:text-[#D6C7B8] text-base mt-4 font-sans leading-relaxed">
            Technologies, frameworks, and architecture patterns honed through building high-scale production systems.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B231D] dark:text-[#F4ECE3] mb-6 pb-3 border-b border-[#E2D6C5]/70 dark:border-[#382E28]/70 flex items-center justify-between">
                <span>{category.title}</span>
                {/* <span className="text-xs font-sans font-medium text-[#8C7A6B] dark:text-[#E8D4C8] bg-[#E7DDCD] dark:bg-[#342A24] px-3 py-1 rounded-full border border-[#E2D6C5] dark:border-[#42352E]">
                  {category.skills.length} skills
                </span> */}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="flex items-center gap-3 bg-[#F7F0E6] dark:bg-[#1A1412] border border-[#E2D6C5] dark:border-[#382E28] rounded-xl px-3.5 py-2.5 hover:bg-[#FBF6EE] dark:hover:bg-[#231B18] hover:border-[#B8AA94] dark:hover:border-[#4A3D36] transition-all duration-200"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="max-h-6 max-w-6 object-contain dark:brightness-110 transition-transform duration-200 hover:scale-110" 
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#2B231D] dark:text-[#F4ECE3] whitespace-nowrap font-sans">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;