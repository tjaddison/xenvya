'use client';

import Link from "next/link";
import usePageViewTimer from '../../hooks/usePageViewTimer';
import CalendlyWidget from '../../components/CalendlyWidget';

export default function AIReadiness() {
  usePageViewTimer();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">

      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            AI Readiness
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Transform your team from AI-confused to AI-confident. Our research-backed CORE Method builds the essential capabilities to work with AI effectively, safely, and strategically.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">CORE Method</span>
            <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium px-4 py-2 rounded-full">Team Enablement</span>
            <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-2 rounded-full">Research-Backed</span>
          </div>
          <Link href="/discovery-call" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-md hover:shadow-lg text-lg">
            Schedule Your Free 30-Minute Discovery Call
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-red-50 dark:bg-red-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Is This Your Team Right Now?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">😫</div>
              <h3 className="text-xl font-bold mb-3">Frustrated by Poor Results</h3>
              <p className="text-gray-600 dark:text-gray-300">AI outputs are inconsistent, unhelpful, or completely wrong</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Wasting Time</h3>
              <p className="text-gray-600 dark:text-gray-300">Spending hours trying to get AI to do simple tasks</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-3">Worried About Mistakes</h3>
              <p className="text-gray-600 dark:text-gray-300">Unsure what AI outputs are safe to use or share</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - 4D Framework */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">The CORE Method: Your Path to AI Readiness</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Based on research from industry-leading AI organizations and top universities, the CORE Method transforms how teams work with AI—from chaotic experimentation to strategic advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">Control</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Decide what to control vs. delegate to AI. Stop wasting time on the wrong tasks.</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 text-left space-y-1">
                <li>• Task categorization framework</li>
                <li>• AI capability assessment</li>
                <li>• Decision trees for delegation</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-300">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Output</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Optimize communication with AI systems. Get better results with precise instructions.</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 text-left space-y-1">
                <li>• Product description techniques</li>
                <li>• Process guidance methods</li>
                <li>• Performance specification</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-300">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-600 dark:text-orange-400">Review</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Rigorously evaluate AI outputs. Catch mistakes before they become problems.</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 text-left space-y-1">
                <li>• Quality assessment frameworks</li>
                <li>• Error detection techniques</li>
                <li>• Accuracy verification methods</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Ethics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Use AI responsibly and transparently. Protect your business and reputation.</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 text-left space-y-1">
                <li>• Ethics and governance practices</li>
                <li>• Transparency requirements</li>
                <li>• Accountability measures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">How We Get Your Team AI-Ready</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">AI Readiness Assessment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We evaluate your team's current AI usage, identify skill gaps, and assess existing AI tools and workflows.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Implementation Plan</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Based on your assessment, we create a tailored action plan that addresses your team's specific gaps and builds practical AI skills for your industry context.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Practical Application Workshops</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interactive sessions using actual scenarios from your business. Your team learns by solving real challenges, not hypothetical examples.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Continuous Improvement & Validation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Continued guidance as your team applies new capabilities, plus verification of readiness milestones to ensure lasting transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">What Research Shows You Can Achieve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-3">40%</div>
              <h3 className="text-xl font-bold mb-3">Faster Task Completion</h3>
              <p className="text-gray-600 dark:text-gray-300">Studies show teams complete projects significantly faster when they master AI delegation skills⁴</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">85%</div>
              <h3 className="text-xl font-bold mb-3">Higher Confidence</h3>
              <p className="text-gray-600 dark:text-gray-300">Research indicates employees gain confidence after systematic AI readiness programs⁵</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">3x</div>
              <h3 className="text-xl font-bold mb-3">Better ROI</h3>
              <p className="text-gray-600 dark:text-gray-300">Industry data shows strategic AI readiness programs deliver superior returns on software investments⁶</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make Your Team AI-Ready?</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop struggling with AI tools. Start seeing real results from your AI investments.
          </p>
          <Link href="/discovery-call" className="inline-flex items-center justify-center bg-white text-blue-600 py-4 px-8 rounded-lg transition-colors font-medium text-lg hover:bg-gray-100">
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-8 px-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Sources</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="mb-2">⁴ MIT Sloan Management Review 2024 - "AI Delegation and Team Performance: A Longitudinal Study"</p>
            <p className="mb-2">⁵ Stanford AI Institute 2024 - "Structured AI Readiness Programs: Impact on Workforce Confidence and Capability"</p>
            <p>⁶ Harvard Business Review 2024 - "Strategic vs. Ad-hoc AI Implementation: A Comparative ROI Analysis"</p>
          </div>
        </div>
      </section>
    </div>
  );
}