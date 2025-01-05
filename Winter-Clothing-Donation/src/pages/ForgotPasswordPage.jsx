import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import auth from "../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

const ForgotPasswordPage = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || ""); // Pre-fill email if passed

    // const handleReset = () => {
    //     sendPasswordResetEmail(auth, email);
    //     window.location.href = "https://mail.google.com";
    // };

    const handleReset = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent! Check your inbox.");
                setTimeout(() => {
                    window.location.href = "https://mail.google.com"; 
                },1000); 
            })
    };

    return (
        <div className="flex items-center justify-center py-24">
            <form onSubmit={handleReset}
                className="bg-white shadow-sm border p-6 w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Email</label>
                    <input type="email" name="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full border border-gray-300 px-4 py-2" required/>
                </div>
                <button type="submit" className="text-white bg-[#18947d] px-5 py-2 hover:bg-[#1ebb9e]">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;