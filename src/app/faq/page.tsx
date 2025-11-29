'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Head from 'next/head'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What services does REVELEK offer?",
    answer: "REVELEK specializes in custom software development, web applications, mobile apps, cloud solutions, AI/ML integration, and digital transformation consulting. We help businesses modernize their technology stack and build scalable digital solutions."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Simple websites typically take 4-6 weeks, while complex enterprise applications may take 3-6 months or longer. We provide detailed timelines during our initial consultation."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology with regular sprints and client feedback. Our process includes discovery, planning, design, development, testing, deployment, and ongoing maintenance phases."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. This includes bug fixes, security updates, and feature enhancements."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with modern technologies including React, Next.js, Vue.js, Node.js, Python, Django, AWS, Google Cloud, Docker, Kubernetes, and various databases. We choose the best tech stack for your specific needs."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We maintain high quality standards through code reviews, automated testing, continuous integration/deployment, and regular client feedback. All projects go through rigorous testing before deployment."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. We provide transparent quotes based on project requirements and scope."
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely! We have extensive experience integrating with existing systems, legacy applications, and third-party services. We can help modernize your current infrastructure while maintaining business continuity."
  },
  {
    question: "Do you provide documentation and training?",
    answer: "Yes, we provide comprehensive documentation for all our solutions, including technical documentation, user guides, and API documentation. We also offer training sessions for your team."
  },
  {
    question: "How do I get started with REVELEK?",
    answer: "Getting started is easy! Simply contact us through our website, book a consultation call, or send us an email. We'll schedule a discovery call to understand your needs and provide a tailored proposal."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <>
      <Head>
        <title>FAQ - REVELEK | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about REVELEK's services, development process, pricing, and more." />
        <meta name="keywords" content="REVELEK FAQ, software development questions, AI solutions FAQ, web development, mobile apps" />
        <meta property="og:title" content="FAQ - REVELEK | Frequently Asked Questions" />
        <meta property="og:description" content="Find answers to common questions about REVELEK's services, development process, pricing, and more." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ - REVELEK | Frequently Asked Questions" />
        <meta name="twitter:description" content="Find answers to common questions about REVELEK's services, development process, pricing, and more." />
        <link rel="canonical" href="https://revlek.com/faq" />
      </Head>
      <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300">
              Get answers to common questions about our services and process
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Still have questions?
              </h2>
              <p className="text-slate-300 mb-6">
                Don't hesitate to reach out. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info.revlek@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  Contact Us
                </a>
                <Link 
                  href="/book-a-call"
                  className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}