'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Code, Palette, Rocket, Smartphone, Brain, Megaphone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleStartProject = () => {
    router.push('/contact');
  };

  const handleExploreServices = () => {
    router.push('#services');
  };

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-[calc(6rem+env(safe-area-inset-top,0px))] md:pt-[calc(8rem+env(safe-area-inset-top,0px))]">
      {/* Clean, Professional Background */}
      <div className="absolute inset-0">
        {/* Base gradient layer - smooth and consistent */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        
        {/* Subtle gradient orbs - minimal and professional */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-700/10 to-slate-600/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        
        {/* Minimal floating elements - subtle */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${(i * 12.5) + 5}%`,
                top: `${(i * 11) + 10}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Main Heading - Professional and Clean */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight"
            >
              Building Tomorrow&apos;s Technology
            </motion.div>
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-light"
            >
              Today, Together
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-slate-400 mx-auto rounded-full" />
          </motion.div>

          {/* Description - Professional and Concise */}
          <motion.p 
            variants={fadeInUp} 
            className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business with cutting-edge software solutions and AI innovation. 
            We craft digital experiences that drive real results and long-term growth.
          </motion.p>

          {/* Professional CTA Button */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-12">
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStartProject}
            >
              Start Your Project
            </motion.button>
          </motion.div>

          {/* Professional Trust Indicators - Brighter Text */}
          <motion.div 
            variants={fadeInUp} 
            className="mt-16 sm:mt-20 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-slate-300 text-sm sm:text-base z-10 relative"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-200">Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-slate-200">No obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-slate-200">100% satisfaction guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-full p-3 border border-slate-600/50"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(30, 64, 175, 0.3)" }}
        >
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}