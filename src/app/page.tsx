'use client';

import Link from "next/link";
import ContactForm from "./components/ContactForm";
import { useState } from "react";

export default function Home() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Removed as unused

  // Removed unused functions toggleMobileMenu and closeMobileMenu

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="p-4 sm:p-6 flex flex-wrap justify-between items-center relative">
        <div className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 sm:w-10 sm:h-10">
            <path d="M60 10L110 40V80L60 110L10 80V40L60 10Z" fill="url(#paint0_linear)" />
            <path d="M60 10L110 40V80L60 110L10 80V40L60 10Z" stroke="currentColor" strokeWidth="2" />
            <path d="M37 55L60 65L83 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M60 65V90" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear" x1="60" y1="10" x2="60" y2="110" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="text-xl sm:text-2xl font-bold">XENVYA</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#solutions" className="hover:underline text-sm lg:text-base">Solutions</a>
            <a href="#approach" className="hover:underline text-sm lg:text-base">Our Approach</a>
            <a href="#values" className="hover:underline text-sm lg:text-base">Values</a>
            <a href="#contact" className="hover:underline text-sm lg:text-base">Contact Us</a>
          </nav>
          
          <Link href="/login" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap">
            Login
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 text-center relative">
        <div className="absolute opacity-10 dark:opacity-5 top-0 left-0 w-full h-full overflow-hidden">
          <svg width="300" height="300" viewBox="0 0 100 100" className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg width="200" height="200" viewBox="0 0 100 100" className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 hidden sm:block">
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="40" y="40" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 max-w-4xl relative z-10 px-2">
          Transforming Business Through Innovative Software
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-6 sm:mb-8 md:mb-10 text-gray-600 dark:text-gray-300 relative z-10 px-2">
          At Xenvya, we build exceptional AI and software solutions that help your business grow. We&apos;re passionate about turning complex challenges into elegant, effective products.
        </p>
        <div className="flex justify-center relative z-10 w-full px-4 sm:px-0 mt-4 sm:mt-6">
          <a href="#contact" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-purple-600 text-white hover:bg-purple-700 font-medium text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 shadow-lg hover:shadow-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 sm:w-6 sm:h-6">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Connect With Us
          </a>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute opacity-5 dark:opacity-10 right-0 top-0 hidden sm:block">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Our Solutions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">SaaS Product Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  We partner with businesses to build custom SaaS and AI agentic products tailored to their domain expertise, creating new revenue streams and expanding their market reach.
                </p>
                <Link href="/services/saas-product-development" className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center text-sm font-medium">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1 sm:w-4 sm:h-4">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Software Acquisition</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  We identify valuable software assets, enhance their capabilities, and optimize them to create premium solutions for your business challenges. We breathe new life into existing platforms, modernizing features and improving performance.
                </p>
                <Link href="/services/software-acquisition" className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center text-sm font-medium">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1 sm:w-4 sm:h-4">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Xenvya Section */}
      <section id="approach" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6">
            Why Choose Xenvya?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-center">
            Xenvya stands apart with our dual-focus approach that combines SaaS product development with strategic software acquisition. We don&apos;t just deliver software—we create lasting value through solutions that evolve with your business needs.
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">A Unique Business Model That Delivers Results</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-center">
              Xenvya stands apart with our dual-focus approach that combines SaaS product development with strategic software acquisition. We don't just deliver software—we create lasting value through solutions that evolve with your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-purple-700 dark:text-purple-400 flex items-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-lg">ROI-Focused Solutions</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Our custom SaaS platforms, AI agentic products, and enhanced software assets are designed with clear business outcomes in mind—creating new revenue streams, reducing operational costs, and increasing competitive advantage.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-700 dark:text-green-400 flex items-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm sm:text-lg">Proven Methodology</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Our approach combines technical expertise with business acumen, leveraging battle-tested processes that have consistently delivered exceptional software with predictable outcomes and minimized risk.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blue-700 dark:text-blue-400 flex items-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm sm:text-lg">Rapid Value Creation</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Whether building domain-specific SaaS and AI solutions or revitalizing acquired software, our efficiency-focused approach means you&apos;ll see tangible results and business impact in months, not years.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-amber-700 dark:text-amber-400 flex items-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-sm sm:text-lg">Evolution-Ready Technology</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Our technical architecture and flexible licensing models are designed to evolve with your business, ensuring that your investment continues to deliver value as markets change and technologies advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="values" className="py-16 sm:py-20 md:py-24 px-4 text-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define how we collaborate with clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize clean code, robust architecture, and industry best practices in every project, ensuring our solutions are maintainable, scalable, and future-proof.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer-Focused Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our innovation is always purpose-driven, focused on solving real challenges for our clients. We balance cutting-edge technology with practical solutions that deliver measurable business value.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re committed to building businesses that last. Our strategies and solutions are designed for long-term success, not just quick wins, creating enduring value for all stakeholders.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace a culture of ongoing learning and refinement. By constantly evaluating our processes, technologies, and outcomes, we ensure our solutions evolve and improve with changing markets and technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Client-Centered</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We put our clients at the center of everything we do, deeply understanding their needs and focusing on their long-term success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-sm text-white">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Partner With Us</h3>
              <p className="mb-4">
                Ready to transform your business with innovative software and AI solutions? Let&apos;s start the conversation.
              </p>
              <a href="#contact" className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-8 sm:p-10 md:p-12 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Let&apos;s talk about how Xenvya&apos;s innovative solutions can help your organization thrive. Fill out the form below to get started.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M60 10L110 40V80L60 110L10 80V40L60 10Z" fill="url(#paint0_linear_footer)" />
                  <path d="M60 10L110 40V80L60 110L10 80V40L60 10Z" stroke="white" strokeWidth="2" />
                  <path d="M37 55L60 65L83 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M60 65V90" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear_footer" x1="60" y1="10" x2="60" y2="110" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4F46E5" />
                      <stop offset="1" stopColor="#9333EA" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="text-2xl font-bold">XENVYA</h2>
              </div>
              <p className="text-gray-400">
                Innovative software and AI solutions that drive business growth and create remarkable customer experiences.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="/services/saas-product-development" className="text-gray-400 hover:text-white">SaaS Product Development</Link></li>
                <li><Link href="/services/software-acquisition" className="text-gray-400 hover:text-white">Software Acquisition</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><a href="#approach" className="text-gray-400 hover:text-white">Our Approach</a></li>
                <li><a href="#values" className="text-gray-400 hover:text-white">Core Values</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Xenvya Consulting LLC. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}