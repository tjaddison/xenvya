import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">

      {/* Main Content Area */}
      <div className="flex-grow py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800/50 p-8 sm:p-10 md:p-12 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          {/* Title Section */}
          <div className="mb-10 text-center border-b border-gray-200 dark:border-gray-700 pb-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">Terms of Service</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: April 28, 2025</p>
          </div>
          
          {/* Content Container with Prose classes */}
          <div className="text-gray-700 dark:text-gray-300" style={{color: 'inherit', maxWidth: 'none'}}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Xenvya (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)! These Terms of Service (&quot;Terms&quot;) govern your use of our website located at xenvya.com (the &quot;Service&quot;) operated by Xenvya Consulting LLC.
            </p>
            <p className="mb-4">
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: <Link href="/privacy-policy" className="text-indigo-600 hover:underline">/privacy-policy</Link>.
            </p>
            <p className="mb-4">
              Your agreement with us includes these Terms and our Privacy Policy (&quot;Agreements&quot;). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
            </p>
            <p className="mb-4">
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at <Link href="mailto:hello@xenvya.com" className="text-indigo-600 hover:underline">hello@xenvya.com</Link> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Use of Our Service</h2>
            <p className="mb-4">
              You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail&quot;, &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of Service.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Xenvya Consulting LLC and its licensors. Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Xenvya Consulting LLC.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Disclaimer Of Warranty</h2>
            <p className="mb-4">
              These services are provided by company on an &quot;as is&quot; and &quot;as available&quot; basis. Company makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein. You expressly agree that your use of these services, their content, and any services or items obtained from us is at your sole risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Limitation Of Liability</h2>
            <p className="mb-4">
              In no event shall Xenvya Consulting LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
            </p>
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mb-4">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <p className="mb-4">
              By email: <Link href="mailto:hello@xenvya.com" className="text-indigo-600 hover:underline">hello@xenvya.com</Link><br />
              By visiting this page on our website: <Link href="/#contact" className="text-indigo-600 hover:underline">xenvya.com/#contact</Link><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
