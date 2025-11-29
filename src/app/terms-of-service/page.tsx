'use client';

import { motion } from 'framer-motion';
import { Shield, Calendar, Mail, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TermsOfServicePage() {
  const router = useRouter();

  const lastUpdated = "November 15, 2024";

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Revlek's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our services."
      ]
    },
    {
      title: "Services Description",
      content: [
        "Revlek provides software development, AI solutions, SaaS platforms, mobile app development, UI/UX design, and digital marketing services.",
        "The specific scope of services will be defined in individual project agreements or statements of work."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All custom software, designs, and deliverables created by Revlek for clients become the property of the client upon full payment.",
        "Revlek retains the right to use general methodologies, frameworks, and non-client-specific code in future projects.",
        "Pre-existing intellectual property owned by Revlek remains the sole property of Revlek."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Payment terms are outlined in individual project agreements and typically include milestone-based payments.",
        "Invoices are due within 30 days unless otherwise specified in the project agreement.",
        "Late payments may incur interest charges at 1.5% per month."
      ]
    },
    {
      title: "Confidentiality",
      content: [
        "Both parties agree to maintain confidentiality of all proprietary information shared during the course of business.",
        "This obligation continues even after the termination of our business relationship."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Revlek's total liability shall not exceed the total amount paid by the client for the specific services giving rise to the liability.",
        "We are not liable for indirect, incidental, or consequential damages."
      ]
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate a project with 30 days written notice.",
        "Upon termination, the client pays for all work completed up to the termination date.",
        "All intellectual property rights transfer upon payment of outstanding amounts."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of Bangladesh.",
        "Any disputes shall be resolved through arbitration in Rajshahi District."
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-700/10 to-slate-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 text-slate-400"
          >
            <Calendar className="w-5 h-5" />
            <span>Last Updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700/30">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Important Notice</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                By accessing and using Revlek's website and services, you agree to comply with and be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            {/* Terms Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-slate-800/30 rounded-xl p-8 border border-slate-700/30 mt-12"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">info.revlek@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-blue-400">📧</div>
                  <span className="text-slate-300">Terms of Service Department</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Let's discuss your project needs and how we can help bring your vision to life.
            </p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/contact')}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}