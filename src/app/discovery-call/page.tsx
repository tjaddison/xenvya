'use client';

import usePageViewTimer from '../hooks/usePageViewTimer';
import CalendlyWidget from '../components/CalendlyWidget';

export default function DiscoveryCall() {
  usePageViewTimer();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">

      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Schedule Your Free 30-Minute Discovery Call
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Learn how Xenvya helps organizations implement AI strategically through our research-backed CORE Method. We'll discuss your specific AI challenges, explore how our methodology can accelerate your team's AI readiness, and determine the best path forward for your business.
          </p>
        </div>
      </section>

      {/* What We'll Cover Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">What We'll Cover in Your Discovery Call</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              This isn't a sales pitch. It's a strategic conversation about your AI readiness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Your Current AI Implementation Challenges</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We'll assess where your team stands today with AI tools, what's working, what isn't, and identify the biggest obstacles to productivity.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">How the CORE Method Addresses Common AI Adoption Barriers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how our systematic approach to Control, Output, Review, and Ethics solves the specific challenges your team faces with AI tools.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Your Team's AI Readiness Level</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get a clear assessment of where your team stands and what specific skills they need to develop to maximize your AI tool investments.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Potential Solutions and Next Steps</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Walk away with a clear understanding of what needs to happen next and how we might work together to accelerate your AI readiness.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">Plus: Your Questions Answered</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              This is your opportunity to get expert guidance on your specific AI challenges. Come with questions—we'll provide actionable insights you can implement immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Choose Your Preferred Time</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Select a time that works best for you. All calls are conducted via video conference.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <CalendlyWidget url="https://calendly.com/terrance-xenvya" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your AI Investments?</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop letting expensive AI tools sit unused. In just 30 minutes, you'll have a clear path forward for making your AI investments pay off.
          </p>
          <div className="flex justify-center">
            <a href="#calendly" className="bg-white text-purple-600 py-4 px-8 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Schedule Your Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}