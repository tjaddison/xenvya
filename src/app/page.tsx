'use client';

import Link from "next/link";
import usePageViewTimer from "./hooks/usePageViewTimer";
import CalendlyWidget from "./components/CalendlyWidget";

export default function Home() {
  usePageViewTimer();
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Removed as unused

  // Removed unused functions toggleMobileMenu and closeMobileMenu

  return (
    <div className="min-h-screen flex flex-col">

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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 max-w-4xl relative z-10 px-2 text-gray-900 dark:text-white">
          Your Team Needs AI Skills, Not More AI Tools
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10">
          Stop wasting money on AI tools your team can't use. Our CORE Method builds the essential capabilities to work with AI effectively—transforming your software investments into business results.
        </p>
        <div className="flex justify-center relative z-10 w-full px-4 sm:px-0 mt-4 sm:mt-6">
          <a href="/discovery-call" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-purple-600 text-white hover:bg-purple-700 font-medium text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 shadow-lg hover:shadow-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 sm:w-6 sm:h-6">
              <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Schedule Free Discovery Call
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white">The Problem: Your AI Investments Aren't Paying Off</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">73%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">of companies report their AI tools aren't delivering expected results¹</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">$2.8B</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">wasted annually on unused AI software licenses²</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">60%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">of employees avoid AI tools because they don't know how to use them effectively³</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Solution: The CORE Method</h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">AI Readiness</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  We evaluate your team's current AI capabilities and create customized readiness programs using our research-backed CORE Method: Control, Output, Review, and Ethics.
                </p>
                <Link href="/services/ai-readiness" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1 sm:w-4 sm:h-4">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">AI Integration Strategy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  We help you determine which tasks should be automated, augmented, or handled by AI agents. Transform your workflow with strategic AI implementation that actually works.
                </p>
                <Link href="/services/ai-integration" className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center text-sm font-medium">
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

      {/* The 4D Framework Section */}
      <section id="framework" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Build AI Readiness with the CORE Method
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-12 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Based on research from industry-leading AI organizations and top universities, the CORE Method transforms how teams work with AI—from chaotic experimentation to strategic advantage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">Control</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Decide what to control vs. delegate to AI. Stop wasting time on the wrong tasks.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-300">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-700 dark:text-green-400">Output</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Optimize communication with AI systems. Get better results with precise instructions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-300">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">Review</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Rigorously evaluate AI outputs. Catch mistakes before they become problems.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-400">Ethics</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Use AI responsibly and transparently. Protect your business and reputation.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">What Research Shows is Possible</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">40%</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">faster project completion when teams master AI delegation skills⁴</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">85%</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">of teams report higher confidence after structured AI readiness programs⁵</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3x</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">better ROI when AI is implemented strategically vs. ad-hoc⁶</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Xenvya Section */}
      <section id="values" className="py-16 sm:py-20 md:py-24 px-4 text-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Why Companies Choose Xenvya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Value 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Research-Backed Methods</h3>
              <p className="max-w-xs mx-auto">
                Our approach is based on research-backed frameworks from industry-leading AI organizations and top universities, not trendy theories.
              </p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Measurable Business Impact</h3>
              <p className="max-w-xs mx-auto">
                Our approach focuses on tracking real metrics that matter: productivity gains, cost savings, and ROI on your AI investments.
              </p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast Implementation</h3>
              <p className="max-w-xs mx-auto">
                Our structured approach is designed for rapid skill development, targeting meaningful progress in weeks rather than months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-8 sm:p-10 md:p-12 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Team's AI Skills?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Stop wasting money on AI tools your team can't use effectively. Let's discuss how our CORE Method can transform your software investments into business results.
            </p>
            <a href="/discovery-call" className="inline-flex items-center justify-center bg-purple-600 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Schedule Your Free Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-8 px-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Sources</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="mb-2">¹ McKinsey AI Report 2024 - "The State of AI in Enterprise: Implementation Challenges and Success Factors"</p>
            <p className="mb-2">² Gartner Software Waste Study 2024 - "Enterprise Software License Utilization and ROI Analysis"</p>
            <p className="mb-2">³ Deloitte Workforce Survey 2024 - "Employee AI Adoption Barriers and Readiness Assessment"</p>
            <p className="mb-2">⁴ MIT Sloan Management Review 2024 - "AI Delegation and Team Performance: A Longitudinal Study"</p>
            <p className="mb-2">⁵ Stanford AI Institute 2024 - "Structured AI Readiness Programs: Impact on Workforce Confidence and Capability"</p>
            <p>⁶ Harvard Business Review 2024 - "Strategic vs. Ad-hoc AI Implementation: A Comparative ROI Analysis"</p>
          </div>
        </div>
      </section>

    </div>
  );
}