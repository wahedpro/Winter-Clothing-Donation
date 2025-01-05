import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff  } from "react-icons/io";

const LoginPage = () => {
    const { handleLogin, handleLoginWithGoogle } = useContext(authContext);
    const [error, setError] = useState(""); // Stare to show error
    const [email, setEmail] = useState(""); // State to manage email input
    const [showPassword,setShowPassword] = useState(false); // state for showPassword or not
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then((res) => {
                toast.success("Login successful!");
                const redirectPath = location.state?.from?.pathname || "/";
                navigate(redirectPath);
            })
            .catch((err) => {
                setError("Invalid email or password.");
            });
    };

    const loginWithGoogle = () => {
        handleLoginWithGoogle()
            .then((res) => {
                toast.success("Logged in with Google!");
                const redirectPath = location.state?.from?.pathname || "/";
                navigate(redirectPath);
            })
            .catch((err) => {
                toast.error("Google login failed. Please try again.");
            });
    };

    const handleForgotPassword = () => {
        navigate("/ForgotPasswordPage", { state: { email } });
    };

    return (
        <div className="w-[80%] lg:w-[50%] mx-auto py-10">
            <Toaster position="top-right" reverseOrder={false} />
            <h1 className="text-2xl font-semibold text-center mb-5">Login</h1>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Email</label>
                <input className="p-3 border mb-5" value={email}
                    onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Enter your email" required />
                <label>Password</label>
                <div className='relative'>
                    <input className='p-3 border mb-5 w-full' type={showPassword ? 'text': 'password'} name="password" placeholder='Enter your password'  required />
                    <button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 bottom-5 flex items-center text-gray-500" >
                        {showPassword  ? <IoMdEyeOff size={20}/> :<IoMdEye size={20}/>}
                    </button>
                </div>
                <button className="text-white bg-[#18947d] px-4 py-2  hover:bg-[#1ebb9e]"> Login</button>
            </form>

            {/* Additional Options */}
            <div className="flex flex-col gap-3">
                <p className="text-blue-400 pt-2"><button onClick={handleForgotPassword}>Forget Password?</button></p>
                <button onClick={loginWithGoogle} className="p-3 border mb-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Login with Google</button>
                <p>Don't have an account? <NavLink to="/registration" className="text-blue-400">Register Now</NavLink></p>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
    );
};

export default LoginPage;
