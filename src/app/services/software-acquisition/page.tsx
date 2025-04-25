import Link from "next/link";

export default function SoftwareAcquisition() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Navigation */}
      <header className="p-4 sm:p-6 flex flex-wrap justify-between items-center relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
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
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {/* Solutions dropdown menu */}
            <div className="relative group">
              <button className="hover:underline text-sm lg:text-base flex items-center">
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/services/saas-product-development" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  SaaS Product Development
                </Link>
                <Link href="/services/software-acquisition" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Software Acquisition
                </Link>
              </div>
            </div>
            
            <Link href="/#approach" className="hover:underline text-sm lg:text-base">Our Approach</Link>
            <Link href="/#values" className="hover:underline text-sm lg:text-base">Values</Link>
            <Link href="/#contact" className="hover:underline text-sm lg:text-base">Contact Us</Link>
          </nav>
          
          <Link href="/login" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap">
            Login
          </Link>
        </div>
      </header>

      {/* Hero Section - Minimalist */}
      <section className="py-16 sm:py-20 md:py-24 px-6 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
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
          <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg text-lg">
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
              <Link href="/#contact" className="inline-block bg-white text-purple-600 py-3 px-8 rounded-lg transition-colors font-medium text-center hover:bg-gray-100">
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
          <Link href="/#contact" className="inline-flex items-center justify-center bg-white text-purple-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
            Start the Conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
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
                Innovative software solutions that drive business growth and create remarkable customer experiences.
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
                <li><Link href="/#approach" className="text-gray-400 hover:text-white">Our Approach</Link></li>
                <li><Link href="/#values" className="text-gray-400 hover:text-white">Core Values</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
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
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}