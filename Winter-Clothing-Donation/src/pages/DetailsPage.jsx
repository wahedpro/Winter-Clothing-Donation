import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const DetailsPage = () => {
    const singleData = useLoaderData(); 
    const { image, title, description, division } = singleData;

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
        e.target.reset();
    };

    return (
        <div className="py-10 min-h-screen">
            <Toaster position="top-right" reverseOrder={false} />
            {/* Campaign Details */}
            <div className="bg-white shadow-sm border rounded-lg p-6 max-w-4xl mx-auto mb-6">
                <img src={image} alt={title} className="w-full h-60 object-cover rounded-lg" />
                <h1 className="text-2xl font-bold text-[#18947d] mt-4">{title}</h1>
                <p className="text-gray-700 mt-2">{description}</p>
                <p className="text-sm font-semibold text-gray-500 mt-2">Division: {division}</p>
            </div>
            {/* Donation Form */}
            <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6 max-w-xl mx-auto border">
                <h2 className="text-xl font-bold text-[#18947d] mb-4">Donation Form</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-600 mb-2">Quantity of Items</label>
                        <input type="number" name="quantity" placeholder="e.g., 2 jackets, 3 blankets" className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Item Type</label>
                        <select name="itemType" className="w-full border border-gray-300 rounded-lg px-4 py-2" required >
                            <option value="" disabled selected> Select an item type </option>
                            <option value="blanket">Blanket</option>
                            <option value="jacket">Jacket</option>
                            <option value="sweater">Sweater</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Pickup Location</label>
                        <input type="text" name="pickupLocation" placeholder="Example. House 12, Road 5, Dhanmondi, Dhaka" className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2"> Additional Notes (Optional) </label>
                        <textarea name="notes" placeholder="Any special instructions..." className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                    </div>
                    <button type="submit" className="text-white bg-[#18947d] px-4 py-2 rounded-lg hover:bg-[#1ebb9e] transition">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default DetailsPage;