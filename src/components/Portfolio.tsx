'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Portfolio() {
  const router = useRouter();

  const handleViewAllProjects = () => {
    try {
      router.push('/projects');
    } catch (error) {
      window.location.href = '/projects';
    }
  };

  const projects = [
    {
      title: "E-Commerce AI Platform",
      category: "AI/ML • SaaS",
      description: "Advanced e-commerce platform with AI-powered product recommendations, inventory management, and customer behavior analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS"],
      features: ["AI Recommendations", "Real-time Analytics", "Multi-vendor Support"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare • Web App",
      description: "Comprehensive healthcare management solution with patient records, appointment scheduling, and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      features: ["Patient Portal", "Video Consultations", "Prescription Management"],
      link: "#",
      github: "#",

    },
    {
      title: "FinTech Mobile App",
      category: "Finance • Mobile",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      features: ["Biometric Auth", "Real-time Notifications", "Investment Portfolio"],
      link: "#",
      github: "#",

    },
    {
      title: "Educational VR Platform",
      category: "Education • VR/AR",
      description: "Immersive virtual reality educational platform for interactive learning experiences and virtual campus tours.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop",
      technologies: ["Unity", "C#", "WebXR", "Three.js"],
      features: ["Virtual Classrooms", "3D Simulations", "Interactive Content"],
      link: "#",
      github: "#",

    },
    {
      title: "Social Media Analytics Tool",
      category: "Marketing • Analytics",
      description: "Advanced analytics dashboard for social media performance tracking, sentiment analysis, and campaign optimization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Python", "Redis", "Chart.js"],
      features: ["Real-time Analytics", "Sentiment Analysis", "Automated Reporting"],
      link: "#",
      github: "#",

    },
    {
      title: "IoT Smart Home System",
      category: "IoT • Hardware",
      description: "Comprehensive smart home automation system with voice control, energy monitoring, and security features.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      technologies: ["React", "MQTT", "Raspberry Pi", "AWS IoT"],
      features: ["Voice Control", "Energy Monitoring", "Security Integration"],
      link: "#",
      github: "#",

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
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
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
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our latest projects and see how we've helped businesses transform 
            their digital presence with innovative technology solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative bg-slate-800/90 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 hover:border-slate-600/50 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    Featured
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 text-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 text-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full font-bold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-slate-300 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs bg-slate-700 text-blue-400 px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-bold text-slate-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-slate-700 text-blue-400 px-3 py-1 rounded-full font-medium border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 transform hover:scale-110 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewAllProjects}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}