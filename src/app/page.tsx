'use client';

import Link from "next/link";
import ContactForm from "./components/ContactForm";

export default function Home(): JSX.Element {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Removed as unused

  // Removed unused functions toggleMobileMenu and closeMobileMenu

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 text-center relative prose-headings:text-inherit prose-p:text-inherit">
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
          Software That Scales Your Ambition
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10">
          We partner with businesses to build cutting-edge SaaS platforms and revitalize software assets, driving growth and innovation. Let&apos;s build the future, together.
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Our Core Services</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Launch Your Scalable SaaS Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  Transform your vision into a high-growth SaaS asset. We provide end-to-end development for market-leading platforms with recurring revenue potential.
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
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Acquire & Revitalize Software Assets</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  Maximize value through strategic acquisition. We identify high-potential software, enhance its capabilities, and position it for significant growth.
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
            The Xenvya Advantage
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-center">
            Our unique model blends expert SaaS development with strategic software acquisition. We build valuable assets from scratch *and* unlock potential in existing ones.
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">Build & Buy: A Smarter Software Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-purple-700 dark:text-purple-400 flex items-center">
                  Future-Proof SaaS & AI
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Develop custom, scalable platforms engineered for market leadership and lasting value.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 dark:text-indigo-400 flex items-center">
                  Strategic Acquisition & Growth
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Acquire and revitalize software assets to rapidly expand market share and capabilities.
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center italic">
              Our dual approach delivers tangible results faster, whether building new platforms or optimizing acquired ones.
            </p>
          </div>
        </div>
      </section>

      {/* Technology / Values Section - Renamed for clarity */}
      <section id="values" className="py-16 sm:py-20 md:py-24 px-4 text-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Value 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">The Right Tech, Every Time</h3>
              <p className="max-w-xs mx-auto">
                Technology agnostic. We select the optimal stack for your specific goals, ensuring performance and scalability.
              </p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Client Success Focused</h3>
              <p className="max-w-xs mx-auto">
                Your success defines ours. We partner closely to understand your needs and deliver measurable results.
              </p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Long-Term Value Creation</h3>
              <p className="max-w-xs mx-auto">
                We focus on building and enhancing software as strategic assets for your long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-8 sm:p-10 md:p-12 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Build Your Next Advantage</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Ready to leverage software for strategic growth? Let&apos;s discuss your goals.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}