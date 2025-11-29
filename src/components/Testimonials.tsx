'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "REVELEK transformed our business with their innovative software solution. The team’s expertise and dedication exceeded our expectations.",
      rating: 5,
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20business%20woman%20headshot%2C%20confident%20smile%2C%20modern%20corporate%20setting%2C%20high%20quality%20portrait&image_size=square"
    },
    {
      name: "Michael Chen",
      role: "CTO, Digital Dynamics",
      content: "Outstanding work on our AI platform. The attention to detail and technical excellence was remarkable. Highly recommend their services.",
      rating: 5,
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Asian%20male%20executive%20headshot%2C%20confident%20expression%2C%20business%20attire%2C%20high%20quality%20corporate%20portrait&image_size=square"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      content: "The mobile app they developed for us is simply amazing. User-friendly design and flawless functionality. Our customers love it!",
      rating: 5,
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Latina%20woman%20headshot%2C%20creative%20professional%2C%20warm%20smile%2C%20modern%20business%20portrait&image_size=square"
    },
    {
      name: "David Thompson",
      role: "Marketing Director, GrowthCo",
      content: "REVELEK’s digital marketing strategy delivered exceptional results. Our online presence has never been stronger.",
      rating: 5,
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20male%20marketing%20executive%20headshot%2C%20confident%20business%20portrait%2C%20modern%20corporate%20setting&image_size=square"
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
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/90 p-6 md:p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20 group"
              variants={itemVariants}
            >
              {/* Quote Icon */}
              <div className="mb-4 md:mb-6">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-blue-400 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-blue-100 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                {testimonial.content}
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-3 md:mr-4 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-blue-300 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            { number: "50+", label: "Happy Clients" },
            { number: "98%", label: "Client Retention" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}