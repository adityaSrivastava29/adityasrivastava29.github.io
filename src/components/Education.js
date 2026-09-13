import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Noida Institute of Engineering and Technology, Greater Noida",
      period: "August 2018 - August 2022",
      details: "CGPA: 8.4 — Passed with Distinction",
      highlights: "Deep focus on Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and Software Engineering."
    },
    {
      degree: "Intermediate (Class XII - Senior Secondary)",
      institution: "Harihar Singh Academy, Varanasi",
      period: "April 2016 - June 2017",
      details: "Mathematics, Physics, Chemistry",
      highlights: "Solid foundation in analytical problem solving and scientific fundamentals."
    }
  ];

  return (
    <section id="education" className="py-20 sm:py-24 bg-[#F7F0E6] dark:bg-[#1A1412] text-[#2B231D] dark:text-[#F4ECE3] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5C4033] dark:text-[#E6C594] text-xs font-bold uppercase tracking-widest block mb-2 font-sans">
            Academic Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B231D] dark:text-[#F4ECE3]">
            Education & Qualifications
          </h2>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E7DDCD] dark:bg-[#342A24] border border-[#E2D6C5] dark:border-[#382E28] flex items-center justify-center shrink-0 text-[#5C4033] dark:text-[#E6C594]">
                    <FaGraduationCap className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B231D] dark:text-[#F4ECE3]">
                      {edu.degree}
                    </h3>
                    <p className="text-[#6B5F56] dark:text-[#B5A699] font-sans text-sm font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                
                <span className="inline-self-start sm:inline-self-auto bg-[#E7DDCD] dark:bg-[#342A24] text-[#2B231D] dark:text-[#E8D4C8] text-xs font-semibold px-4 py-1.5 rounded-full font-sans whitespace-nowrap border border-[#E2D6C5] dark:border-[#42352E]">
                  {edu.period}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-[#E2D6C5]/70 dark:border-[#382E28]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm font-sans">
                <span className="font-bold text-[#5C4033] dark:text-[#E6C594]">
                  {edu.details}
                </span>
                <span className="text-[#8C7A6B] dark:text-[#9E8E81]">
                  {edu.highlights}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;