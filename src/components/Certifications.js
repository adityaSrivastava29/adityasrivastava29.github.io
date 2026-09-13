import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaAws, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({
    awsDev: false,
    awsCloud: false,
    github: false,
  });

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <section id="certifications" className="py-20 sm:py-24 bg-[#F7F0E6] dark:bg-[#1A1412] text-[#2B231D] dark:text-[#F4ECE3] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5C4033] dark:text-[#E6C594] text-xs font-bold uppercase tracking-widest block mb-2 font-sans">
            Verified Credentials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B231D] dark:text-[#F4ECE3]">
            Certifications & Accreditation
          </h2>
          <p className="text-[#332721] dark:text-[#D6C7B8] text-base mt-4 font-sans leading-relaxed">
            Industry recognized certifications validating AWS cloud architecture and software delivery.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {/* AWS Developer Certification */}
          <ReactCardFlip isFlipped={isFlipped.awsDev} flipDirection="horizontal">
            {/* Front Side */}
            <div 
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-center flex flex-col justify-between h-full min-h-[300px]"
              onClick={() => handleFlip('awsDev')}
            >
              <div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#E7DDCD] dark:bg-[#342A24] border border-[#E2D6C5] dark:border-[#382E28] flex items-center justify-center text-[#5C4033] dark:text-[#E6C594]">
                  <FaAws className="text-3xl text-[#2B231D] dark:text-[#F4ECE3]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2B231D] dark:text-[#F4ECE3] mb-2">
                  AWS Certified Developer
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5C4033] dark:text-[#E6C594] mb-1 font-sans">
                  Associate
                </p>
                <p className="text-xs text-[#8C7A6B] dark:text-[#9E8E81] font-sans">
                  September 2024 - September 2027
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2D6C5]/70 dark:border-[#382E28]/70 flex items-center justify-between">
                <span className="text-xs font-sans text-[#332721] dark:text-[#D6C7B8]">Click card to view preview</span>
                <a 
                  href="https://www.credly.com/badges/7db7a116-798b-4143-b5d3-4bc650ccc019/linked_in_profile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#5C4033] dark:bg-[#E6C594] text-white dark:text-[#2B231D] hover:bg-[#4A3328] dark:hover:bg-[#F5D6A0] px-3.5 py-1.5 rounded-full text-xs font-bold font-sans uppercase tracking-wider inline-flex items-center gap-1.5"
                >
                  Credly <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </div>

            {/* Back Side */}
            <div 
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-4 cursor-pointer min-h-[300px] flex items-center justify-center" 
              onClick={() => handleFlip('awsDev')}
            >
              <img src={certifications[0].image} alt="AWS Certified Developer Certificate" className="w-full h-auto rounded-2xl border border-[#E2D6C5] dark:border-[#382E28]" loading="lazy" />
            </div>
          </ReactCardFlip>

          {/* AWS Cloud Practitioner Certification */}
          <ReactCardFlip isFlipped={isFlipped.awsCloud} flipDirection="horizontal">
            {/* Front Side */}
            <div 
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-center flex flex-col justify-between h-full min-h-[300px]"
              onClick={() => handleFlip('awsCloud')}
            >
              <div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#E7DDCD] dark:bg-[#342A24] border border-[#E2D6C5] dark:border-[#382E28] flex items-center justify-center text-[#5C4033] dark:text-[#E6C594]">
                  <FaAws className="text-3xl text-[#2B231D] dark:text-[#F4ECE3]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2B231D] dark:text-[#F4ECE3] mb-2">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5C4033] dark:text-[#E6C594] mb-1 font-sans">
                  Foundational
                </p>
                <p className="text-xs text-[#8C7A6B] dark:text-[#9E8E81] font-sans">
                  May 2023 - September 2027
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2D6C5]/70 dark:border-[#382E28]/70 flex items-center justify-between">
                <span className="text-xs font-sans text-[#332721] dark:text-[#D6C7B8]">Click card to view preview</span>
                <a 
                  href="https://www.credly.com/badges/ec72467a-91a3-4a89-9551-e2ad94ed9327/linked_in_profile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#5C4033] dark:bg-[#E6C594] text-white dark:text-[#2B231D] hover:bg-[#4A3328] dark:hover:bg-[#F5D6A0] px-3.5 py-1.5 rounded-full text-xs font-bold font-sans uppercase tracking-wider inline-flex items-center gap-1.5"
                >
                  Credly <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </div>

            {/* Back Side */}
            <div 
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-4 cursor-pointer min-h-[300px] flex items-center justify-center" 
              onClick={() => handleFlip('awsCloud')}
            >
              <img src={certifications[1].image} alt="AWS Certified Cloud Practitioner Certificate" className="w-full h-auto rounded-2xl border border-[#E2D6C5] dark:border-[#382E28]" loading="lazy" />
            </div>
          </ReactCardFlip>

          {/* GitHub Foundations Certification */}
          <ReactCardFlip isFlipped={isFlipped.github} flipDirection="horizontal">
            {/* Front Side */}
            <div 
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-center flex flex-col justify-between h-full min-h-[300px]"
              onClick={() => handleFlip('github')}
            >
              <div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#E7DDCD] dark:bg-[#342A24] border border-[#E2D6C5] dark:border-[#382E28] flex items-center justify-center text-[#5C4033] dark:text-[#E6C594]">
                  <FaGithub className="text-3xl text-[#2B231D] dark:text-[#F4ECE3]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2B231D] dark:text-[#F4ECE3] mb-2">
                  GitHub Foundations
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5C4033] dark:text-[#E6C594] mb-1 font-sans">
                  Verified Specialist
                </p>
                <p className="text-xs text-[#8C7A6B] dark:text-[#9E8E81] font-sans">
                  May 2025 - March 2028
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2D6C5]/70 dark:border-[#382E28]/70 flex items-center justify-between">
                <span className="text-xs font-sans text-[#332721] dark:text-[#D6C7B8]">Click card to view preview</span>
                <a 
                  href="https://www.credly.com/badges/20576d85-9b88-464f-acc6-ccfbaf247027/linked_in_profile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#5C4033] dark:bg-[#E6C594] text-white dark:text-[#2B231D] hover:bg-[#4A3328] dark:hover:bg-[#F5D6A0] px-3.5 py-1.5 rounded-full text-xs font-bold font-sans uppercase tracking-wider inline-flex items-center gap-1.5"
                >
                  Credly <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </div>

            {/* Back Side */}
            <div 
              className="bg-[#EFE6D8] dark:bg-[#251E1A] border border-[#E2D6C5] dark:border-[#382E28] rounded-3xl p-4 cursor-pointer min-h-[300px] flex items-center justify-center" 
              onClick={() => handleFlip('github')}
            >
              <img src={certifications[2].image} alt="GitHub Foundations Certificate" className="w-full h-auto rounded-2xl border border-[#E2D6C5] dark:border-[#382E28]" loading="lazy" />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};

export default Certifications;


