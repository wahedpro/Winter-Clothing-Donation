import React from 'react';

const Statistics = () => {
    const stats = [
        { label: "Clothing Items Donated", value: "12,500+" },
        { label: "Volunteers Engaged", value: "2,100+" },
        { label: "Families Helped", value: "8,000+" },
    ];
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20 mb-5">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-3xl font-bold text-[#18947d] mb-8">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white shadow-sm rounded-lg p-6">
                            <h3 className="text-4xl md:text-4xl font-bold text-[#18947d] mb-4">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;