import React, { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(authContext);

    return (
        <div className="p-6 min-h-screen">
            <div className="border shadow-sm p-8">
                <div className="flex flex-col items-center  gap-6">
                    <h1 className="text-xl lg:text-2xl font-bold text-[#18947d] mb-4"> Welcome, {user.displayName}</h1>
                    <img src={user?.photoURL} alt="Profile" className="w-32 h-32 object-cover rounded-full border border-gray-300" />
                    <div>
                        <p className="text-lg font-semibold text-gray-700">Name: {user.displayName}</p>
                        <p className="lg:text-lg text-xs font-semibold text-gray-700">Email: {user.email}</p>
                    </div>
                    <NavLink to='/updateProfilePage'  className="bg-[#18947d] text-white px-6 py-2 hover:bg-[#1ebb9e]" >Update Profile</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
