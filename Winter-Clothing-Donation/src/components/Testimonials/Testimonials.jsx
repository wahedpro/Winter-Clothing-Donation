import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Amina Begum",
            feedback:
                "Thanks to the Winter Donation platform, my family received warm clothes during a harsh winter. It truly made a difference in our lives.",
            location: "Dhaka, Bangladesh",
        },
        {
            name: "Rahim Ahmed",
            feedback:
                "Volunteering here was an enriching experience. Seeing the smiles of those we helped was priceless.",
            location: "Chittagong, Bangladesh",
        },
        {
            name: "Sophia Rahman",
            feedback:
                "Donating through this platform is seamless. Knowing my contributions reach those in need gives me immense satisfaction.",
            location: "Sylhet, Bangladesh",
        },
    ];
    return (
        <section className="bg-blue-50 py-16 px-6 md:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-3xl font-bold text-[#18947d] mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm rounded-lg p-6 text-center"
                        >
                            <p className="text-gray-700 italic mb-4">
                                "{testimonial.feedback}"
                            </p>
                            <h3 className="text-lg font-semibold text-[#18947d]">
                                {testimonial.name}
                            </h3>
                            <p className="text-gray-500 text-sm">{testimonial.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;