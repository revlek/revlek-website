'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Palette, Smartphone, Megaphone, Globe, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CTA from './CTA';

export default function Services() {
  const router = useRouter();
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements and drive growth.",
      features: ["Web Applications", "Enterprise Software", "API Development", "System Integration"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence to automate processes and provide data-driven insights.",
      features: ["AI Chatbots", "Predictive Analytics", "Computer Vision", "Natural Language Processing"]
    },
    {
      icon: Rocket,
      title: "SaaS Platforms",
      description: "Scalable Software-as-a-Service platforms designed for modern businesses with subscription-based models.",
      features: ["Multi-tenant Architecture", "Cloud Deployment", "Subscription Management", "Analytics Dashboard"]
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Stunning visual designs that capture your brand essence and engage your target audience effectively.",
      features: ["UI/UX Design", "Brand Identity", "Motion Graphics", "Print Design"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "React Native", "Flutter Development", "App Store Optimization"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to increase your online presence and drive qualified leads.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"]
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-700/20 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive digital solutions tailored to your business needs, 
            combining innovation with expertise to drive your success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-slate-600/20 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border border-slate-700/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-center text-sm text-slate-300 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-sm" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Additional CTA Section */}
        <div className="mt-20 relative z-10">
          <CTA
            title="Have a Project in Mind?"
            subtitle="Let's discuss your requirements and create a custom solution that exceeds your expectations."
            primaryButtonText="Start Your Project"
            secondaryButtonText="Book a Call"
            variant="dark"
            showRating={false}
          />
        </div>
      </div>
    </section>
  );
}