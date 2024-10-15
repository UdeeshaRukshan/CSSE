'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const StaffLoginPage = () => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle staff login logic here
        const role = "staff"; // Define the role or fetch it based on your logic
        router.push(`/login/${role}/table`); // Navigates to /login/staff/table
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Staff Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="email" className="block text-gray-300 font-semibold">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-gray-300 font-semibold">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StaffLoginPage;
