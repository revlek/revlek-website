'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Mail, Phone, User, Briefcase } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'

export default function BookACall() {
  return (
    <>
      <Head>
        <title>Book a Free Consultation Call - REVELEK Software Development</title>
        <meta name="description" content="Schedule a free 30-minute consultation with REVELEK to discuss your software development, AI solutions, and digital transformation needs. Get expert advice and project estimates." />
        <meta name="keywords" content="book consultation call, software development consultation, AI consultation, free consultation, project discussion, revlek consultation" />
        <meta property="og:title" content="Book a Free Consultation Call - REVELEK Software Development" />
        <meta property="og:description" content="Schedule a free 30-minute consultation with REVELEK to discuss your software development, AI solutions, and digital transformation needs. Get expert advice and project estimates." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Free Consultation Call - REVELEK Software Development" />
        <meta name="twitter:description" content="Schedule a free 30-minute consultation with REVELEK to discuss your software development, AI solutions, and digital transformation needs. Get expert advice and project estimates." />
        <link rel="canonical" href="https://revlek.com/book-a-call" />
      </Head>
      <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Book a Call with REVELEK
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Schedule a free consultation to discuss your project requirements
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Booking Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">What to Expect</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Discovery Call (30 min)</h3>
                      <p className="text-slate-300">We'll discuss your project goals, timeline, and budget</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Technical Assessment</h3>
                      <p className="text-slate-300">Our team will analyze your requirements and propose solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Proposal & Timeline</h3>
                      <p className="text-slate-300">You'll receive a detailed proposal with timeline and pricing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a 
                      href="mailto:info.revlek@gmail.com" 
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      info.revlek@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a 
                      href="tel:+8801334918293" 
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      +8801334918293
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-slate-300">Mon-Fri 9AM-6PM EST</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Calendly Integration */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Schedule Your Call</h2>
                <p className="text-slate-300 mb-6">
                  Choose a convenient time for your free consultation. We'll send you a calendar invite with meeting details.
                </p>
                
                {/* Calendly Embed Placeholder */}
                <div className="bg-slate-700 rounded-lg p-8 text-center">
                  <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Calendly Integration</h3>
                  <p className="text-slate-300 mb-6">
                    Choose a slot on Calendly to instantly schedule your consultation.
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href="https://calendly.com/info-revlek/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Schedule on Calendly
                    </a>
                    <a
                      href="tel:+15551234567"
                      className="block w-full bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Call Us Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Prefer to discuss via email first?</h3>
                <p className="text-slate-300 mb-4">
                  Send us your project details and we'll get back to you with a proposal and available meeting times.
                </p>
                <a
                  href="mailto:hello@revlek.com?subject=Project Consultation Request&body=Hi Revlek Team,%0D%0A%0D%0AI'm interested in discussing a potential project with you. Here are some details:%0D%0A%0D%0AProject Type: [Please specify]%0D%0AEstimated Budget: [Please specify]%0D%0ATimeline: [Please specify]%0D%0A%0D%0APlease let me know when we can schedule a call to discuss this further.%0D%0A%0D%0ABest regards,"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Project Details
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}