import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
    const { user, handleLogout } = useContext(authContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className="max-w-7xl mx-auto flex justify-between items-center py-5 border-b">
                <h1 className="text-xl font-semibold">
                    <NavLink to="/" className="text-[#18947d]">Winter Clothing Donation </NavLink>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-5">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-[#18947d] font-semibold" : "text-gray-600"}>Home</NavLink>
                    <NavLink to="donationCampaignsPage" className={({ isActive }) => isActive ? "text-[#18947d] font-semibold" : "text-gray-600"}>Donation Campaigns</NavLink>
                    <NavLink to="/howToHelp" className={({ isActive }) => isActive ? "text-[#18947d] font-semibold" : "text-gray-600"} >How to Help</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-[#18947d] font-semibold" : "text-gray-600"} > Dashboard</NavLink>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <div className="flex gap-2 items-center">
                            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User Profile"/>
                            <button onClick={handleLogout} className="text-white bg-[#18947d] px-4 py-2 hover:bg-[#1ebb9e]">Logout</button>
                        </div>
                    ) : (
                        <NavLink to="login">
                            <button className="text-white bg-[#18947d] px-5 py-2 hover:bg-[#1ebb9e]">Login</button>
                        </NavLink>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 focus:outline-none"><HiMenuAlt3 size={25} /></button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg py-4">
                    <div className="flex flex-col items-center gap-4">
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)}className={({ isActive }) =>isActive ? "text-[#18947d] font-semibold" : "text-gray-600"}>Home</NavLink>
                        <NavLink to="donationCampaignsPage"onClick={() => setIsMenuOpen(false)}className={({ isActive }) =>isActive ? "text-[#18947d] font-semibold" : "text-gray-600"}>Donation Campaigns</NavLink>
                        <NavLink to="/howToHelp" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-[#18947d] font-semibold" : "text-gray-600"}>How to Help</NavLink>
                        <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-[#18947d] font-semibold" : "text-gray-600"}>Dashboard</NavLink>
                        
                        {user ? (
                            <button onClick={() => { handleLogout(); setIsMenuOpen(false);
                                }} className="text-white bg-[#18947d] px-4 py-2  hover:bg-[#1ebb9e] ">Logout</button>
                        ) : (
                            <NavLink to="login"><button onClick={() => setIsMenuOpen(false)}className="text-white bg-[#18947d] px-5 py-2  hover:bg-[#1ebb9e] ">Login</button></NavLink>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;