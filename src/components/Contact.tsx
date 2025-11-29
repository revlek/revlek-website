'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setSubmitMessage('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitMessage("Thank you for subscribing! You'll receive our newsletter updates.");
      setFormData({ name: '', email: '' });
    } catch {
      setSubmitMessage('Subscription failed. Please try again later or email us.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Weekly Updates",
      content: "Industry Insights",
      description: "Latest tech trends and tips"
    },
    {
      icon: Clock,
      title: "Regular Schedule",
      content: "Consistent Delivery",
      description: "Never miss important updates"
    },
    {
      icon: MessageCircle,
      title: "Expert Content",
      content: "Curated Articles",
      description: "From our development team"
    },
    {
      icon: Send,
      title: "Easy Unsubscribe",
      content: "One-click Opt-out",
      description: "No spam, ever"
    }
  ];



  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Subscribe to get the latest insights on technology trends, development tips, 
            and exclusive content delivered directly to your inbox.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Newsletter Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Newsletter Benefits</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/90 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-blue-500/20"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-sm text-blue-200">{info.description}</p>
                    </div>
                  </div>
                  <p className="text-blue-100 font-medium">{info.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-slate-800/90 p-8 rounded-xl text-white border border-blue-500/20">
              <h4 className="text-xl font-bold mb-4">What You'll Get</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Latest development trends and insights
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Exclusive tutorials and guides
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Early access to new content
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  No spam, unsubscribe anytime
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/90 p-8 rounded-xl shadow-lg border border-blue-500/20">
              <h3 className="text-3xl font-bold text-white mb-8">Subscribe to Newsletter</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-blue-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-blue-200"
                    placeholder="john@company.com"
                  />
                </div>

                {submitMessage && (
                  <div className="p-4 bg-green-900/50 border border-green-500/30 rounded-lg">
                    <p className="text-green-300">{submitMessage}</p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe Now
                    </span>
                  )}
                </motion.button>
              </form>
              <div className="mt-6 text-center">
                <a
                  href="https://calendly.com/info-revlek/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-colors"
                >
                  Book a Call on Calendly
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}