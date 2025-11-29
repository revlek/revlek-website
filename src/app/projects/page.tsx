'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
  const router = useRouter();

  const handleBack = () => {
    try {
      router.push('/');
    } catch (error) {
      window.location.href = '/';
    }
  };

  // Extended projects list with more detailed projects
  const allProjects = [
    {
      title: "E-Commerce AI Platform",
      category: "AI/ML • SaaS",
      description: "Advanced e-commerce platform with AI-powered product recommendations, inventory management, and customer behavior analytics. Built with modern technologies and scalable architecture.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS", "PostgreSQL", "Redis"],
      features: ["AI Recommendations", "Real-time Analytics", "Multi-vendor Support", "Advanced Search", "Payment Integration"],
      link: "#",
      github: "#",
      featured: true,
      year: "2024"
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare • Web App",
      description: "Comprehensive healthcare management solution with patient records, appointment scheduling, and telemedicine capabilities. HIPAA compliant with end-to-end encryption.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0c3c56?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
      features: ["Patient Portal", "Video Consultations", "Prescription Management", "Medical Records", "Appointment System"],
      link: "#",
      github: "#",
      year: "2024"
    },
    {
      title: "FinTech Mobile App",
      category: "Finance • Mobile",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking. Built with bank-grade security standards.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase", "Docker"],
      features: ["Biometric Auth", "Real-time Notifications", "Investment Portfolio", "Budget Tracking", "Secure Payments"],
      link: "#",
      github: "#",
      year: "2023"
    },
    {
      title: "Educational VR Platform",
      category: "Education • VR/AR",
      description: "Immersive virtual reality educational platform for interactive learning experiences and virtual campus tours. Supporting multiple VR devices.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop",
      technologies: ["Unity", "C#", "WebXR", "Three.js", "React", "Node.js"],
      features: ["Virtual Classrooms", "3D Simulations", "Interactive Content", "Multi-device Support", "Progress Tracking"],
      link: "#",
      github: "#",
      year: "2023"
    },
    {
      title: "Real Estate Analytics Dashboard",
      category: "Real Estate • Analytics",
      description: "Comprehensive real estate analytics platform with market insights, property valuations, and investment opportunity analysis.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis"],
      features: ["Market Analytics", "Property Valuation", "Investment Insights", "Interactive Maps", "Data Visualization"],
      link: "#",
      github: "#",
      year: "2023"
    },
    {
      title: "Social Media Management Tool",
      category: "Marketing • SaaS",
      description: "All-in-one social media management platform with content scheduling, analytics, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "AWS", "Docker"],
      features: ["Content Scheduling", "Analytics Dashboard", "Team Collaboration", "Multi-platform Support", "AI Content Suggestions"],
      link: "#",
      github: "#",
      year: "2024"
    },
    {
      title: "Supply Chain Management",
      category: "Logistics • Enterprise",
      description: "Enterprise-grade supply chain management system with real-time tracking, inventory optimization, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      technologies: ["Angular", "Spring Boot", "MySQL", "Redis", "Kafka", "Docker"],
      features: ["Real-time Tracking", "Inventory Management", "Predictive Analytics", "Supplier Integration", "Route Optimization"],
      link: "#",
      github: "#",
      year: "2023"
    },
    {
      title: "Fitness & Wellness App",
      category: "Health • Mobile",
      description: "Comprehensive fitness and wellness application with workout tracking, nutrition planning, and community features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "TensorFlow Lite"],
      features: ["Workout Tracking", "Nutrition Planning", "Community Features", "Progress Analytics", "AI Recommendations"],
      link: "#",
      github: "#",
      year: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Header */}
      <motion.section 
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.button
            onClick={handleBack}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </motion.button>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Portfolio
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our comprehensive collection of successful projects across various industries and technologies. 
            Each project represents our commitment to excellence and innovation.
          </motion.p>

          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-slate-800 px-4 py-2 rounded-full">{allProjects.length} Projects</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full">Multiple Industries</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full">Latest Technologies</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-blue-400 font-medium bg-blue-900/30 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}