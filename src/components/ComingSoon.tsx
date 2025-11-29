'use client';

import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function ComingSoonPage({ title = "Page" }: { title?: string }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title} - Coming Soon | Revlek</title>
        <meta name="description" content={`The ${title.toLowerCase()} page is coming soon. Contact Revlek for software development, AI solutions, and digital transformation services.`} />
        <meta name="keywords" content={`${title.toLowerCase()}, revlek, software development, AI solutions, coming soon`} />
        <meta property="og:title" content={`${title} - Coming Soon | Revlek`} />
        <meta property="og:description" content={`The ${title.toLowerCase()} page is coming soon. Contact Revlek for software development, AI solutions, and digital transformation services.`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} - Coming Soon | Revlek`} />
        <meta name="twitter:description" content={`The ${title.toLowerCase()} page is coming soon. Contact Revlek for software development, AI solutions, and digital transformation services.`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-2xl mx-auto px-4"
      >
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
          <Construction className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {title} Coming Soon
        </h1>
        
        <p className="text-xl text-slate-300 leading-relaxed">
          We're working hard to bring you this page. In the meantime, please explore our other sections or contact us directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </motion.button>
          
          <motion.button
            className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-800 hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/contact')}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </div>
    </>
  );
}