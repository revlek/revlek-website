'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "REVELEK transformed our business with their innovative software solution. The team’s expertise and dedication exceeded our expectations.",
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233B82F6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231E40AF;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23grad1)' rx='75'/%3E%3Ctext x='75' y='85' font-family='Arial' font-size='50' fill='white' text-anchor='middle'%3ESJ%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Michael Chen",
      role: "CTO, Digital Dynamics",
      content: "Outstanding work on our AI platform. The attention to detail and technical excellence was remarkable. Highly recommend their services.",
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234B5563;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231F2937;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23grad2)' rx='75'/%3E%3Ctext x='75' y='85' font-family='Arial' font-size='50' fill='white' text-anchor='middle'%3EMC%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      content: "The mobile app they developed for us is simply amazing. User-friendly design and flawless functionality. Our customers love it!",
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236B7280;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23374151;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23grad3)' rx='75'/%3E%3Ctext x='75' y='85' font-family='Arial' font-size='50' fill='white' text-anchor='middle'%3EER%3C/text%3E%3C/svg%3E"
    },
    {
      name: "David Thompson",
      role: "Marketing Director, GrowthCo",
      content: "REVELEK’s digital marketing strategy delivered exceptional results. Our online presence has never been stronger.",
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231E40AF;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231E3A8A;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23grad4)' rx='75'/%3E%3Ctext x='75' y='85' font-family='Arial' font-size='50' fill='white' text-anchor='middle'%3EDT%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Jennifer Liu",
      role: "VP Engineering, FinTech Solutions",
      content: "Their blockchain implementation was flawless. Security, scalability, and performance - they delivered on all fronts.",
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233B82F6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231D4ED8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23grad5)' rx='75'/%3E%3Ctext x='75' y='85' font-family='Arial' font-size='50' fill='white' text-anchor='middle'%3EJL%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Robert Martinez",
      role: "Product Manager, HealthTech Inc.",
      content: "The healthcare app they built for us is revolutionary. HIPAA compliant, user-friendly, and incredibly powerful.",
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232D3748;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231A202C;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23grad6)' rx='75'/%3E%3Ctext x='75' y='85' font-family='Arial' font-size='50' fill='white' text-anchor='middle'%3ERM%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Amanda Foster",
      role: "CEO, E-commerce Plus",
      content: "Our online sales increased by 300% after their e-commerce platform upgrade. Absolutely phenomenal results!",
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234B5563;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%232D3748;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23grad7)' rx='75'/%3E%3Ctext x='75' y='85' font-family='Arial' font-size='50' fill='white' text-anchor='middle'%3EAF%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Kevin Zhang",
      role: "Head of Innovation, TechCorp",
      content: "Their IoT solutions transformed our manufacturing process. Efficiency gains beyond our wildest expectations.",
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231E3A8A;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231E40AF;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='150' height='150' fill='url(%23grad8)' rx='75'/%3E%3Ctext x='75' y='85' font-family='Arial' font-size='50' fill='white' text-anchor='middle'%3EKZ%3C/text%3E%3C/svg%3E"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scrolling functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl"></div>
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
            Client Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Trusted by industry leaders worldwide. Discover how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Display */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="mb-6 md:mb-8">
                  <Quote className="w-10 h-10 md:w-12 md:h-12 text-slate-400 opacity-60 mx-auto" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6 md:mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-blue-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-base md:text-lg lg:text-xl text-slate-200 mb-8 md:mb-12 leading-relaxed font-light italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full mr-4 md:mr-6 object-cover border border-slate-600"
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-slate-400 text-sm md:text-base">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white p-3 md:p-4 rounded-full transition-all duration-200 hover:scale-105 border border-slate-700/50"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white p-3 md:p-4 rounded-full transition-all duration-200 hover:scale-105 border border-slate-700/50"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-400 w-6' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "4.9/5", label: "Average Rating" },
            { number: "150+", label: "Happy Clients" },
            { number: "98%", label: "Client Retention" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}