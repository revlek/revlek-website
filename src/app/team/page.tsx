'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github, Award, Users, Target, Code, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function TeamPage() {
  const router = useRouter();

  const team = [
    {
      name: "Ismail Hosen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616-612b5bc?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary founder leading REVELEK with a focus on innovation, client success, and world-class delivery.",
      email: "info.revlek@gmail.com",
      linkedin: "https://www.linkedin.com/in/revlek-ltd-60761b390",
      twitter: undefined,
      github: undefined,
      expertise: ["Leadership", "Strategy", "Delivery"]
    },
    {
      name: "Mahbub Alam",
      role: "COO & Co Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Operations leader ensuring smooth execution, process excellence, and consistent client satisfaction.",
      email: "info.revlek@gmail.com",
      linkedin: "https://www.linkedin.com/in/revlek-ltd-60761b390",
      twitter: undefined,
      github: undefined,
      expertise: ["Operations", "Process", "Growth"]
    },
    {
      name: "Siddiqur Rahman",
      role: "CTO & Co Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Technology leader driving architecture, engineering standards, and modern solutions across platforms.",
      email: "info.revlek@gmail.com",
      linkedin: "https://www.linkedin.com/in/revlek-ltd-60761b390",
      twitter: undefined,
      github: undefined,
      expertise: ["Architecture", "Engineering", "Innovation"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "3+", label: "Years of Experience", icon: Award },
    { number: "15+", label: "Team Members", icon: Code }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>Meet the REVELEK Team - Expert Software Developers & AI Specialists</title>
        <meta name="description" content="Meet the expert team at REVELEK - software developers, AI specialists, designers, and engineers who drive innovation and deliver exceptional results for our clients." />
        <meta name="keywords" content="revlek team, software development team, AI specialists, web developers, technology experts, engineering team, design team" />
        <meta property="og:title" content="Meet the REVELEK Team - Expert Software Developers & AI Specialists" />
        <meta property="og:description" content="Meet the expert team at REVELEK - software developers, AI specialists, designers, and engineers who drive innovation and deliver exceptional results for our clients." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet the REVELEK Team - Expert Software Developers & AI Specialists" />
        <meta name="twitter:description" content="Meet the expert team at REVELEK - software developers, AI specialists, designers, and engineers who drive innovation and deliver exceptional results for our clients." />
        <link rel="canonical" href="https://revlek.com/team" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.button
          onClick={() => router.push('/')}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </motion.button>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-700/10 to-slate-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                The talented individuals behind REVELEK’s success, bringing diverse expertise and passion to every project.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group p-6 bg-slate-800/30 rounded-2xl border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-300 font-semibold text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              REVELEK Leadership Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the leaders steering REVELEK’s innovation and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <div className="text-center space-y-4">
                  <div className="relative mx-auto">
                    <div className="w-24 h-24 rounded-full mx-auto border-2 border-blue-600 group-hover:border-blue-500 transition-colors duration-300 bg-slate-700 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Expertise */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.email && (
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {member.twitter && (
                      <motion.a
                        href={member.twitter}
                        className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {member.github && (
                      <motion.a
                        href={member.github}
                        className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/careers')}
              >
                View Open Positions
              </motion.button>
              <motion.button
                className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-medium hover:bg-slate-800 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/contact')}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}