import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../provider/AuthProvider";

const MyProfilePage = () => {

    const { user, updateUserProfile } = useContext(authContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        updateUserProfile(name, photoURL)
            .then(() => {
                toast.success("Profile updated successfully!");
                navigate("/dashboard"); // Redirect to the dashboard
            })
            .catch((error) => {
                toast.error("Failed to update profile. Please try again.");
                console.error("Profile Update Error:", error);
            });
    };


    return (
        <div className="flex items-center justify-center py-20">
            <div className="bg-white shadow-sm border p-6 w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Update Information</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label >Name</label>
                    <input className='p-3 border mb-5' type="text" name="name" placeholder='Enter your name' required />
                    <label >Photo URL</label>
                    <input className='p-3 border mb-5' type="text" name="photoURL" placeholder='Enter your photo url' required />
                    <button className="text-white bg-[#18947d] px-4 py-2  hover:bg-[#1ebb9e]"> Update</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfilePage;
