'use client';  // Ensure it's a client-side component

import { useRouter } from 'next/navigation';  // For Next.js 13+ client-side routing

const LoginPage = () => {
    const router = useRouter();

    const handleRoleSelection = (role) => {
        if (role) {
            console.log(`Navigating to: /login/${role}/login`);
            // Redirect to the corresponding login page based on the selected role
            router.push(`/login/${role}/login`);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#002f5c]">
            <div className="bg-[#1a1a1a] rounded-xl shadow-lg p-10 max-w-sm w-full">
                <h1 className="text-2xl font-bold text-center text-white mb-8">Select Your Role</h1>
                <div className="flex flex-col gap-6">
                    <button 
                        onClick={() => handleRoleSelection('patients')}
                        className="w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-110 mx-auto"
                    >
                        Patient
                    </button>
                    <button 
                        onClick={() => handleRoleSelection('admin')}
                        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-110 mx-auto"
                    >
                        Admin
                    </button>
                    <button 
                        onClick={() => handleRoleSelection('doctor')}
                        className="w-16 h-16 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-110 mx-auto"
                    >
                        Doctor
                    </button>
                    <button 
                        onClick={() => handleRoleSelection('staff')}
                        className="w-16 h-16 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-110 mx-auto"
                    >
                        Staff
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
