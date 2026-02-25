import React from "react";

const RefundPolicy = () => {
    return (
        <section className="bg-gray-100 min-h-screen py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Sidebar */}
                <div className="bg-[#F5BA78]/20 p-8">
                    <h2 className="text-3xl font-bold text-[#B33F18] mb-6">
                        Refund Policy
                    </h2>

                    <ul className="space-y-4 text-lg font-semibold text-gray-700">
                        <li><a href="#overview" className="hover:text-[#B33F18]">1. Overview</a></li>
                        <li><a href="#eligibility" className="hover:text-[#B33F18]">2. Refund Eligibility</a></li>
                        <li><a href="#nonrefund" className="hover:text-[#B33F18]">3. Non-Refundable Items</a></li>
                        <li><a href="#process" className="hover:text-[#B33F18]">4. Refund Process</a></li>
                        <li><a href="#timeline" className="hover:text-[#B33F18]">5. Processing Time</a></li>
                        <li><a href="#contact" className="hover:text-[#B33F18]">6. Contact Information</a></li>
                    </ul>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-10">
                    <h1 className="text-4xl font-bold text-[#B33F18] mb-8">
                        Refund Policy – Mix Concrete Tiles
                    </h1>

                    <p className="text-gray-600 mb-10 text-xl font-semibold">
                        At <strong>Mix Concrete Tiles</strong>, we aim to ensure customer
                        satisfaction. This Refund Policy outlines the terms under which
                        refunds may be granted for our products.
                    </p>

                    {/* Section 1 */}
                    <div id="overview" className="mb-10">
                        <h2 className="text-3xl font-semibold text-[#B33F18] mb-3">
                            1. Overview
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                            Refunds are applicable only under specific conditions,
                            such as damaged products during delivery or incorrect
                            items supplied.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div id="eligibility" className="mb-10">
                        <h2 className="text-3xl font-semibold text-[#B33F18] mb-3">
                            2. Refund Eligibility
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg font-medium">
                            <li>Products damaged during transportation</li>
                            <li>Incorrect product delivered</li>
                            <li>Manufacturing defects reported within 48 hours</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div id="nonrefund" className="mb-10">
                        <h2 className="text-3xl font-semibold text-[#B33F18] mb-3">
                            3. Non-Refundable Items
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                            Customized or special-order concrete tiles and blocks
                            are non-refundable. Products that have been installed
                            or used are also not eligible for refunds.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div id="process" className="mb-10">
                        <h2 className="text-3xl font-semibold text-[#B33F18] mb-3">
                            4. Refund Process
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                            Customers must contact us with order details and
                            supporting photos (if applicable). After verification,
                            refunds will be processed accordingly.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div id="timeline" className="mb-10">
                        <h2 className="text-3xl font-semibold text-[#B33F18] mb-3">
                            5. Processing Time
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                            Approved refunds will be processed within 7–10
                            business days through the original payment method.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div id="contact">
                        <h2 className="text-3xl font-semibold text-[#B33F18] mb-3">
                            6. Contact Information
                        </h2>
                        <p className="text-gray-700 text-lg font-medium">
                            Website: www.mixconcretetiles.com
                        </p>
                        <p className="text-gray-700 text-lg font-medium">
                            Email: support@mixconcretetiles.com
                        </p>
                        <p className="text-gray-700 text-lg font-medium">
                            Phone: +91-XXXXXXXXXX
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
