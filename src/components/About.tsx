'use client';

import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years of Experience" },
    { number: "15+", label: "Team Members" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to understand your needs and deliver beyond expectations."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring robust, scalable, and future-proof solutions."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We evolve with technology trends and continuously upgrade our skills to provide the best solutions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About REVELEK
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            We're a forward-thinking technology company dedicated to building the future of digital innovation. 
            Our mission is to empower businesses with modern technology solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group p-3 sm:p-4 md:p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300"
              variants={itemVariants}
            >
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-blue-400 mb-2 sm:mb-4 group-hover:scale-110 transition-all duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-300 font-semibold text-sm sm:text-base md:text-lg group-hover:text-white transition-colors duration-300">{stat.label}</div>
              <div className="w-8 sm:w-12 md:w-16 h-1 bg-blue-500 mx-auto rounded-full mt-2 md:mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
              To be the most trusted digital partner for businesses worldwide, delivering innovative 
              technology solutions that drive growth, efficiency, and success in the digital era.
            </p>
            <div className="space-y-3">
              {[
                "Deliver exceptional quality in every project",
                "Foster long-term partnerships with clients",
                "Drive innovation through continuous learning",
                "Make technology accessible to all businesses"
              ].map((point, index) => (
                <div key={index} className="flex items-center text-slate-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-3 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Vision</h3>
            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
              To lead the digital transformation revolution by creating innovative solutions 
              that empower businesses to thrive in an increasingly connected world.
            </p>
            <div className="bg-slate-800/90 p-4 sm:p-6 rounded-2xl text-white border border-slate-700/30">
              <blockquote className="text-base sm:text-lg italic text-slate-300">
                "Building tomorrow's technology today, one solution at a time."
              </blockquote>
              <cite className="block mt-4 text-blue-500 font-semibold">— REVELEK Team</cite>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">Our Core Values</h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center group p-4 sm:p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-600/30">
                <value.icon className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-300 transition-colors duration-300">{value.title}</h4>
              <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm md:text-base">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}