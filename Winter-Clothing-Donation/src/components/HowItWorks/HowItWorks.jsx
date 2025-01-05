import React from "react";
import { FaDonate, FaHandHoldingHeart, FaTruck } from "react-icons/fa";

function HowItWorks() {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20 mb-5">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-3xl font-bold text-[#18947d] mb-6">How It Works</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                    Donating to those in need has never been easier. Follow these simple steps to make
                    a big impact and bring warmth to lives during the harsh winter.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center bg-white shadow-sm rounded-lg p-6">
                        <div className="text-[#18947d] text-6xl mb-4">
                            <FaDonate />
                        </div>
                        <h3 className="text-xl font-semibold text-[#18947d] mb-2">Step 1: Donate</h3>
                        <p className="text-gray-600 text-center">
                            Choose the items you’d like to donate, like jackets, blankets, or sweaters.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center bg-white shadow-sm rounded-lg p-6">
                        <div className="text-[#18947d] text-6xl mb-4">
                            <FaHandHoldingHeart />
                        </div>
                        <h3 className="text-xl font-semibold text-[#18947d] mb-2">Step 2: Volunteer</h3>
                        <p className="text-gray-600 text-center">
                            Our volunteers collect and prepare donations for distribution.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center bg-white shadow-sm rounded-lg p-6">
                        <div className="text-[#18947d] text-6xl mb-4">
                            <FaTruck />
                        </div>
                        <h3 className="text-xl font-semibold text-[#18947d] mb-2">Step 3: Deliver</h3>
                        <p className="text-gray-600 text-center">
                            Donations are distributed to individuals and families in need.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
