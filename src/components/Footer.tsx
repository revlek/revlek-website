'use client';

import { motion } from 'framer-motion';
import { Code, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, Facebook } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setSubscriptionMessage('Please enter your email address.');
      return;
    }
    if (!email.includes('@')) {
      setSubscriptionMessage('Please enter a valid email address.');
      return;
    }
    setIsSubscribing(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Subscriber', email })
      });
      if (!res.ok) throw new Error('Request failed');
      setSubscriptionMessage(`Thank you for subscribing! We'll send updates to ${email}`);
      setEmail('');
    } catch {
      setSubscriptionMessage('Subscription failed. Please try again later or email us.');
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscriptionMessage(''), 3000);
    }
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Social media clicked: ${platform}`);
  };

  const footerLinks = {
    services: [
      { name: "Software Development", href: "#services" },
      { name: "AI & Machine Learning", href: "#services" },
      { name: "SaaS Platforms", href: "#services" },
      { name: "Mobile App Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Digital Marketing", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "FAQ", href: "/faq" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/RevlekOfficial", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/revlek-ltd-60761b390", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/revlek", label: "Instagram" },
    { icon: Github, href: "https://github.com/revlek", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com/revlek", label: "Facebook" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">REVELEK</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Building future's technology with innovative digital solutions, custom software, 
              and creative design services.
            </p>
            <div className="space-y-2">
              <div 
                className="flex items-center text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                onClick={() => router.push('/contact')}
              >
                <Mail className="w-4 h-4 mr-3 text-slate-400" />
                info.revlek@gmail.com
              </div>
              <div 
                className="flex items-center text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                onClick={() => router.push('/contact')}
              >
                <Phone className="w-4 h-4 mr-3 text-slate-400" />
                +8801334918293
              </div>
              <div 
                className="flex items-center text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                onClick={() => router.push('/contact')}
              >
                <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                Rajshahi, Rajshahi, Bangladesh
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold mb-4 text-slate-300">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold mb-4 text-slate-300">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold mb-4 text-slate-300">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup - Professional Design */}
        <motion.div
          className="mt-12 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-700/50">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-slate-400 mb-6 text-sm max-w-2xl mx-auto">
                Stay updated with the latest tech trends, industry insights, and exclusive offers. Join our community of innovators!
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 bg-slate-800/60 border border-slate-600 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm"
                />
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubscribe}
                  disabled={isSubscribing}
                >
                  {isSubscribing ? 'Subscribing...' : 'Stay Updated'}
                </motion.button>
              </div>
              
              {subscriptionMessage && (
                <p className={`text-sm mt-3 ${
                  subscriptionMessage.includes('Thank you') 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {subscriptionMessage}
                </p>
              )}
              
              <p className="text-slate-500 text-xs mt-3">
                No spam, unsubscribe anytime • Your data is secure
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-slate-500 mb-4 md:mb-0 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} REVELEK. All rights reserved.
            </motion.div>
            
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSocialClick(social.label)}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="text-center mt-3 text-slate-600 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Built by the REVELEK Team
          </motion.div>
        </div>
      </div>
    </footer>
  );
}