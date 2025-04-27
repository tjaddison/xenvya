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
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: June 1, 2025</p>
          </div>
          
          {/* Content Container with Prose classes */}
          {/* Ensure @tailwindcss/typography plugin is installed and configured */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:mb-4 prose-p:mb-4 prose-ul:my-4 prose-li:my-1">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Xenvya (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)! These Terms of Service (&quot;Terms&quot;) govern your use of our website located at [Your Website URL] (the &quot;Service&quot;) operated by Xenvya Consulting LLC.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: <Link href="/privacy-policy">/privacy-policy</Link>.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy (&quot;Agreements&quot;). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at [Your Contact Email] so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
            </p>

            <h2>2. Use of Our Service</h2>
            <p>
              You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail&quot;, &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Xenvya Consulting LLC and its licensors. Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Xenvya Consulting LLC.
            </p>

            <h2>4. Disclaimer Of Warranty</h2>
            <p>
              These services are provided by company on an &quot;as is&quot; and &quot;as available&quot; basis. Company makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein. You expressly agree that your use of these services, their content, and any services or items obtained from us is at your sole risk.
            </p>

            <h2>5. Limitation Of Liability</h2>
            <p>
              In no event shall Xenvya Consulting LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>

            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your State], United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>

            <h2>8. Amendments To Terms</h2>
            <p>
              We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              Please send your feedback, comments, requests for technical support by email: [Your Contact Email].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 