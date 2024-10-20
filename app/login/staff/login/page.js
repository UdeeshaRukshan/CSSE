'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

const StaffLoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const url = `http://localhost:4000/api/staff/login/${username}/${password}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                sessionStorage.setItem('user', JSON.stringify({
                    ...data.staff,
                    isLoggedIn: true
                }));
                
                console.log('Login successful:', data);
                router.push('/login/staff/dashboard');
            } else {
                console.error('Login failed:', data.message);
                setError(data.message);
                alert(data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred while logging in.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg transform transition-all hover:scale-105">
                <h1 className="text-4xl font-bold text-center text-white mb-10">Staff Login</h1>
                {error && <p className="text-red-500 text-center mb-6">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="form-group">
                        <label htmlFor="username" className="block text-gray-400 font-semibold text-lg">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                            placeholder="Enter your username"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-gray-400 font-semibold text-lg">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                            placeholder="Enter your password"
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-lg font-bold text-lg shadow-md transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StaffLoginPage;



