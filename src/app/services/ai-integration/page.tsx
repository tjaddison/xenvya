'use client';

import Link from "next/link";
import usePageViewTimer from '../../hooks/usePageViewTimer';
import CalendlyWidget from '../../components/CalendlyWidget';

export default function AIIntegration() {
  usePageViewTimer();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">

      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-6 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            AI Integration Strategy
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We help you determine which tasks should be automated, augmented, or handled by AI agents. Transform your workflow with strategic AI implementation that actually works.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-sm font-medium px-4 py-2 rounded-full">Strategic Planning</span>
            <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-sm font-medium px-4 py-2 rounded-full">Workflow Optimization</span>
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">ROI Focused</span>
          </div>
          <Link href="/discovery-call" className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-md hover:shadow-lg text-lg">
            Schedule Your Free 30-Minute Discovery Call
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-yellow-50 dark:bg-yellow-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">The Challenge: AI Without Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">🤔</div>
              <h3 className="text-xl font-bold mb-3">Unclear Use Cases</h3>
              <p className="text-gray-600 dark:text-gray-300">Teams know AI is powerful but struggle to identify the right applications for their business</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Siloed Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">Different departments use AI tools independently, missing opportunities for integrated workflows</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-3">Poor ROI</h3>
              <p className="text-gray-600 dark:text-gray-300">AI investments don't deliver expected business value due to lack of strategic implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Ways of AI Engagement */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">The Three Ways to Work With AI</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our framework identifies the optimal mode of AI engagement for each business process, maximizing efficiency and outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">Automation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                AI completes specific tasks based on your instructions. Perfect for repetitive, rule-based processes.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Data entry and processing</li>
                <li>• Report generation</li>
                <li>• Email categorization</li>
                <li>• Basic customer support</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-green-600 dark:text-green-400">Augmentation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                You and AI collaborate as creative thinking and task execution partners. Best for complex problem-solving.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Strategic planning</li>
                <li>• Content creation</li>
                <li>• Data analysis</li>
                <li>• Code development</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-purple-600 dark:text-purple-400">Agency</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                Configure AI to work independently on your behalf. Ideal for ongoing monitoring and decision-making.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Market monitoring</li>
                <li>• Performance optimization</li>
                <li>• Predictive maintenance</li>
                <li>• Personalized recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Integration Process</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Business Process Audit</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We map your current workflows and identify high-impact opportunities for AI integration across your organization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Prioritization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We rank opportunities by business impact, implementation complexity, and resource requirements to create your roadmap.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Pilot Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We start with high-value, low-risk pilots to demonstrate ROI and build organizational confidence in AI integration.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Scale & Optimize</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We expand successful implementations across your organization while continuously optimizing for better performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-blue-50 dark:bg-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">What Strategic AI Integration Research Shows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-3">65%</div>
              <h3 className="text-xl font-bold mb-3">Productivity Increase</h3>
              <p className="text-gray-600 dark:text-gray-300">Industry studies show average improvement in team productivity with strategic AI integration⁷</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">8x</div>
              <h3 className="text-xl font-bold mb-3">Faster ROI</h3>
              <p className="text-gray-600 dark:text-gray-300">Research shows strategic implementation delivers ROI 8x faster than ad-hoc AI adoption⁶</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">90%</div>
              <h3 className="text-xl font-bold mb-3">Employee Satisfaction</h3>
              <p className="text-gray-600 dark:text-gray-300">Studies indicate employees report higher job satisfaction when AI handles routine tasks effectively⁸</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with Strategic AI?</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop experimenting with AI. Start implementing it strategically for measurable business results.
          </p>
          <Link href="/discovery-call" className="inline-flex items-center justify-center bg-white text-green-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-8 px-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Sources</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="mb-2">⁶ Harvard Business Review 2024 - "Strategic vs. Ad-hoc AI Implementation: A Comparative ROI Analysis"</p>
            <p className="mb-2">⁷ Boston Consulting Group 2024 - "AI-Driven Productivity: Measuring Impact Across Enterprise Functions"</p>
            <p>⁸ Accenture Future of Work Institute 2024 - "Employee Experience in AI-Augmented Workplaces"</p>
          </div>
        </div>
      </section>
    </div>
  );
}