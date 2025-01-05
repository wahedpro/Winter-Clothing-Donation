import React, { useContext, useState } from 'react';
import { authContext } from '../provider/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff  } from "react-icons/io";

const RegistrationPage = () => {
    const {handleRegister,handleManageProfile} = useContext(authContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError("");
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.photoURL.value;
        const password = e.target.password.value;

        // Validation for minimum length
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        // Validation for uppercase letter
        if (!/[A-Z]/.test(password)) {
            setError("Password must include at least one uppercase letter.");
            return;
        }
        // Validation for lowercase letter
        if (!/[a-z]/.test(password)) {
            setError("Password must include at least one lowercase letter.");
            return;
        }
        handleRegister(email, password)
        .then(res=>{
            handleManageProfile(name,image)
        })
        toast.success("successfully registered");
        navigate("/");
    }
    return (
        <div className='w-[80%] lg:w-[50%] mx-auto py-10'>
            <h1 className='text-2xl font-semibold text-center mb-5'>Registration</h1>
            <form onSubmit={handleSubmit} className='flex flex-col' >
                <label >Name</label>
                <input className='p-3 border mb-5' type="text" name="name" placeholder='Enter your name' required />
                <label >Email</label>
                <input className='p-3 border mb-5' type="email" name="email" placeholder='Enter your email' required />
                <label >Photo URL</label>
                <input className='p-3 border mb-5' type="text" name="photoURL" placeholder='Enter your photo url' required />
                <label >Password</label>
                <div className='relative'>
                    <input className='p-3 border mb-5 w-full' type={showPassword ? 'text': 'password'} name="password" placeholder='Enter your password'  required />
                    <button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 bottom-5 flex items-center text-gray-500" >
                        {showPassword  ? <IoMdEyeOff size={20}/> :<IoMdEye size={20}/>}
                    </button>
                </div>
                <button className="text-white bg-[#18947d] px-4 py-2  hover:bg-[#1ebb9e] mb-3">Register</button>
            </form>
                {error && <p className='text-red-500 mb-5'>{error}</p>}
            <p>Already have an account? <NavLink to="/login" className="text-blue-400">Login Now</NavLink></p>
        </div>
    );
};

export default RegistrationPage;
