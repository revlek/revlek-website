'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

// Technology logos array - two rows with high-quality official logos and distinct colors
const techLogos = [
  // Row 1 - Frontend & Languages (Distinct colors to avoid overlap)
  [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-indigo-600 to-purple-600' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', color: 'from-gray-700 to-gray-800' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg', color: 'from-emerald-500 to-green-600' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: 'from-red-600 to-pink-600' },
    { name: 'Svelte', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg', color: 'from-orange-600 to-red-500' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg', color: 'from-orange-500 to-amber-600' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg', color: 'from-violet-500 to-purple-600' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: 'from-cyan-500 to-teal-500' },
    { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', color: 'from-purple-600 to-indigo-700' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: 'from-pink-600 to-rose-600' },
  ],
  // Row 2 - Backend & Databases (Distinct colors to avoid overlap)
  [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg', color: 'from-green-600 to-emerald-600' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg', color: 'from-amber-500 to-yellow-600' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg', color: 'from-blue-700 to-indigo-700' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg', color: 'from-lime-600 to-green-700' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg', color: 'from-red-600 to-rose-600' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg', color: 'from-sky-500 to-blue-600' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: 'from-orange-600 to-amber-600' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: 'from-teal-600 to-cyan-600' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg', color: 'from-red-700 to-orange-700' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg', color: 'from-slate-800 to-gray-900' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg', color: 'from-gray-600 to-slate-700' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg', color: 'from-emerald-700 to-green-800' },
  ]
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Auto-scroll animation
    const animateScroll = async () => {
      while (true) {
        await controls.start({
          x: '-50%',
          transition: { duration: 30, ease: 'linear' }
        });
        // Reset position instantly for infinite scroll
        controls.set({ x: 0 });
      }
    };
    
    animateScroll();
  }, [controls]);

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Technology Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Powered by cutting-edge technologies and frameworks that drive innovation
          </p>
        </motion.div>

        {/* Technology Logo Rows - Auto Scrolling */}
        <div className="space-y-8">
          {techLogos.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <motion.div
                className="flex gap-8"
                animate={controls}
                initial={{ x: 0 }}
              >
                {/* Original row */}
                <div className="flex gap-8">
                  {row.map((tech, index) => (
                    <motion.div
                      key={`${rowIndex}-${index}`}
                      className={`flex-shrink-0 w-32 h-32 rounded-xl bg-gradient-to-br ${tech.color} backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                    >
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-16 h-16 mb-2 object-contain filter brightness-110 drop-shadow-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden text-2xl mb-1">{tech.name.charAt(0)}</div>
                      <div className="text-sm font-bold text-white text-center px-2">
                        {tech.name}
                      </div>
                      {hoveredTech === tech.name && (
                        <motion.div
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          Expert Level
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Duplicate row for infinite scroll effect */}
                <div className="flex gap-8">
                  {row.map((tech, index) => (
                    <motion.div
                      key={`duplicate-${rowIndex}-${index}`}
                      className={`flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br ${tech.color} backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                    >
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-8 h-8 mb-1 object-contain filter brightness-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden text-2xl mb-1">{tech.name.charAt(0)}</div>
                      <div className="text-xs font-medium text-white text-center px-1">
                        {tech.name}
                      </div>
                      {hoveredTech === tech.name && (
                        <motion.div
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          Expert Level
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Ready to Build with Modern Tech?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We leverage the latest technologies to create powerful, scalable solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-slate-400 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>No obligation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>100% satisfaction guarantee</span>
              </div>
            </div>
            <motion.a
              href="/contact?source=tech-survey"
              aria-label="Start your tech journey"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Tech Journey
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}