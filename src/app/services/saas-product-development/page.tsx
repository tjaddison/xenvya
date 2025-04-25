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
      <section className="py-16 sm:py-20 md:py-24 px-6 bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            SaaS Product Development
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            From concept to scalable cloud platform, we build robust, user-friendly SaaS solutions that drive your business forward.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-sm font-medium px-4 py-2 rounded-full">SaaS Platforms</span>
            <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-sm font-medium px-4 py-2 rounded-full">AI Integration</span>
            <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-sm font-medium px-4 py-2 rounded-full">Scalable Architecture</span>
          </div>
          <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-green-600 transition-all shadow-md hover:shadow-lg text-lg">
            Create Your SaaS Product
          </Link>
        </div>
      </section>

      {/* Main Content - Minimalist */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* What We Build */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">What We Build</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-0">
                We specialize in creating custom SaaS applications tailored to specific industry needs, focusing on scalability, security, and seamless user experience.
              </p>
            </div>

            {/* Our Process */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Our Development Lifecycle</h3>
              <div className="relative">
                {/* Connecting Line (optional visual element) */}
                <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal-200 via-cyan-300 to-teal-200 dark:from-teal-700 dark:via-cyan-600 dark:to-teal-700 transform -translate-x-1/2"></div>

                <div className="space-y-12">
                  {/* Step 1: Discovery & Strategy */}
                  <div className="md:flex items-center md:space-x-8">
                    <div className="md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">1</div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                      <h4 className="text-xl font-bold mb-2">Discovery & Strategy</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We dive deep into your vision, market, and user needs to define a clear product roadmap and technical strategy.
                      </p>
                    </div>
                  </div>
                  {/* Step 2: Design & Prototyping */}
                  <div className="md:flex flex-row-reverse items-center md:space-x-reverse md:space-x-8">
                    <div className="md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">2</div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-right">
                      <h4 className="text-xl font-bold mb-2">Design & Prototyping</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Crafting intuitive UI/UX designs and interactive prototypes to validate concepts before development begins.
                      </p>
                    </div>
                  </div>
                  {/* Step 3: Agile Development */}
                  <div className="md:flex items-center md:space-x-8">
                    <div className="md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">3</div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                      <h4 className="text-xl font-bold mb-2">Agile Development</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Iterative development sprints focused on delivering high-quality, tested features efficiently. We&apos;re adaptable to evolving requirements.
                      </p>
                    </div>
                  </div>
                  {/* Step 4: Deployment & Scaling */}
                  <div className="md:flex flex-row-reverse items-center md:space-x-reverse md:space-x-8">
                    <div className="md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">4</div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-right">
                      <h4 className="text-xl font-bold mb-2">Deployment & Scaling</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Seamless deployment to cloud infrastructure (AWS, Azure, GCP) with robust monitoring and scaling strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Our Technology Expertise</h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                We leverage modern, proven technologies to build reliable and performant SaaS applications. We don&apos;t just follow trends; we choose the right tools for the job.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-3">Cloud-Native Architecture</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We&apos;re technology agnostic and select the best stack for each specific product need. We typically build modern cloud-native applications using frameworks like React, Angular, or Vue.js for frontends, Node.js or Python for backends, and leading AI frameworks for intelligent features.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-3">AI Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We enhance your domain expertise with AI capabilities that automate repetitive tasks, provide predictive insights, and create intelligent user experiences.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-3">Security & Compliance</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We implement industry-leading security practices including encryption, access controls, and compliance with relevant standards such as SOC 2, GDPR, and HIPAA.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-3">Scalable Infrastructure</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We design systems that can grow with your business, handling increasing users and data without performance degradation or significant re-architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* For Domain Experts */}
            <div className="bg-gradient-to-br from-teal-500 to-green-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">For Domain Experts</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Convert your company&apos;s specialized knowledge into software that can be sold at scale without proportionately increasing service costs.
              </p>
              <Link href="/#contact" className="inline-block bg-white text-teal-600 py-3 px-8 rounded-lg transition-colors font-medium text-center hover:bg-gray-100">
                Start Your SaaS Journey
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
              <h3 className="text-xl font-bold mb-3">How do you approach building SaaS products for our specific domain?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We begin with a deep dive into your industry expertise and business goals, then collaboratively design a SaaS product that leverages your domain knowledge while incorporating best practices in software development.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What&apos;s the typical timeline for developing a SaaS product?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We launch an MVP within 3-4 months, followed by continuous enhancements based on real user feedback. This approach allows you to start generating revenue and learning from users sooner.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Who owns the intellectual property of the developed SaaS product?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You own the intellectual property specific to your business domain and unique implementation, while we retain rights to the underlying technical frameworks and general-purpose components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-500 to-green-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Expertise Into Scalable Software</h2>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-white text-teal-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
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