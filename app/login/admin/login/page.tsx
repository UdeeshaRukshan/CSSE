// 'use client'

// import { useState } from 'react'
// import { Moon, Sun, User, Mail, Phone } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export default function LoginScreen() {
//   const [isDarkMode, setIsDarkMode] = useState(true)

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

//   return (
//     <div className={`min-h-screen flex flex-col lg:flex-row ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//       <div className="lg:flex-1 p-8 lg:p-12 flex flex-col">
//         <div className="flex items-center justify-between mb-12">
//           <div className="flex items-center">
//             <img src="/placeholder.svg?height=32&width=32" alt="CarePulse Logo" className="w-8 h-8 mr-2" />
//             <span className="text-xl font-bold">CarePulse</span>
//           </div>
//           <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
//             {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//           </Button>
//         </div>
//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">Hi there, ....</h1>
//           <p className="text-lg mb-8 text-gray-400">Get Started with Appointments.</p>
//           <form className="space-y-6">
//             <div>
//               <Label htmlFor="fullName">Full name</Label>
//               <Input id="fullName" type="text" icon={<User className="text-gray-500" />} defaultValue="Adrian Hajdin" />
//             </div>
//             <div>
//               <Label htmlFor="email">Email address</Label>
//               <Input id="email" type="email" icon={<Mail className="text-gray-500" />} defaultValue="adrian@jsmastery.pro" />
//             </div>
//             <div>
//               <Label htmlFor="phone">Phone number</Label>
//               <Input id="phone" type="tel" icon={<Phone className="text-gray-500" />} defaultValue="+00 0342 0453 34" />
//             </div>
//             <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
//               Get Started
//             </Button>
//           </form>
//         </div>
//         <div className="mt-8 text-sm text-gray-500">
//           @carepulse copyright
//         </div>
//       </div>
//       <div className="lg:flex-1 bg-gray-100">
//         <img
//           src="public/assets/images/loginImg.png"
//           alt="Doctor and medical team"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   )
// }


'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Moon, Sun, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginScreen() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    router.push('/login/admin/dashboard'); // Navigate to the login admin page
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="lg:flex-1 p-8 lg:p-12 flex flex-col">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=32&width=32" alt="CarePulse Logo" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">CarePulse</span>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-lg mb-8 text-gray-400">Login to your account.</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
              Login
            </Button>
          </form>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          @carepulse copyright
        </div>
      </div>
      <div className="lg:flex-1 bg-gray-100">
        <img
          src="/public/assets/images/loginImg.png"
          alt="Doctor and medical team"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
