export const metadata: Metadata = {
  title: 'REVELEK - Digital Innovation & Software Development',
  description: 'Transform your business with cutting-edge software solutions, AI innovation, and modern technology. Trusted by 150+ companies worldwide.',
  keywords: 'software development, AI solutions, web development, mobile apps, SaaS platforms, digital transformation, custom software',
  openGraph: {
    title: 'REVELEK - Digital Innovation & Software Development',
    description: 'Transform your business with cutting-edge software solutions, AI innovation, and modern technology.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REVELEK - Digital Innovation & Software Development',
    description: 'Transform your business with cutting-edge software solutions, AI innovation, and modern technology.',
  },
};

import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <TestimonialsCarousel />
      <TechStack />
      <CTA
        title="Ready to Start Your Digital Journey?"
        subtitle="Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions."
        primaryButtonText="Get Free Quote"
        secondaryButtonText="View Case Studies"
        variant="dark"
        showRating={false}
      />
      <Contact />
      <Footer />
    </main>
  );
}