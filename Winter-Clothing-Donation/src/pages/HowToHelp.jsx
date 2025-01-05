import React from 'react';

const HowToHelp = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Page Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-[#18947d] mb-4">How to Help</h1>
                    <p className="text-lg text-gray-600">
                        Learn how you can make a difference this winter by helping those in need.
                    </p>
                </div>

                {/* Section: Why Help? */}
                <div className="bg-white shadow-md rounded-lg p-8 mb-10">
                    <h2 className="text-2xl font-bold text-[#18947d] mb-4">Why Help?</h2>
                    <p className="text-gray-600">
                        Winter can be harsh for those without proper clothing or shelter. By
                        contributing, you’re not just donating clothing—you’re offering warmth,
                        comfort, and hope to those in need. Together, we can make a difference in
                        the lives of many this winter season.
                    </p>
                </div>

                {/* Section: Ways to Help */}
                <div className="bg-white shadow-md rounded-lg p-8 mb-10">
                    <h2 className="text-2xl font-bold text-[#18947d] mb-4">Ways to Help</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Way 1 */}
                        <div className="bg-gray-100 rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-[#18947d] mb-3">Donate Clothes</h3>
                            <p className="text-gray-600">
                                Donate warm clothing like jackets, sweaters, and blankets to help
                                those in need stay warm this winter.
                            </p>
                        </div>
                        {/* Way 2 */}
                        <div className="bg-gray-100 rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-[#18947d] mb-3">Volunteer</h3>
                            <p className="text-gray-600">
                                Join our team to organize and distribute donations to those who
                                need them the most.
                            </p>
                        </div>
                        {/* Way 3 */}
                        <div className="bg-gray-100 rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-[#18947d] mb-3">Spread the Word</h3>
                            <p className="text-gray-600">
                                Share our mission on social media and with your community to inspire
                                more people to help.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section: Call to Action */}
                <div className="bg-[#18947d] text-white rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
                    <p className="text-lg mb-6">
                        Join our mission today and help bring warmth and hope to those in need.
                    </p>
                    <button className="bg-white text-[#18947d] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowToHelp;