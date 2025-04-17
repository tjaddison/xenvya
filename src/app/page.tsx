'use client';

import Link from "next/link";
import ContactForm from "./components/ContactForm";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
          
          <button 
            className="md:hidden text-2xl" 
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg z-50 p-4 md:hidden border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#solutions" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Solutions
              </a>
              <a 
                href="#approach" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Our Approach
              </a>
              <a 
                href="#values" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Values
              </a>
              <a 
                href="#contact" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
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
          At Xenvya, we build exceptional AI and software solutions that help your business grow. We're passionate about turning complex challenges into elegant, effective products.
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

      {/* Approach Section */}
      <section id="approach" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 relative">
        <div className="absolute left-0 top-1/4 opacity-5 dark:opacity-10 hidden sm:block">
          <svg width="200" height="200" viewBox="0 0 100 100">
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50 30 L70 40 L70 60 L50 70 L30 60 L30 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Our Approach</h2>
          <div className="max-w-4xl mx-auto">
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
                    Whether building domain-specific SaaS and AI solutions or revitalizing acquired software, our efficiency-focused approach means you'll see tangible results and business impact in months, not years.
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
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute opacity-5 dark:opacity-10 left-0 bottom-0">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <circle cx="20" cy="50" r="10" fill="none" stroke="currentColor" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" />
            <circle cx="80" cy="50" r="20" fill="none" stroke="currentColor" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3V7C14 7.55 14.45 8 15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 21H7C5.9 21 5 20.1 5 19V5C5 3.9 5.9 3 7 3H14L19 8V19C19 20.1 18.1 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 7H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to exceptional code quality and thoughtful architecture. Our engineers take pride in creating solutions that stand the test of time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer-Focused Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're dedicated to creating solutions that genuinely address your business needs, with a focus on driving real, measurable value.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Operational Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in clear communication and visibility throughout our relationship. What you see is what you get—and what you get is exceptional.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 12L12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're focused on long-term success rather than quick fixes. Our approach prioritizes stable, continuous improvement that delivers lasting results.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13C3 15.09 3.79 17.11 5.3 18.62C6.8 20.13 8.83 20.92 10.92 20.92C13.01 20.92 15.04 20.13 16.55 18.62C18.05 17.11 18.85 15.09 18.85 13C18.85 10.91 18.05 8.89 16.55 7.38C15.04 5.87 13.01 5.08 10.92 5.08C8.83 5.08 6.8 5.87 5.3 7.38C3.79 8.89 3 10.91 3 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 13L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 10L22 13L19 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're never satisfied with "good enough." Our team constantly refines our products and processes to deliver increasing value over time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-sm text-white">
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12L12 16L16 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Partner With Us</h3>
              <p className="mb-4">
                Ready to transform your business with innovative software and AI solutions? Let's start the conversation.
              </p>
              <a href="#contact" className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute right-0 bottom-1/3 opacity-5 dark:opacity-10">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke="currentColor" />
            <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" />
            <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" />
            <line x1="40" y1="20" x2="40" y2="80" stroke="currentColor" />
            <line x1="60" y1="20" x2="60" y2="80" stroke="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Technology Approach</h2>
          <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            We believe in using the right tool for each unique challenge—not forcing solutions to fit rigid technology choices
          </p>

          <div className="flex flex-col items-center bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl text-white mb-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                  <pattern id="tech-dots" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tech-dots)" />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 12H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="text-2xl font-bold mb-3">Technology Agnostic</h3>
              <p className="max-w-2xl mx-auto mb-6">
                We're not tied to specific frameworks, languages, or platforms. Instead, we evaluate each project's unique requirements and select the optimal technology stack that delivers the best results for your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">React</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">Vue</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">Angular</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">Node.js</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">Python</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">Go</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">PostgreSQL</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">MongoDB</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">AWS</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">Azure</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">TensorFlow</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">PyTorch</span>
                <span className="bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">...and many more</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40286 21.3658 4.87582 20.24 3.75004C19.1142 2.62426 17.5871 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62426 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Tailored Selection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We carefully select the technologies that best fit your specific project requirements, business constraints, and long-term goals.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Best-in-Class Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We draw from a vast ecosystem of technologies and expertly combine them into cohesive, powerful solutions that maximize efficiency and capabilities.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Continuous Evolution</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly evaluate emerging technologies and evolve our toolkit to ensure your solutions leverage the most effective, secure, and future-proof technologies available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute opacity-5 dark:opacity-10 top-0 right-0">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" />
            <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 md:p-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
                  <p className="mb-8">
                    Let's talk about how Xenvya's innovative solutions can help your organization thrive in today's competitive landscape.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-bold">Email</p>
                        <p>contact@xenvya.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-bold">Location</p>
                        <p>Virtual company with global capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div>
                        <p className="font-bold">Response Time</p>
                        <p>We respond to all inquiries within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10 md:p-16">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <ContactForm />
              </div>
            </div>
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
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Our Approach</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Core Values</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
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
                      <path d="M22 4.01C21 4.5 20.02 4.69 19 5C17.879 3.735 16.217 3.665 14.62 4.263C13.023 4.861 12.006 6.13 12 7.7V8.7C8.755 8.818 5.865 7.4 4 5C4 5 -0.182 12.433 8 16C6.128 17.247 4.261 18.088 2 18C5.308 19.803 8.913 20.423 12.034 19.517C15.614 18.477 18.556 15.794 19.685 11.775C20.0218 10.4166 20.1579 9.01659 20.088 7.62C20.088 7.25 21.692 5.389 22 4.009V4.01Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M9 19C4.7 20.4 4.7 16.5 3 16L9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 19C4.7 20.4 4.7 16.5 3 16L9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 22V18C15.1391 16.7473 14.7745 15.4901 14 14.5C17 14.5 20 13 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 17.5 1.5 14.5 3.5C12.36 3.02 10.14 3.02 8 3.5C5 1.5 3.5 2 3.5 2C3.22 3.15 3.22 4.35 3.5 5.5C2.77 6.52 2.42 7.75 2.5 9C2.5 13 5.5 14.5 8.5 14.5C8.1 14.95 7.8 15.5 7.6 16.1C7.4 16.7 7.3 17.35 7.5 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.99999 3H8.99999C7.04999 8.84 7.04999 15.16 8.99999 21H7.99999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Medium
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