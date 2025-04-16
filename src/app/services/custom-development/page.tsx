import Link from "next/link";

export default function CustomDevelopment() {
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
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-4 inline-block">
                <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Software Development</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Tailored software solutions designed specifically for your unique business challenges, built from the ground up.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">Bespoke Solutions</span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">Enterprise Applications</span>
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">AI Integration</span>
              </div>
              <Link href="/#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                Discuss Your Project
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 blur-sm"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <svg className="w-full h-auto" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="800" height="600" rx="10" fill="#1E293B" />
                      <rect x="30" y="30" width="740" height="50" rx="5" fill="#334155" />
                      <rect x="50" y="45" width="150" height="20" rx="5" fill="#94A3B8" />
                      <rect x="30" y="100" width="300" height="470" rx="5" fill="#334155" />
                      <rect x="350" y="100" width="420" height="470" rx="5" fill="#334155" />
                      <rect x="50" y="130" width="260" height="30" rx="5" fill="#94A3B8" />
                      <rect x="50" y="170" width="260" height="30" rx="5" fill="#64748B" />
                      <rect x="50" y="210" width="260" height="30" rx="5" fill="#64748B" />
                      <rect x="50" y="250" width="260" height="30" rx="5" fill="#64748B" />
                      <rect x="50" y="290" width="260" height="30" rx="5" fill="#94A3B8" />
                      <rect x="50" y="330" width="260" height="30" rx="5" fill="#64748B" />
                      <rect x="370" y="130" width="380" height="420" rx="5" fill="#475569" />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6"></div>
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
                <h2 className="text-3xl font-bold mb-6">End-to-End Custom Development</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Xenvya, we specialize in creating software that's precisely engineered for your specific business challenges. Unlike off-the-shelf products, our custom solutions are built from the ground up with your unique requirements, workflows, and goals in mind.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our expert engineers collaborate closely with your team to understand your business needs deeply, crafting solutions that work exactly how you need them to. Whether you're looking to streamline operations, create innovative products, or gain a competitive edge, our custom development services deliver software that's tailored to your exact specifications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Development Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Discovery & Strategy</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We begin with a deep dive into your business goals, challenges, and requirements. Our team works with your stakeholders to develop a comprehensive strategy that aligns the software with your business objectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Architecture & Design</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our solutions architects design a robust, scalable architecture and create detailed technical specifications. We prioritize security, performance, and future extensibility in every design decision.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Agile Development</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Using agile methodologies, our development teams work in iterative cycles, delivering functional components for regular review and feedback. This approach ensures alignment and allows for course correction throughout the process.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">4</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Quality Assurance</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our rigorous testing protocols ensure your software is robust, secure, and performs optimally. We conduct automated and manual testing across multiple dimensions to ensure every aspect meets our high standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">5</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Deployment & Support</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        We handle smooth deployment and provide comprehensive training to ensure your team can effectively use the new software. Our ongoing support ensures your solution continues to perform optimally as your business evolves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Perfect-Fit Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Software built specifically for your unique business requirements, avoiding the compromises and workarounds of generic products.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12H16M12 6V18M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Competitive Advantage</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Gain an edge over competitors with unique software capabilities that respond to your market's specific demands and opportunities.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12.0001 6.99987V11.9999L15.0001 14.9999M12.0001 2.99987C10.022 2.99987 8.08785 3.58114 6.4443 4.67002C4.80074 5.75889 3.51826 7.30733 2.76121 9.1535C2.00417 10.9997 1.80617 13.0219 2.19215 14.9758C2.57813 16.9296 3.53037 18.7339 4.92894 20.1324C6.32752 21.531 8.13185 22.4833 10.0857 22.8692C12.0396 23.2552 14.0618 23.0572 15.908 22.3002C17.7541 21.5431 19.3026 20.2607 20.3914 18.6171C21.4803 16.9736 22.0616 15.0394 22.0616 13.0614C22.0616 10.3478 20.9853 7.74608 19.0713 5.8321C17.1573 3.91811 14.5556 2.84179 12.0001 2.84179V2.99987Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Scalability & Future-Proofing</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Custom software grows with your business, adapting to changing needs and integrating new technologies as they become available.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="none">
                        <path d="M15.5799 12.0037C15.5799 13.9349 13.93 15.5037 11.9186 15.5037C9.90729 15.5037 8.25732 13.9349 8.25732 12.0037C8.25732 10.0726 9.90729 8.50372 11.9186 8.50372C13.93 8.50372 15.5799 10.0726 15.5799 12.0037Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9186 3.50024C7.48083 3.50024 3.66257 5.8833 2.0481 12.0002C3.66257 18.1172 7.48083 20.5002 11.9186 20.5002C16.3564 20.5002 20.1747 18.1172 21.7891 12.0002C20.1747 5.8833 16.3564 3.50024 11.9186 3.50024Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Full Control & Ownership</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Maintain complete control over your software, including its source code, data, and future development, without dependency on third-party vendors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Our Technology Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Web Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Mobile Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Enterprise Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Cloud-Native Architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>AI & Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>API Development & Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>IoT Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Microservices Architecture</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">Ideal For</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Businesses with Unique Processes</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Organizations with specific workflows that aren't well-served by generic solutions.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 18L18 20L22 16M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Innovative Industry Pioneers</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Companies creating new products or services that require novel software solutions.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Growth-Stage Companies</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Rapidly expanding organizations looking to scale their operations with customized digital infrastructure.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Industry Leaders Seeking Advantage</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Established companies looking to maintain their competitive edge through proprietary technology.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Let's discuss how custom software development can address your unique business challenges and create new opportunities for growth.
                </p>
                <Link href="/#contact" className="block w-full bg-white text-blue-600 py-3 px-6 rounded-lg transition-colors font-medium text-center hover:bg-gray-100">
                  Schedule a Consultation
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
              <h3 className="text-xl font-bold mb-3">How long does custom software development typically take?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Development timelines vary based on project complexity, but most custom solutions take between 3-9 months from concept to deployment. We provide detailed timelines during the discovery phase after understanding your specific requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What's the investment range for custom software?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Custom software is a strategic investment that varies widely based on requirements. Mid-market solutions typically range from $50,000-$250,000, while enterprise-grade applications can range from $250,000-$2M depending on complexity and scale.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you ensure the solution will meet our needs?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our process begins with an extensive discovery phase where we deeply understand your requirements. Throughout development, we maintain regular communication and demonstrations, incorporating your feedback to ensure the final product aligns perfectly with your expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Who owns the intellectual property of the custom software?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You retain full ownership of all intellectual property associated with your custom software, including source code, designs, and documentation. This gives you complete control over your technology assets and future development.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you handle maintenance and updates?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer comprehensive maintenance packages that include regular updates, security patches, performance optimizations, and priority support. These plans ensure your software remains secure, up-to-date, and compatible with evolving technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Can you integrate with our existing systems?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely. We specialize in creating solutions that seamlessly integrate with your existing technology ecosystem. Our experienced integration engineers ensure smooth data flow between systems while maintaining security and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business with Custom Software</h2>
          <p className="text-xl mb-8">
            Let's create a solution that perfectly fits your unique business needs and gives you a lasting competitive advantage.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-white text-blue-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
            Start Your Custom Software Journey
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