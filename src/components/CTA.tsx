'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: 'primary' | 'secondary' | 'gradient' | 'dark';
  showRating?: boolean;
}

export default function CTA({
  title = "Ready to Transform Your Business?",
  subtitle = "Let's discuss how we can bring your vision to life with our cutting-edge technology solutions.",
  primaryButtonText = "Get Started Today",
  secondaryButtonText = "Schedule a Call",
  variant = 'primary',
  showRating = false
}: CTAProps) {
  const router = useRouter();

  // Test function to verify component is loaded and buttons are clickable
  React.useEffect(() => {
    console.log('🚀 CTA Component loaded successfully');
    console.log('📍 Router available:', !!router);
    console.log('🎯 Primary button text:', primaryButtonText);
    console.log('📞 Secondary button text:', secondaryButtonText);
    
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const primaryButton = document.querySelector('a[href="/contact"]');
      const secondaryButton = document.querySelector('a[href="/book-a-call"]');
      console.log('🔍 Primary button found:', !!primaryButton);
      console.log('🔍 Secondary button found:', !!secondaryButton);
      if (primaryButton) {
        console.log('📋 Primary button classes:', primaryButton.className);
        console.log('🖱️ Primary button pointer events:', window.getComputedStyle(primaryButton).pointerEvents);
        console.log('📏 Primary button z-index:', window.getComputedStyle(primaryButton).zIndex);
        console.log('🎯 Primary button position:', window.getComputedStyle(primaryButton).position);
        
        // Add direct click listener for testing
        primaryButton.addEventListener('click', (e) => {
          console.log('🧪 DIRECT CLICK TEST - Primary button clicked!');
          console.log('Event:', e);
        });
      }
      if (secondaryButton) {
        console.log('📋 Secondary button classes:', secondaryButton.className);
        console.log('🖱️ Secondary button pointer events:', window.getComputedStyle(secondaryButton).pointerEvents);
        console.log('📏 Secondary button z-index:', window.getComputedStyle(secondaryButton).zIndex);
        console.log('🎯 Secondary button position:', window.getComputedStyle(secondaryButton).position);
        
        // Add direct click listener for testing
        secondaryButton.addEventListener('click', (e) => {
          console.log('🧪 DIRECT CLICK TEST - Secondary button clicked!');
          console.log('Event:', e);
        });
      }
      
      // Check for any overlay elements that might block clicks
      const overlayElements = document.elementsFromPoint(100, 100);
      console.log('🔍 Elements at button position:', overlayElements.length);
      overlayElements.forEach((el, index) => {
        console.log(`  ${index}: ${el.tagName}${el.id ? '#' + el.id : ''}${el.className ? '.' + el.className.split(' ').join('.') : ''}`);
      });
    }, 1000);
  }, [router, primaryButtonText, secondaryButtonText]);

  const handlePrimaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🎯 PRIMARY BUTTON CLICKED - navigating to /contact');
    console.log('Event target:', e.target);
    console.log('Event currentTarget:', e.currentTarget);
    console.log('Router available:', !!router);
    
    // Try multiple navigation methods
    try {
      router.push('/contact');
      console.log('✅ Router navigation successful');
    } catch (error) {
      console.error('❌ Router navigation failed, falling back to window.location:', error);
      window.location.href = '/contact';
    }
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🎯 SECONDARY BUTTON CLICKED - navigating to /book-a-call');
    console.log('Event target:', e.target);
    console.log('Event currentTarget:', e.currentTarget);
    console.log('Router available:', !!router);
    
    // Try multiple navigation methods
    try {
      router.push('/book-a-call');
      console.log('✅ Router navigation successful');
    } catch (error) {
      console.error('❌ Router navigation failed, falling back to window.location:', error);
      window.location.href = '/book-a-call';
    }
  };
  const getBackgroundClass = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900';
      case 'secondary':
        return 'bg-gradient-to-br from-slate-100 to-slate-200';
      case 'dark':
        return 'bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900';
      default:
        return 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900';
    }
  };

  const getTextClass = () => {
    switch (variant) {
      case 'gradient':
        return 'text-white';
      case 'secondary':
        return 'text-gray-900';
      case 'dark':
        return 'text-white';
      default:
        return 'text-revlek-dark';
    }
  };

  const getButtonClass = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200';
      case 'secondary':
        return 'bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200';
      case 'dark':
        return 'bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200';
    }
  };

  return (
    <motion.section
      className={`py-16 ${getBackgroundClass()} relative z-50 pointer-events-auto`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ zIndex: 9997 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {showRating && (
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className={`ml-3 ${getTextClass()} font-medium`}>
              4.9/5 from 50+ clients
            </span>
          </motion.div>
        )}

        <motion.h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${getTextClass()}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.p
          className={`text-sm sm:text-base mb-6 max-w-2xl mx-auto ${
            variant === 'gradient' ? 'text-slate-300' : variant === 'secondary' ? 'text-slate-600' : variant === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center relative z-50 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ zIndex: 9998 }}
        >
          <motion.a
            href="/contact"
            className={`${getButtonClass()} px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center relative z-50 cursor-pointer no-underline`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePrimaryClick}
            style={{ zIndex: 9999 }}
          >
            {primaryButtonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>

          {secondaryButtonText && (
            <motion.a
              href="/book-a-call"
              className={`border px-6 py-3 rounded-lg font-medium transition-all duration-200 relative z-50 cursor-pointer no-underline ${
                variant === 'gradient' 
                  ? 'border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white'
                  : variant === 'secondary'
                  ? 'border-slate-400 text-slate-600 hover:bg-slate-800 hover:text-white'
                  : variant === 'dark'
                  ? 'border-slate-400 text-slate-300 hover:bg-slate-700 hover:text-white'
                  : 'border-slate-400 text-slate-600 hover:bg-slate-800 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSecondaryClick}
              style={{ zIndex: 9999 }}
            >
              {secondaryButtonText}
            </motion.a>
          )}
        </motion.div>

        {/* Trust Indicators */}
        {showRating && (
          <motion.div
            className="mt-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.75 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className={variant === 'gradient' || variant === 'dark' ? 'text-slate-200' : 'text-slate-500'}>
              Free consultation • No obligation • 100% satisfaction guarantee
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}