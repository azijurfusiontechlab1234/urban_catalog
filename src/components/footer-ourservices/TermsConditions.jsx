import React from "react";

const TermsConditions = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-12 md:py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 md:gap-10 bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Sidebar */}
        <div className="bg-[#F5BA78]/20 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#B33F18] mb-6">
            Terms & Conditions
          </h2>

          <ul className="space-y-3 md:space-y-4 text-base md:text-lg font-semibold text-gray-700">
            <li><a href="#agreement" className="hover:text-[#B33F18]">1. About This Agreement</a></li>
            <li><a href="#usage" className="hover:text-[#B33F18]">2. Website Usage</a></li>
            <li><a href="#products" className="hover:text-[#B33F18]">3. Products & Pricing</a></li>
            <li><a href="#orders" className="hover:text-[#B33F18]">4. Orders & Payments</a></li>
            <li><a href="#delivery" className="hover:text-[#B33F18]">5. Delivery Policy</a></li>
            <li><a href="#liability" className="hover:text-[#B33F18]">6. Limitation of Liability</a></li>
            <li><a href="#ip" className="hover:text-[#B33F18]">7. Intellectual Property</a></li>
            <li><a href="#termination" className="hover:text-[#B33F18]">8. Termination</a></li>
            <li><a href="#contact" className="hover:text-[#B33F18]">9. Contact Information</a></li>
          </ul>
        </div>

        {/* Content */}
        <div className="md:col-span-3 p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold text-[#B33F18] mb-6 md:mb-8">
            Terms & Conditions – Mix Concrete Tiles
          </h1>

          <p className="text-gray-600 mb-8 md:mb-10 text-base md:text-2xl font-semibold leading-relaxed">
            These Terms & Conditions govern your use of 
            <strong> Mix Concrete Tiles </strong>
            (www.mixconcretetiles.com). By accessing this website,
            you agree to comply with these terms.
          </p>

          {/* Section 1 */}
          <div id="agreement" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              1. About This Agreement
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-xl font-medium">
              This agreement applies to all users and customers purchasing
              concrete tiles, paver blocks, and construction materials
              from our website.
            </p>
          </div>

          {/* Section 2 */}
          <div id="usage" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              2. Website Usage
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base md:text-xl font-medium">
              <li>Use the website only for lawful purposes.</li>
              <li>Do not attempt unauthorized access.</li>
              <li>Do not misuse website content.</li>
              <li>Do not upload harmful or malicious materials.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div id="products" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              3. Products & Pricing
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-xl font-medium">
              Product descriptions, availability, and pricing may change
              without prior notice. While we aim for accuracy,
              errors may occasionally occur.
            </p>
          </div>

          {/* Section 4 */}
          <div id="orders" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              4. Orders & Payments
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-xl font-medium">
              Orders are confirmed only after successful payment.
              We reserve the right to cancel any order due to
              stock unavailability or incorrect pricing.
            </p>
          </div>

          {/* Section 5 */}
          <div id="delivery" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              5. Delivery Policy
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-xl font-medium">
              Delivery timelines are estimated and may vary due
              to external factors. We are not responsible for
              delays caused by third-party transport services.
            </p>
          </div>

          {/* Section 6 */}
          <div id="liability" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-xl font-medium">
              Mix Concrete Tiles shall not be liable for any
              indirect, incidental, or consequential damages
              arising from the use of our website or products.
            </p>
          </div>

          {/* Section 7 */}
          <div id="ip" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              7. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-xl font-medium">
              All content including images, logos, and product
              descriptions are the property of Mix Concrete Tiles
              and may not be reproduced without permission.
            </p>
          </div>

          {/* Section 8 */}
          <div id="termination" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              8. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-xl font-medium">
              We reserve the right to suspend or terminate
              access to our website if any user violates these terms.
            </p>
          </div>

          {/* Section 9 */}
          <div id="contact">
            <h2 className="text-xl md:text-3xl font-semibold text-[#B33F18] mb-3">
              9. Contact Information
            </h2>
            <p className="text-gray-700 text-base md:text-xl font-medium">
              Website: www.mixconcretetiles.com
            </p>
            <p className="text-gray-700 text-base md:text-xl font-medium">
              Email: support@mixconcretetiles.com
            </p>
            <p className="text-gray-700 text-base md:text-xl font-medium">
              Phone: +91-XXXXXXXXXX
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
