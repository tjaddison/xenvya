'use client';

import Link from "next/link";
import usePageViewTimer from '../hooks/usePageViewTimer';

export default function PrivacyPolicy() {
  usePageViewTimer();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">

      {/* Main Content - Redesigned */}
      <div className="flex-grow py-16 sm:py-20 px-4 sm:px-6 lg:px-8"> {/* Increased py padding */}
        {/* Added card styling: background, padding, rounded corners, shadow, border */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800/50 p-8 sm:p-10 md:p-12 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          {/* Title Section with bottom border */}
          <div className="mb-10 text-center border-b border-gray-200 dark:border-gray-700 pb-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">Privacy Policy</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: April 28, 2025</p>
          </div>
          
          {/* Apply fine-tuned prose styles */}
          <div className="text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Xenvya&apos;s Privacy Policy. Xenvya Consulting LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Data We Collect About You</h2>
            <p className="mb-4">
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
            <p className="mb-4">
              We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p className="mb-4">
              Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            <p className="mb-4">
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Data Retention</h2>
            <p className="mb-4">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p className="mb-4">
              To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p className="mb-4">
              If you wish to exercise any of the rights set out above, please contact us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Changes to the Privacy Policy</h2>
            <p className="mb-4">
              We keep our privacy policy under regular review. This version was last updated on April 28, 2025.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-4">
              Full name of legal entity: Xenvya Consulting LLC<br/>
              Email address: <Link href="mailto:hello@xenvya.com" className="text-indigo-600 hover:underline">hello@xenvya.com</Link><br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 