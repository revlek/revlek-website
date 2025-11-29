'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Clock, Star, ArrowLeft } from 'lucide-react';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';

function ContactPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const isTechSurvey = source === 'tech-survey';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: isTechSurvey ? 'Tech Survey' : '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: isTechSurvey ? 'Tech Survey' : '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/info-revlek/30min', '_blank');
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
    <>
      <Head>
        <title>Contact Revlek - Get In Touch for Software Development</title>
        <meta name="description" content="Contact Revlek for cutting-edge software development, AI solutions, and digital transformation. Get a free 30-minute consultation and transform your business today." />
        <meta name="keywords" content="contact revlek, software development consultation, AI solutions contact, digital transformation services, custom software development, technology consulting" />
        <meta property="og:title" content="Contact Revlek - Get In Touch for Software Development" />
        <meta property="og:description" content="Contact Revlek for cutting-edge software development, AI solutions, and digital transformation. Get a free 30-minute consultation and transform your business today." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Revlek - Get In Touch for Software Development" />
        <meta name="twitter:description" content="Contact Revlek for cutting-edge software development, AI solutions, and digital transformation. Get a free 30-minute consultation and transform your business today." />
        <link rel="canonical" href="https://revlek.com/contact" />
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
                  {isTechSurvey ? 'Start Your Tech Journey' : 'Get In Touch'}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  {isTechSurvey
                    ? 'Answer a few quick questions and we will recommend the right technologies for your project.'
                    : 'Ready to transform your business? Let us discuss how we can bring your vision to life with our cutting-edge technology solutions.'}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookCall}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Call</span>
                </motion.button>
                <motion.button
                  className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-medium hover:bg-slate-800 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/about')}
                >
                  Learn More About Us
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 md:py-32 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
              {/* Quick Response Card */}
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-8 border border-blue-600/30">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quick Response</h3>
                <p className="text-slate-300 mb-4">We typically respond to all inquiries within 24 hours.</p>
                <div className="text-blue-400 font-semibold">Response Time: 24h</div>
              </div>

              {/* Email Support Card */}
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Support</h3>
                <p className="text-slate-300 mb-4">Send us an email and we'll get back to you promptly.</p>
                <div className="text-blue-400 font-semibold">info.revlek@gmail.com</div>
              </div>

              {/* Consultation Card */}
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-8 border border-blue-600/30">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Free Consultation</h3>
                <p className="text-slate-300 mb-4">Get a free 30-minute consultation to discuss your project.</p>
                <div className="text-blue-400 font-semibold">30 Minutes Free</div>
              </div>
            </motion.div>

            {/* Main Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Have a project in mind? We'd love to hear about it. Reach out to us and let's start a conversation about bringing your ideas to life.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a href="mailto:info.revlek@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        info.revlek@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <a href="tel:+8801334918293" className="text-blue-400 hover:text-blue-300 transition-colors">
                        +8801334918293
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-slate-300">Rajshahi, Rajshahi, Bangladesh</p>
                    </div>
                  </motion.div>
                </div>

                {/* Business Hours */}
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between">
                      <span>Open now</span>
                      <span className="text-green-400">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between"><span>Monday</span><span className="text-blue-400">9:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Tuesday</span><span className="text-blue-400">9:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Wednesday</span><span className="text-blue-400">9:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Thursday</span><span className="text-blue-400">9:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Friday</span><span className="text-slate-500">CLOSED</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="text-blue-400">9:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="text-blue-400">9:00 AM - 6:00 PM</span></div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <h2 className="text-3xl font-bold text-white mb-6">{isTechSurvey ? 'Tech Survey Inquiry' : 'Send Us a Message'}</h2>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                      <p className="text-green-400">Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-600/20 border border-red-600/30 rounded-lg">
                      <p className="text-red-400">Something went wrong. Please try again or email us directly.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
                        placeholder={isTechSurvey ? 'Tech Survey' : 'What is this about?'}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none transition-all duration-200"
                        placeholder={isTechSurvey ? 'Share goals, timeline, budget and preferred technologies...' : 'Tell us about your project or question...'}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}