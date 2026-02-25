import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-[#F5BA78]/20 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#B33F18] mb-6">
              Quick Navigation
            </h2>

            <ul className="space-y-4 text-gray-700 font-medium text-lg">
              <li><a href="#intro" className="hover:text-[#B33F18]">Introduction</a></li>
              <li><a href="#collect" className="hover:text-[#B33F18]">Information We Collect</a></li>
              <li><a href="#use" className="hover:text-[#B33F18]">How We Use Information</a></li>
              <li><a href="#security" className="hover:text-[#B33F18]">Data Security</a></li>
              <li><a href="#rights" className="hover:text-[#B33F18]">Your Rights</a></li>
              <li><a href="#contact" className="hover:text-[#B33F18]">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-16">
          {/* Title */}
          <div id="intro">
            <h1 className="text-4xl font-bold text-[#B33F18] mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-700 leading-relaxed text-xl">
              Urban Catalog respects your privacy and is committed to protecting
              your personal data. This policy explains how we collect, use, and
              safeguard your information.
            </p>
          </div>

          {/* Section 1 */}
          <div id="collect">
            <h2 className="text-3xl font-semibold text-[#B33F18] mb-4">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg font-medium">
              <li>Name, email address, phone number</li>
              <li>Billing and shipping information</li>
              <li>Device, IP address, browser type</li>
              <li>Customer inquiries and support messages</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div id="use">
            <h2 className="font-semibold text-[#B33F18] mb-4 text-3xl">
              2. How We Use Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg font-medium">
              <li>Process orders and transactions</li>
              <li>Provide customer support</li>
              <li>Improve user experience</li>
              <li>Send updates and promotions (if subscribed)</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div id="security">
            <h2 className="font-semibold text-[#B33F18] mb-4 text-3xl">
              3. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              We implement industry-standard security practices to protect
              your personal data from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          {/* Section 4 */}
          <div id="rights">
            <h2 className="font-semibold text-[#B33F18] mb-4 text-3xl">
              4. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              You have the right to access, update, or request deletion of
              your personal data. You may contact us at any time regarding
              your information.
            </p>
          </div>

          {/* Section 5 */}
          <div id="contact">
            <h2 className="text-3xl font-semibold text-[#B33F18] mb-4">
              5. Contact Information
            </h2>
            <div className="bg-[#F5BA78]/30 p-6 rounded-2xl text-lg font-medium">
              <p className="text-gray-700">Email: support@urbancatalog.com</p>
              <p className="text-gray-700">Phone: +91-XXXXXXXXXX</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
