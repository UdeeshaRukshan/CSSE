"use client";
import React, { useState } from 'react';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi'; // Icons for the sidebar

const Dashboard = () => {
    const [activeTile, setActiveTile] = useState('overview'); // Default view

    // Define the content based on the selected tile
    const renderContent = () => {
        switch (activeTile) {
            case 'overview':
                return <Overview />;
            case 'settings':
                return <Settings />;
            case 'profile':
                return <Profile />;
            default:
                return <Overview />;
        }
    };

    return (
        <div className="flex min-h-screen bg-black">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white p-6 space-y-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Dashboard</h2>
                <ul className="space-y-4">
                    <li
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition duration-300 ${
                            activeTile === 'overview' ? 'bg-teal-500' : 'hover:bg-gray-700'
                        }`}
                        onClick={() => setActiveTile('overview')}
                    >
                        <FiHome className="mr-3 text-xl" />
                        Overview
                    </li>
                    <li
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition duration-300 ${
                            activeTile === 'settings' ? 'bg-teal-500' : 'hover:bg-gray-700'
                        }`}
                        onClick={() => setActiveTile('settings')}
                    >
                        <FiSettings className="mr-3 text-xl" />
                        Settings
                    </li>
                    <li
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition duration-300 ${
                            activeTile === 'profile' ? 'bg-teal-500' : 'hover:bg-gray-700'
                        }`}
                        onClick={() => setActiveTile('profile')}
                    >
                        <FiUser className="mr-3 text-xl" />
                        Profile
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-900 p-8 text-white">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

// Overview component
const Overview = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Statistics</h2>
                    <p>Summary of your key metrics.</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Performance</h2>
                    <p>Overview of your performance trends.</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Tasks</h2>
                    <p>Check your pending tasks.</p>
                </div>
            </div>
        </div>
    );
};

// Settings component
const Settings = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Settings</h1>
            <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                <p>Here you can update your account settings and preferences.</p>
            </div>
        </div>
    );
};

// Profile component
const Profile = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Profile</h1>
            <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                <p>Manage your profile details.</p>
            </div>
        </div>
    );
};

export default Dashboard;
