import Link from "next/link";

export default function SoftwareAcquisition() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Navigation */}
      <header className="p-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
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
            <h1 className="text-2xl font-bold">XENVYA</h1>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/#solutions" className="hover:underline">Solutions</Link>
          <Link href="/#approach" className="hover:underline">Our Approach</Link>
          <Link href="/#values" className="hover:underline">Values</Link>
          <Link href="/#contact" className="hover:underline">Contact Us</Link>
        </nav>
        <Link href="/#contact" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm px-5 py-2">
          Get Started
        </Link>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-4 inline-block">
                <Link href="/" className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Acquisition & Enhancement</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Identifying, acquiring, and transforming valuable software assets into powerful business solutions with enhanced capabilities.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">Strategic Acquisition</span>
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">Value Enhancement</span>
                <span className="px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium">Market Repositioning</span>
              </div>
              <Link href="/#contact" className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                Discover Opportunities
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl transform rotate-3 blur-sm"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="relative">
                      <svg viewBox="0 0 200 200" className="w-48 h-48">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#6366F1" />
                          </linearGradient>
                        </defs>
                        <circle cx="100" cy="100" r="80" fill="url(#gradient)" />
                        <path d="M100 55V145" stroke="white" strokeWidth="8" strokeLinecap="round" />
                        <path d="M55 100H145" stroke="white" strokeWidth="8" strokeLinecap="round" />
                        <path d="M135 65L65 135" stroke="white" strokeWidth="8" strokeLinecap="round" />
                        <path d="M65 65L135 135" stroke="white" strokeWidth="8" strokeLinecap="round" />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">ACQUIRE</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">1</div>
                      <div className="flex-1 h-1 bg-purple-100 dark:bg-purple-900/30 rounded-full"></div>
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">2</div>
                      <div className="flex-1 h-1 bg-purple-100 dark:bg-purple-900/30 rounded-full"></div>
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">3</div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>Identify</span>
                      <span>Enhance</span>
                      <span>Scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Strategic Software Acquisition & Enhancement</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Xenvya applies a unique approach to software acquisition, identifying undervalued or underutilized software assets with strong potential. We evaluate, acquire, and transform these products into high-value solutions that address specific market needs.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our acquisition strategy parallels successful real estate investment principles: we find promising software "properties," renovate and modernize them with enhanced features and technology, and then position them optimally in the market to maximize their value and utility.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Acquisition Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-lg">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Target Identification</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We use proprietary methodologies to identify software assets with untapped potential. Our team evaluates products that have strong technical foundations but may lack marketing reach, modern features, or strategic direction.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Comprehensive Due Diligence</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our expert team conducts thorough technical, market, and financial evaluations. We assess code quality, architecture, scalability potential, security posture, user experience, market positioning, competitive landscape, and growth opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Strategic Acquisition</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We structure and execute acquisition deals that create value for all parties. Our approach ensures smooth transitions with clear communication and planning for customers, employees, and stakeholders.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-lg">4</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Enhancement & Transformation</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our engineering teams modernize and enhance the software through code refactoring, architecture optimization, cloud migration, new feature development, and UI/UX improvements. We often integrate AI capabilities to substantially increase the solution's value.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-lg">5</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Market Repositioning</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We develop fresh branding, marketing, and sales strategies to properly position the enhanced product in the market. This includes creating compelling value propositions, targeted messaging, and effective go-to-market plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Value Creation Strategy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 8H21M17.5 4.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Technical Modernization</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We revitalize codebases, migrate to modern architectures, implement security best practices, and integrate advanced technologies to significantly enhance product capabilities.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">UX Transformation</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our design experts reimagine user interfaces and experiences, creating intuitive, modern, and delightful interactions that increase user adoption and satisfaction.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none">
                        <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Market Expansion</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We identify new market opportunities and adapt products to serve additional verticals, regions, or customer segments, significantly expanding the addressable market.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C14.5 22 16.5 17.5228 16.5 12C16.5 6.47715 14.5 2 12 2C9.5 2 7.5 6.47715 7.5 12C7.5 17.5228 9.5 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Business Model Innovation</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We transform traditional licensing models into modern subscription services, creating recurring revenue streams and enhancing customer lifetime value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Acquisition Criteria</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none">
                        <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Established Market Presence</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Software with 5+ years in market and a stable customer base of 20+ enterprise or 100+ mid-market clients.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none">
                        <path d="M6 10.5C7.38071 10.5 8.5 9.38071 8.5 8C8.5 6.61929 7.38071 5.5 6 5.5C4.61929 5.5 3.5 6.61929 3.5 8C3.5 9.38071 4.61929 10.5 6 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 10.5C19.3807 10.5 20.5 9.38071 20.5 8C20.5 6.61929 19.3807 5.5 18 5.5C16.6193 5.5 15.5 6.61929 15.5 8C15.5 9.38071 16.6193 10.5 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 18.5C7.38071 18.5 8.5 17.3807 8.5 16C8.5 14.6193 7.38071 13.5 6 13.5C4.61929 13.5 3.5 14.6193 3.5 16C3.5 17.3807 4.61929 18.5 6 18.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 18.5C19.3807 18.5 20.5 17.3807 20.5 16C20.5 14.6193 19.3807 13.5 18 13.5C16.6193 13.5 15.5 14.6193 15.5 16C15.5 17.3807 16.6193 18.5 18 18.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.5 8H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.5 16H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 10.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 10.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Solid Technical Foundation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Well-architected software with manageable technical debt and clear modernization pathways.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Revenue Potential</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Current annual revenue between $1M-$10M with clear paths to 2-3x growth through enhancement.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none">
                        <path d="M8.56 2.5C7.35 4.68 7 9.96 7 12C7 14.04 7.35 19.32 8.56 21.5M15.44 2.5C16.65 4.68 17 9.96 17 12C17 14.04 16.65 19.32 15.44 21.5M21.5 8.56C19.32 7.35 14.04 7 12 7C9.96 7 4.68 7.35 2.5 8.56M21.5 15.44C19.32 16.65 14.04 17 12 17C9.96 17 4.68 16.65 2.5 15.44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Strong Niche Position</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Products with competitive advantages in specific niches but limited growth due to resource constraints.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">Enhancement Capabilities</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 6.25278V19.2528M12 6.25278C10.8321 6.25278 9.66867 6.48469 8.57538 6.93498C7.48208 7.38527 6.47812 8.04434 5.61351 8.87457C4.7489 9.70479 4.0384 10.6642 3.546 11.7118C3.05359 12.7593 2.79089 13.8851 2.77539 15.0272M12 6.25278C13.1679 6.25278 14.3313 6.48469 15.4246 6.93498C16.5179 7.38527 17.5219 8.04434 18.3865 8.87457C19.2511 9.70479 19.9616 10.6642 20.454 11.7118C20.9464 12.7593 21.2091 13.8851 21.2246 15.0272M21.2246 15.0272L18.2589 16.4887M21.2246 15.0272L18.2589 13.5656M2.77539 15.0272L5.74114 16.4887M2.77539 15.0272L5.74114 13.5656" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Cloud Migration & Modernization</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Converting legacy architectures to modern cloud-native designs.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.7273 14.7273C18.6063 15.0909 18.6273 15.4727 18.7891 15.8182C18.9509 16.1636 19.2418 16.4545 19.6073 16.6164L19.8582 16.7273C20.1658 16.8646 20.4168 17.0776 20.5864 17.3418C20.756 17.6061 20.8369 17.9113 20.8191 18.2182C20.8014 18.5252 20.6858 18.8201 20.4848 19.0673C20.2837 19.3146 20.0069 19.5042 19.6873 19.6127C19.3676 19.7212 19.0239 19.7439 18.6927 19.6781C18.3616 19.6123 18.0565 19.4605 17.8127 19.2409L17.6509 19.1C17.3068 18.7928 16.8614 18.6164 16.4073 18.6164C15.9532 18.6164 15.5079 18.7928 15.1637 19.1C14.8164 19.3682 14.5828 19.7409 14.4982 20.1536C14.4136 20.5664 14.4818 20.9955 14.6946 21.3582C14.9073 21.7209 15.2514 22 15.6637 22.1509L15.7746 22.1927C16.1348 22.3146 16.4514 22.5301 16.6925 22.8155C16.9335 23.1009 17.0889 23.4449 17.1412 23.8082H17.9055C17.9578 23.4449 18.1132 23.1009 18.3542 22.8155C18.5952 22.5301 18.9119 22.3146 19.2721 22.1927L19.3829 22.1509C19.7953 22 20.1393 21.7209 20.3521 21.3582C20.5649 20.9955 20.6331 20.5664 20.5485 20.1536C20.4639 19.7409 20.2303 19.3682 19.8829 19.1C19.5387 18.7928 19.0934 18.6164 18.6393 18.6164C18.1851 18.6164 17.7398 18.7928 17.3957 19.1L17.2339 19.2409C16.99 19.4605 16.685 19.6123 16.3538 19.6781C16.0227 19.7439 15.6789 19.7212 15.3593 19.6127C15.0397 19.5042 14.7629 19.3146 14.5618 19.0673C14.3608 18.8201 14.2452 18.5252 14.2275 18.2182C14.2097 17.9113 14.2906 17.6061 14.4602 17.3418C14.6298 17.0776 14.8807 16.8646 15.1884 16.7273L15.4393 16.6164C15.8048 16.4545 16.0957 16.1636 16.2575 15.8182C16.4193 15.4727 16.4402 15.0909 16.3193 14.7273C16.1983 14.3636 15.9439 14.0546 15.5984 13.8564C15.2529 13.6582 14.8466 13.5818 14.4502 13.6409L14.2702 13.6682C13.9287 13.7106 13.5822 13.6505 13.2743 13.4955C12.9664 13.3404 12.7119 13.098 12.5439 12.7982C12.3758 12.4984 12.3019 12.1552 12.331 11.8133C12.3601 11.4714 12.4909 11.1464 12.7073 10.8818C13.0166 10.5243 13.1875 10.0784 13.1875 9.61818C13.1875 9.15798 13.0166 8.71206 12.7073 8.35455C12.4909 8.08989 12.3601 7.76492 12.331 7.42303C12.3019 7.08115 12.3758 6.73791 12.5439 6.43813C12.7119 6.13834 12.9664 5.89596 13.2743 5.74088C13.5822 5.58581 13.9287 5.52575 14.2702 5.56818L14.4502 5.59545C14.8466 5.65465 15.2529 5.57824 15.5984 5.38005C15.9439 5.18186 16.1983 4.87284 16.3193 4.50909C16.4402 4.14545 16.4193 3.76363 16.2575 3.41818C16.0957 3.07273 15.8048 2.78182 15.4393 2.61982L15.1884 2.50909C14.8807 2.37183 14.6298 2.15878 14.4602 1.89457C14.2906 1.63035 14.2097 1.32507 14.2275 1.01818C14.2452 0.711288 14.3608 0.416385 14.5618 0.169144C14.7629 -0.0780971 15.0397 -0.267703 15.3593 -0.376182C15.6789 -0.484662 16.0227 -0.507353 16.3538 -0.441547C16.685 -0.375741 16.99 -0.22393 17.2339 -0.00435764L17.3957 0.136365C17.7398 0.44355 18.1851 0.620001 18.6393 0.620001C19.0934 0.620001 19.5387 0.44355 19.8829 0.136365C20.2303 -0.13177 20.4639 -0.504538 20.5485 -0.91731C20.6331 -1.33008 20.5649 -1.75918 20.3521 -2.12192C20.1393 -2.48466 19.7953 -2.76374 19.3829 -2.91455L19.2721 -2.95637C18.9119 -3.07828 18.5952 -3.29385 18.3542 -3.57924C18.1132 -3.86463 17.9578 -4.20857 17.9055 -4.57183H17.1412C17.0889 -4.20857 16.9335 -3.86463 16.6925 -3.57924C16.4514 -3.29385 16.1348 -3.07828 15.7746 -2.95637L15.6637 -2.91455C15.2514 -2.76374 14.9073 -2.48466 14.6946 -2.12192C14.4818 -1.75918 14.4136 -1.33008 14.4982 -0.91731C14.5828 -0.504538 14.8164 -0.13177 15.1637 0.136365C15.5079 0.44355 15.9532 0.620001 16.4073 0.620001C16.8614 0.620001 17.3068 0.44355 17.6509 0.136365L17.8127 -0.00435764C18.0565 -0.22393 18.3616 -0.375741 18.6927 -0.441547C19.0239 -0.507353 19.3676 -0.484662 19.6873 -0.376182C20.0069 -0.267703 20.2837 -0.0780971 20.4848 0.169144C20.6858 0.416385 20.8014 0.711288 20.8191 1.01818C20.8369 1.32507 20.756 1.63035 20.5864 1.89457C20.4168 2.15878 20.1658 2.37183 19.8582 2.50909L19.6073 2.61982C19.2418 2.78182 18.9509 3.07273 18.7891 3.41818C18.6273 3.76363 18.6063 4.14545 18.7273 4.50909M18.7273 14.7273C18.4737 14.127 18.4737 13.4457 18.7273 12.8455M18.7273 14.7273C19.1089 15.7325 20.0225 16.4178 21.0982 16.4727M18.7273 12.8455C18.9809 12.2452 19.4697 11.7812 20.0837 11.5595C20.6978 11.3379 21.3737 11.3759 21.9564 11.6655M18.7273 12.8455C18.9809 13.4457 19.4697 13.9096 20.0837 14.1313C20.6978 14.353 21.3737 14.315 21.9564 14.0254M3 17.25L3 21M3 21H6.75M3 21L8.25 15.75M21 6.75L21 3M21 3H17.25M21 3L15.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">AI & ML Integration</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Embedding advanced intelligence capabilities into existing products.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12V15C3 16.6569 7.02944 18 12 18C16.9706 18 21 16.6569 21 15V12M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12M3 12C3 10.3431 7.02944 9 12 9C16.9706 9 21 10.3431 21 12M21 8C21 9.65685 16.9706 11 12 11C7.02944 11 3 9.65685 3 8C3 6.34315 7.02944 5 12 5C16.9706 5 21 6.34315 21 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 16L3 20C3 21.6569 7.02944 23 12 23C16.9706 23 21 21.6569 21 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Multi-Tenant Conversion</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Transforming single-tenant products into efficient SaaS platforms.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5H9C7.67392 5 6.40215 5.52678 5.46447 6.46447C4.52678 7.40215 4 8.67392 4 10C4 11.3261 4.52678 12.5979 5.46447 13.5355C6.40215 14.4732 7.67392 15 9 15H12M12 5H15C16.3261 5 17.5979 5.52678 18.5355 6.46447C19.4732 7.40215 20 8.67392 20 10C20 11.3261 19.4732 12.5979 18.5355 13.5355C17.5979 14.4732 16.3261 15 15 15H12M12 5V15M8 19L12 15M12 15L16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">API Development & Integration</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Creating robust APIs for connectivity with modern ecosystems.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Looking to Exit Your Software Business?</h3>
                <p className="mb-6">
                  If you've built a valuable software product and are considering strategic options, our acquisition team would like to connect with you.
                </p>
                <Link href="/#contact" className="block w-full bg-white text-purple-600 py-3 px-6 rounded-lg transition-colors font-medium text-center hover:bg-gray-100">
                  Explore Acquisition Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What types of software do you typically acquire?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on B2B software with established market presence, particularly in enterprise productivity, business intelligence, customer experience, and vertical-specific solutions. While we consider consumer software with strong fundamentals, our expertise primarily lies in business applications.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you handle existing customers during transition?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Existing customers are a top priority in our acquisition strategy. We implement a comprehensive transition plan that includes clear communication, service continuity guarantees, and often enhanced support during the transition. Most customers experience seamless service with gradual improvements as enhancements are implemented.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What is your typical acquisition range?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our acquisition investments typically range from $1.5M to $7M, depending on the software's current revenue, customer base, market potential, and technical condition. We structure deals to create mutual value, sometimes including performance-based components that reward both parties for post-acquisition success.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How long does the enhancement process typically take?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                After acquisition, our enhancement process typically spans 3-6 months for initial improvements and up to 12 months for comprehensive transformations. We follow a phased approach that delivers early wins while laying the groundwork for more substantial enhancements, ensuring continuous value delivery throughout the process.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Do you retain the original development team?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                When possible, we aim to retain key team members who possess valuable domain knowledge and understand the software deeply. We offer attractive retention packages and career growth opportunities within our broader organization. For team members who don't transition, we provide support through the change.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What happens to the original brand after acquisition?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Brand strategy depends on the specific situation. In some cases, we maintain and enhance established brands that have strong market recognition. In others, we may rebrand as part of a broader repositioning strategy. This decision is made based on market research, brand equity assessment, and strategic goals for the acquired software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock the Hidden Potential in Software Assets</h2>
          <p className="text-xl mb-8">
            Whether you're looking to sell your software business or need help identifying acquisition targets, our team can help maximize value through strategic enhancements.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-white text-purple-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
            Start the Conversation
          </Link>
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
                <li><Link href="/services/custom-development" className="text-gray-400 hover:text-white">Custom Development</Link></li>
                <li><Link href="/services/subscription-solutions" className="text-gray-400 hover:text-white">Subscription Solutions</Link></li>
                <li><Link href="/services/software-acquisition" className="text-gray-400 hover:text-white">Software Acquisition</Link></li>
                <li><Link href="/services/platform-revitalization" className="text-gray-400 hover:text-white">Platform Revitalization</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">About Us</Link></li>
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