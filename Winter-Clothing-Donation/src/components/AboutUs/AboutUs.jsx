
function AboutUs() {
    return (
        <section className="bg-blue-50 py-10 px-6 md:px-20 my-5">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-3xl font-bold text-[#18947d] mb-6">About Us</h2>
                <p className="text-lg md:text-xl text-gray-700  mb-8">
                    At Winter Donation, our mission is to provide warmth and hope to those in need
                    during the harsh winter months. Thousands of vulnerable individuals, especially in
                    rural and low-income areas, struggle to stay warm. Through our platform, we connect
                    generous donors with dedicated volunteers to bring comfort and warmth to every
                    corner of Bangladesh.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-sm rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-[#18947d] mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            A world where everyone has access to basic needs and the chance to thrive.
                        </p>
                    </div>
                    <div className="bg-white shadow-sm rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-[#18947d] mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            Empower communities by distributing warm clothing and fostering a spirit of care
                            and compassion.
                        </p>
                    </div>
                    <div className="bg-white shadow-sm rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-[#18947d] mb-4">Our Values</h3>
                        <p className="text-gray-600">
                            Compassion, community, and integrity guide every action we take.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
