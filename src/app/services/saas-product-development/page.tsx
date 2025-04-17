import Link from "next/link";

export default function SaasProductDevelopment() {
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
            <Link href="/#solutions" className="hover:underline text-sm lg:text-base">Solutions</Link>
            <Link href="/#approach" className="hover:underline text-sm lg:text-base">Our Approach</Link>
            <Link href="/#values" className="hover:underline text-sm lg:text-base">Values</Link>
            <Link href="/#contact" className="hover:underline text-sm lg:text-base">Contact Us</Link>
          </nav>
          
          <Link href="/login" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap">
            Login
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-4 inline-block">
                <Link href="/" className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">SaaS Product Development</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Partner with Xenvya to design, build, and support SaaS and AI products that leverage your domain expertise, create new revenue streams, and expand your market reach.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">SaaS Platforms</span>
                <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium">AI Products</span>
                <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">Domain-Specific</span>
              </div>
              <Link href="/#contact" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                Create Your SaaS Product
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl transform rotate-3 blur-sm"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div>
                        <h3 className="font-bold">Monthly Subscription</h3>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Billed monthly</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">$29.99</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">per user/month</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Unlimited users</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>24/7 Customer support</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Automated backups</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Continuous updates</span>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all">
                      Get Started
                    </button>
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                      No credit card required to start
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
                <h2 className="text-3xl font-bold mb-6">Create Valuable SaaS Products for Your Business</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Xenvya, we partner with businesses to develop, launch, and support subscription-based software products that become valuable assets for your company. By expanding into the SaaS space, you can establish predictable recurring revenue streams, enhance customer relationships, and build significant business value.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our end-to-end approach covers everything from initial concept and market validation to technical architecture, development, and ongoing evolution. We help you create software that delivers exceptional value to your customers while providing an appreciating asset for your business.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Unlike traditional software, SaaS products generate increasing value over time as your customer base grows, allowing you to scale efficiently while maintaining high profit margins. Ownership of a successful SaaS platform significantly increases your company's valuation and provides strategic advantages in your market.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Business Benefits of Owning a SaaS Product</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C14.5 22 16.5 17.5228 16.5 12C16.5 6.47715 14.5 2 12 2C9.5 2 7.5 6.47715 7.5 12C7.5 17.5228 9.5 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Predictable Recurring Revenue</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transform your business model with stable, predictable monthly income that compounds as your customer base grows. Subscription revenue provides financial stability and simplifies forecasting and planning.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Enhanced Customer Relationships</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Develop deeper, ongoing relationships with customers through continuous service delivery. The subscription model aligns your success with customer success, driving stronger loyalty and higher lifetime value.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Increased Company Valuation</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      SaaS businesses typically command higher valuation multiples than traditional businesses due to their predictable revenue, scalability, and growth potential. A successful SaaS product can significantly increase your company's market value.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 3H21M21 3V8M21 3L14 10M8 21H3M3 21V16M3 21L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Scalable Growth Model</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Unlike traditional business models, SaaS solutions can scale rapidly without proportional increases in costs. Once developed, you can serve additional customers with minimal incremental expense, driving exceptional profit margins at scale.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-lime-100 dark:bg-lime-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-lime-600 dark:text-lime-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Diversified Revenue Streams</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Expand your business offerings and reduce market risk by adding subscription-based software to your product portfolio. SaaS products complement existing services and create new revenue opportunities from both current and new customers.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19V13C9 11.8954 8.10457 11 7 11H5C3.89543 11 3 11.8954 3 13V19H9ZM9 19H15M9 19V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V19M15 19H21M15 19V5C15 3.89543 15.8954 3 17 3H19C20.1046 3 21 3.89543 21 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Data-Driven Insights</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Gain valuable insights from user behavior and product usage that can inform business decisions and product improvements. SaaS products provide ongoing customer intelligence that can benefit your entire organization.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our SaaS Development Approach</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-lg">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">User-Centered Design</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We begin by understanding your users' needs, workflows, and pain points. Our design team creates intuitive interfaces that maximize productivity and minimize learning curves.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Cloud-Native Architecture</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our solutions are built using modern cloud-native architectures that ensure scalability, reliability, and performance. We leverage microservices, containerization, and serverless computing where appropriate.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Security By Design</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Security is built into every layer of our software development lifecycle. From secure coding practices to regular penetration testing, we ensure your data remains protected.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-lg">4</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Continuous Delivery</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our automated CI/CD pipelines enable frequent, reliable updates without disruption. New features and improvements are delivered seamlessly, allowing your team to benefit from innovations immediately.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-lg">5</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Data-Driven Improvement</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We analyze usage patterns and performance metrics to continuously optimize your software. This iterative approach ensures that your SaaS product keeps getting better over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">SaaS Opportunities for Your Business</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M3 19H21M3 5H21M4 5V19M20 5V19M8 9H10M8 13H10M14 9H16M14 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Productizing Your Expertise</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Convert your company's specialized knowledge into software that can be sold at scale without proportionately increasing service costs.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19V13C9 11.8954 8.10457 11 7 11H5C3.89543 11 3 11.8954 3 13V19H9ZM9 19H15M9 19V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V19M15 19H21M15 19V5C15 3.89543 15.8954 3 17 3H19C20.1046 3 21 3.89543 21 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Industry-Specific Solutions</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Develop vertical SaaS products that solve unique challenges in your industry, leveraging your specialized domain knowledge.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Enhancing Customer Experience</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Create software that complements your physical products or services, improving customer experience and adding recurring revenue streams.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Automation Platforms</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Build tools that automate common workflows in your industry, saving time for your customers while generating predictable subscription revenue.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Data Analytics & Insights</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Develop platforms that help businesses collect, analyze, and visualize data to improve decision-making and operational efficiency.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">Pricing Models</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Per-User Pricing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Predictable costs based on the number of users accessing the system.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM6 16.5C6 14.0147 7.00949 11.6981 8.53553 9.98959M18 16.5C18 14.0147 16.9905 11.6981 15.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Tiered Subscription</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Multiple service levels to match your organization's specific needs and budget.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none">
                        <path d="M14 10H21L19 3H12M14 10V21H3V10M14 10H8.5M2 10H8.5M8.5 10V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Usage-Based Model</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Pay only for what you use, with costs scaling based on resource consumption.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none">
                        <path d="M8 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16M15 11L12 14M12 14L9 11M12 14V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Enterprise Plans</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Customized packages with dedicated support, advanced security, and premium features.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Build Your SaaS Product?</h3>
                <p className="mb-6">
                  Turn your domain expertise into a powerful SaaS or AI product that creates new revenue streams and expands your market reach.
                </p>
                <Link href="/#contact" className="block w-full bg-white text-green-600 py-3 px-6 rounded-lg transition-colors font-medium text-center hover:bg-gray-100">
                  Request a Demo
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
              <h3 className="text-xl font-bold mb-3">How do you approach building SaaS products for our specific domain?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We begin with a deep dive into your industry expertise and business goals, then collaboratively design a SaaS product that leverages your domain knowledge. Our development process combines your subject matter expertise with our technical capabilities to create software that delivers unique value to your target market.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What technologies do you use for SaaS and AI product development?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're technology agnostic and select the best stack for each specific product need. We typically build modern cloud-native applications using frameworks like React, Angular, or Vue.js for frontends, Node.js or Python for backends, and leading AI frameworks for intelligent features. All our solutions are designed for scalability, security, and seamless integration capabilities.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How is data security handled?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Security is our top priority. We implement industry-leading practices including encryption at rest and in transit, regular security audits, role-based access controls, and compliance with relevant standards such as SOC 2, GDPR, and HIPAA where applicable.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you incorporate AI capabilities into SaaS products?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We integrate AI capabilities that enhance your domain expertise rather than replace it. This may include intelligent automation of repetitive tasks, predictive analytics based on your industry data, natural language processing for improved user interactions, or AI agents that perform specific functions within your workflow. All AI features are designed to augment human expertise, not substitute it.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What's the typical timeline for developing a SaaS product?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our development timeline varies based on complexity, but we follow an iterative approach that delivers value quickly. Typically, we launch an MVP (Minimum Viable Product) within 3-4 months, followed by continuous enhancements based on real user feedback. This approach allows you to start generating revenue and learning from users sooner while we expand functionality over time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Who owns the intellectual property of the developed SaaS product?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our standard arrangement is that you own the intellectual property specific to your business domain and unique implementation, while we retain rights to the underlying technical frameworks and general-purpose components. This balanced approach ensures you control your competitive advantage while we can maintain and improve the core technology. Custom IP arrangements are available based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Domain Expertise Into Market-Leading SaaS Products</h2>
          <p className="text-xl mb-8">
            Partner with Xenvya to design, build, and launch powerful SaaS and AI solutions that leverage your unique industry knowledge to create new revenue streams and unlock significant business value.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-white text-green-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
            Start Your SaaS Journey Today
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
                <li><Link href="/services/saas-product-development" className="text-gray-400 hover:text-white">SaaS Product Development</Link></li>
                <li><Link href="/services/software-acquisition" className="text-gray-400 hover:text-white">Software Acquisition</Link></li>
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
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    X
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