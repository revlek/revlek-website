'use client';

import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Award, Code, Lightbulb, Shield, Heart, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function AboutPage() {
  const router = useRouter();

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to understand your needs and deliver beyond expectations."
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring robust, scalable, and future-proof solutions."
    },
    {
      icon: Heart,
      title: "Passion & Dedication",
      description: "We love what we do, and that passion translates into exceptional results for every client we serve."
    }
  ];

  const team = [
    {
      name: "Ismail Hosen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616-612b5bc?w=150&h=150&fit=crop&crop=face",
      bio: "Visionary founder leading REVELEK with innovation and client success."
    },
    {
      name: "Mahbub Alam",
      role: "COO & Co Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Operations leader ensuring smooth execution and process excellence."
    },
    {
      name: "Siddiqur Rahman",
      role: "CTO & Co Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Technology leader driving modern architectures and engineering standards."
    }
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
        <title>About REVELEK - Digital Innovation & Software Development Company</title>
        <meta name="description" content="Learn about REVELEK, a leading software development company specializing in AI solutions, web development, and digital transformation. Meet our expert team and discover our mission." />
        <meta name="keywords" content="about revlek, software development company, AI solutions company, digital transformation, web development team, technology company, software development team" />
        <meta property="og:title" content="About REVELEK - Digital Innovation & Software Development Company" />
        <meta property="og:description" content="Learn about REVELEK, a leading software development company specializing in AI solutions, web development, and digital transformation. Meet our expert team and discover our mission." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About REVELEK - Digital Innovation & Software Development Company" />
        <meta name="twitter:description" content="Learn about REVELEK, a leading software development company specializing in AI solutions, web development, and digital transformation. Meet our expert team and discover our mission." />
        <link rel="canonical" href="https://revlek.com/about" />
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
                About REVELEK
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                We&apos;re a forward-thinking technology company dedicated to building the future of digital innovation. 
                Our mission is to empower businesses with modern technology solutions that drive growth and success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-center md:text-left flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                To be the most trusted digital partner for businesses worldwide, delivering innovative technology solutions 
                that drive growth, efficiency, and success in the digital era. We believe in making technology accessible 
                to all businesses, regardless of size or industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-center md:text-left flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                To become the leading force in digital transformation, where businesses of all sizes can leverage 
                cutting-edge technology to achieve their full potential. We envision a world where technology 
                empowers every organization to thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">REVELEK Leadership Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The leaders behind REVELEK’s success, bringing diverse expertise and passion to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full mx-auto border-2 border-blue-600 bg-slate-700 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{member.bio}</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Let&apos;s work together to bring your vision to life. Contact us today and let&apos;s discuss how we can help your business grow.
            </p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/contact')}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}