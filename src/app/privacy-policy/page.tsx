import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Revlek',
  description: 'Learn how Revlek collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and user privacy.',
  keywords: 'privacy policy, data protection, personal information, Revlek privacy, GDPR, data security',
  openGraph: {
    title: 'Privacy Policy - Revlek',
    description: 'Learn about Revlek\'s commitment to protecting your personal information and data security.',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300">
              Last updated: November 15, 2025
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Information We Collect</h2>
              <p className="text-slate-300 mb-4">
                We collect information you provide directly to us, such as when you contact us, subscribe to our newsletter, 
                or use our services. This may include your name, email address, phone number, and any other information 
                you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. How We Use Your Information</h2>
              <p className="text-slate-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Information Sharing</h2>
              <p className="text-slate-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Data Security</h2>
              <p className="text-slate-300 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Your Rights</h2>
              <p className="text-slate-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Contact Us</h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-slate-300">
                <p>Email: info.revlek@gmail.com</p>
                <p>Phone: +8801334918293</p>
                <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </section>
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
  )
}