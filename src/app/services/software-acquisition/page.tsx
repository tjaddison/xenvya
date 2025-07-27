'use client';

import Link from "next/link";
import usePageViewTimer from '../../hooks/usePageViewTimer';

export default function SoftwareAcquisition() {
  usePageViewTimer();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">

      {/* Hero Section - Minimalist */}
      <section className="py-16 sm:py-20 md:py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Software Acquisition & Revitalization
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            We find undervalued software assets, transform them with modern technology, and scale them to their full market potential.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium px-4 py-2 rounded-full">Strategic Acquisition</span>
            <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium px-4 py-2 rounded-full">Value Enhancement</span>
            <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium px-4 py-2 rounded-full">Platform Revitalization</span>
          </div>
          <Link href="/discovery-call" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg text-lg">
            Discover Opportunities
          </Link>
        </div>
      </section>

      {/* Main Content - Minimalist */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Our Approach */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-0">
                We apply real estate investment principles to software: find promising assets, renovate with modern features, and position them for maximum market value.
              </p>
            </div>

            {/* Acquisition Process - KEEPING AS IS */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Our Acquisition Process</h3>

              <div className="mb-10 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                    <h4 className="text-lg font-bold mb-2">Identify</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      We discover promising software assets with untapped potential and strong fundamentals.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                    <h4 className="text-lg font-bold mb-2">Enhance</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      We modernize technology, improve UX, and add valuable new capabilities.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                    <h4 className="text-lg font-bold mb-2">Scale</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      We optimize go-to-market strategy and expand the customer base.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Key Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-3">Technical Modernization</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We transform legacy codebases into modern, maintainable, and scalable architectures while preserving core business value.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-3">UX Transformation</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We redesign outdated interfaces into intuitive, responsive experiences that meet modern user expectations.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-3">Cloud Migration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We move on-premise solutions to cloud infrastructure, enabling scalability, reliability, and modern deployment practices.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-3">SaaS Conversion</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We transform traditional software into subscription-based SaaS platforms with multi-tenant architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* For Sellers */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">For Software Owners</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                If you&apos;ve built valuable software and are considering strategic options, we offer fair valuations and smooth transitions.
              </p>
              <Link href="/discovery-call" className="inline-block bg-white text-purple-600 py-3 px-8 rounded-lg transition-colors font-medium text-center hover:bg-gray-100">
                Explore Acquisition Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Minimalist */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What types of software do you acquire?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on B2B software with established market presence, particularly in enterprise productivity, business intelligence, and vertical-specific solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What is your typical acquisition range?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our investments typically range from $1.5M to $7M, depending on revenue, customer base, market potential, and technical condition.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you handle existing customers?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize service continuity with clear communication and enhanced support during transition, ensuring a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Unlock Hidden Potential in Software Assets</h2>
          <Link href="/discovery-call" className="inline-flex items-center justify-center bg-white text-purple-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}