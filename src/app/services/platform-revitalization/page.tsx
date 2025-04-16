import Link from "next/link";

export default function PlatformRevitalization() {
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
                  <stop stopColor="#0891B2" />
                  <stop offset="1" stopColor="#22D3EE" />
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
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-4 inline-block">
                <Link href="/" className="text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Platform Revitalization</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Breathing new life into outdated software platforms with modern architecture, enhanced functionality, and improved user experiences.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-medium">Legacy Modernization</span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">UX Transformation</span>
                <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium">Cloud Migration</span>
              </div>
              <Link href="/#contact" className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                Revitalize Your Platform
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl transform rotate-3 blur-sm"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="relative">
                      <svg viewBox="0 0 200 200" className="w-48 h-48">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0891B2" />
                            <stop offset="100%" stopColor="#2563EB" />
                          </linearGradient>
                        </defs>
                        <rect x="40" y="40" width="120" height="120" rx="10" fill="url(#gradient)" />
                        <rect x="40" y="40" width="120" height="30" rx="10" fill="white" fillOpacity="0.3" />
                        <circle cx="55" cy="55" r="5" fill="white" />
                        <circle cx="70" cy="55" r="5" fill="white" />
                        <circle cx="85" cy="55" r="5" fill="white" />
                        
                        <path d="M60 90L140 90" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        <path d="M60 110L120 110" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        <path d="M60 130L100 130" stroke="white" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">REVITALIZE</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-300 font-bold">1</div>
                      <div className="flex-1 h-1 bg-cyan-100 dark:bg-cyan-900/30 rounded-full"></div>
                      <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-300 font-bold">2</div>
                      <div className="flex-1 h-1 bg-cyan-100 dark:bg-cyan-900/30 rounded-full"></div>
                      <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-300 font-bold">3</div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>Assess</span>
                      <span>Transform</span>
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
                <h2 className="text-3xl font-bold mb-6">Platform Transformation & Modernization</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Xenvya, we specialize in transforming aging software platforms into modern, competitive solutions that meet today's business demands. Our platform revitalization service addresses the challenges of maintaining legacy software while unlocking its untapped potential.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We approach each revitalization project as a comprehensive transformation, carefully preserving valuable business logic and data while replacing outdated architecture, improving user experiences, and introducing modern capabilities including cloud infrastructure, API ecosystems, and AI-powered features.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Revitalization Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-lg">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Comprehensive Assessment</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We begin with a thorough technical and business evaluation of your platform, identifying strengths to preserve, weaknesses to address, and opportunities for innovation. Our assessment covers code quality, architecture, scalability, security posture, user experience, and alignment with business goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Strategic Roadmapping</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Based on our assessment, we develop a detailed transformation roadmap that outlines the path forward. This includes prioritized initiatives, phased implementation plans, resource requirements, risk mitigation strategies, and clear success metrics aligned with your business objectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Technical Transformation</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our engineering teams execute the technical transformation, which may include refactoring code, redesigning architecture, implementing modern frameworks, developing new features, integrating with third-party services, enhancing security, and optimizing performance. All while maintaining business continuity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-lg">4</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">User Experience Redesign</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We reimagine the user experience based on modern design principles and user research. Our UX experts create intuitive, responsive interfaces that improve user satisfaction, increase adoption, streamline workflows, and reduce training requirements while preserving familiarity for existing users.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-lg">5</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Data Migration & Integration</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We ensure seamless data migration with minimal disruption, implementing robust ETL processes that maintain data integrity while optimizing data structures for improved performance. Our approach includes thorough validation and reconciliation to ensure accuracy throughout the transition.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-lg">6</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Deployment & Transition Support</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our team provides comprehensive deployment planning and execution, including user training, documentation, staged rollouts, and monitoring. We offer ongoing support during the critical transition period to ensure a smooth cutover, address any issues that arise, and guide your team toward full adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Modernization Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none">
                        <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5 22 16.5 17.5228 16.5 12C16.5 6.47715 14.5 2 12 2M12 22C9.5 22 7.5 17.5228 7.5 12C7.5 6.47715 9.5 2 12 2M2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Cloud Migration</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transform on-premises software into scalable, resilient cloud solutions using modern architectures such as microservices, serverless, and containerization to reduce operational costs and improve flexibility.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Real-Time Capabilities</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Upgrade batch-oriented systems to real-time processing platforms that deliver immediate insights, responsive interfaces, and instant notifications using event-driven architectures and streaming technologies.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none">
                        <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">API Ecosystems</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Develop comprehensive API layers that transform monolithic applications into extensible platforms capable of integration with modern applications, third-party services, and business partner ecosystems.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 3H15M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Mobile Enablement</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Extend desktop-only applications to mobile-responsive solutions that work seamlessly across devices, enabling workforce mobility and expanding user access through responsive web apps or native mobile applications.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.09003 9C9.32513 8.33167 9.78918 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6714 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">AI & ML Integration</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Enhance traditional software with artificial intelligence and machine learning capabilities that deliver predictive analytics, intelligent automation, content generation, and personalized user experiences.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.4 15C19.1277 15.6331 18.9958 16.3115 19.0002 16.9965C19.0046 17.6815 19.1451 18.3582 19.4252 18.9882C19.7053 19.6182 20.1185 20.1881 20.6358 20.6599C21.1531 21.1316 21.7634 21.4953 22.43 21.73C21.7648 22.4304 20.9536 22.9878 20.0518 23.3688C19.15 23.7498 18.1791 23.9461 17.2 23.9461C16.2209 23.9461 15.25 23.7498 14.3482 23.3688C13.4464 22.9878 12.6352 22.4304 11.97 21.73C12.6366 21.4953 13.2469 21.1316 13.7642 20.6599C14.2815 20.1881 14.6947 19.6182 14.9748 18.9882C15.2549 18.3582 15.3954 17.6815 15.3998 16.9965C15.4042 16.3115 15.2723 15.6331 15 15M4.57 17C3.5 17 2.5 17.5 1.9 18.36C1.17 18.17 0.5 17.81 0 17.3C0.232 17.9961 0.671501 18.6039 1.27 19.03C1.88 19.46 2.608 19.6914 3.36 19.69C4.13 19.69 4.87 19.45 5.47 19C6.07 18.54 6.5 17.89 6.7 17.15C6.2232 17.0178 5.72659 16.9871 5.238 17.06C4.74942 17.1329 4.28253 17.3075 3.87 17.57C3.64 17.2 3.1 17 4.57 17ZM12 7C11.0964 7.06194 10.2126 6.85222 9.47 6.4C8.5172 5.82172 7.78328 5.82172 6.83 6.4C6.08516 6.85674 5.19807 7.06622 4.29 7C5.05 5.83 6.05 5 7.24 5C8.43 5 9.39 5.43 9.88 6.13C11.0894 5.02986 12.7187 4.5603 14.3338 4.84507C15.9488 5.12983 17.3626 6.13402 18.19 7.57C17.0106 7.21166 15.7453 7.33257 14.66 7.91C13.75 8.41 12.64 7.09 12 7ZM24 12C24 13.5913 23.5308 15.1174 22.6518 16.3535C21.7727 17.5895 20.5233 18.4731 19.0615 18.8507C17.5997 19.2284 16.0522 19.0771 14.6829 18.4239C13.3135 17.7706 12.2093 16.6566 11.5549 15.2872C10.9006 13.9178 10.7482 12.3701 11.1249 10.9081C11.5016 9.44607 12.3843 8.19637 13.6194 7.31644C14.8546 6.43652 16.3799 5.96671 17.9705 6.00112C19.5611 6.03554 21.0608 6.57218 22.2495 7.52339C22.7233 7.90388 23.1467 8.35364 23.5088 8.85834C23.871 9.36303 24.167 9.91777 24.3859 10.5071C24.6048 11.0964 24.7436 11.7127 24.797 12.3401C24.8505 12.9674 24.8177 13.5995 24.7 14.217C24.7657 13.4816 24.8 12.7424 24.8 12H24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Security Hardening</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Implement comprehensive security improvements including modern authentication mechanisms, encryption, vulnerability remediation, compliance controls, and continuous security monitoring to protect against evolving threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Signs Your Platform Needs Revitalization</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none">
                        <path d="M7 11L9.75 14L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Increasing Maintenance Costs</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Routine maintenance and bug fixes consume an ever-larger portion of your IT budget and development resources.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none">
                        <path d="M7 11L9.75 14L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Declining User Satisfaction</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Users complain about outdated interfaces, slow performance, and lack of modern features they experience in other applications.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none">
                        <path d="M7 11L9.75 14L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Integration Challenges</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Connecting with newer systems or third-party services requires complex workarounds or custom development.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none">
                        <path d="M7 11L9.75 14L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Security Vulnerabilities</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Legacy technologies and architectures create security gaps that are increasingly difficult to address with patches.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none">
                        <path d="M7 11L9.75 14L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Talent Acquisition Challenges</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Finding developers skilled in legacy technologies becomes increasingly difficult and expensive.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">Business Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">40-60% Cost Reduction</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Reduced maintenance costs, improved operational efficiency, and cloud optimization typically deliver 40-60% reduction in total cost of ownership.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.09 9C9.3251 8.33167 9.7892 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6714 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">25-35% User Productivity Gain</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Modern interfaces, streamlined workflows, and enhanced features significantly improve user productivity and satisfaction.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">80% Faster Time-to-Market</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Modern development frameworks and architectures enable much faster deployment of new features and capabilities.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">New Revenue Opportunities</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">API ecosystems, modern features, and extensibility unlock new business models and revenue streams from existing software assets.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Is Your Platform Holding You Back?</h3>
                <p className="mb-6">
                  Discover how our platform revitalization services can transform your legacy software into a modern, competitive advantage without starting from scratch.
                </p>
                <Link href="/#contact" className="block w-full bg-white text-cyan-600 py-3 px-6 rounded-lg transition-colors font-medium text-center hover:bg-gray-100">
                  Request an Assessment
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
              <h3 className="text-xl font-bold mb-3">How long does a typical platform revitalization take?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The timeline depends on the complexity and scope of your platform. Small to medium-sized applications typically take 3-6 months, while large enterprise platforms may require 9-18 months. We use a phased approach that delivers incremental value throughout the process.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What about business continuity during the transition?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Business continuity is a top priority in our process. We implement carefully planned transition strategies that minimize disruption, including parallel operations, staged migrations, and comprehensive testing. Our approach ensures your business operations continue smoothly throughout the modernization process.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Is it better to revitalize or replace our platform?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                This depends on several factors including the quality of your core business logic, data complexity, customization needs, and budget constraints. Our assessment phase helps determine which approach will deliver the best ROI. Often, revitalization delivers 70-80% of the benefits of replacement at 30-40% of the cost and risk.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you handle data migration during modernization?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our data migration approach combines automated tools, custom ETL processes, and rigorous validation procedures. We conduct thorough data analysis, develop comprehensive mapping rules, perform iterative testing, and implement reconciliation procedures to ensure data integrity throughout the migration.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you ensure user adoption of the modernized platform?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We implement comprehensive change management strategies including user research during design, early stakeholder involvement, iterative feedback cycles, thorough documentation, tailored training programs, and post-launch support to ensure smooth adoption and high user satisfaction.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What technology stack do you recommend for modernization?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rather than recommending a one-size-fits-all solution, we evaluate your specific needs, industry standards, team capabilities, and long-term goals to recommend the most appropriate technology stack. We focus on scalable, maintainable technologies with strong community support and future viability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Revitalization Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl text-cyan-600 dark:text-cyan-400 mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare Claims Processing System</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Enterprise Healthcare Provider</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transformed a 15-year-old claims processing system from a monolithic architecture to a modern, cloud-based microservices platform. Enhanced with real-time processing capabilities, advanced analytics, and an intuitive user interface.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Processing Time</p>
                    <p className="font-bold text-green-600 dark:text-green-400 flex items-center">
                      -68%
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                        <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Operational Costs</p>
                    <p className="font-bold text-green-600 dark:text-green-400 flex items-center">
                      -42% 
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                        <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M8 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Supply Chain Management Platform</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Manufacturing Industry Leader</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Revitalized a critical supply chain management platform by migrating from on-premises infrastructure to a cloud-native architecture, implementing real-time tracking, predictive analytics, and mobile capabilities for field personnel.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Inventory Accuracy</p>
                    <p className="font-bold text-green-600 dark:text-green-400 flex items-center">
                      +24%
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                        <path d="M17 11L12 16L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fulfillment Speed</p>
                    <p className="font-bold text-green-600 dark:text-green-400 flex items-center">
                      +37% 
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                        <path d="M17 11L12 16L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock the Hidden Potential in Your Legacy Platform</h2>
          <p className="text-xl mb-8">
            Transform your outdated software into a modern, competitive advantage without starting from scratch. Our platform revitalization services help you maximize your existing technology investments while enabling new capabilities.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-white text-cyan-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
            Start Your Transformation
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
                      <stop stopColor="#0891B2" />
                      <stop offset="1" stopColor="#2563EB" />
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