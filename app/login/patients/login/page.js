
"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Moon, Sun, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Cookies from 'js-cookie';

export default function LoginScreen() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSignUp = () => {
    router.push('/login/patients/login/content');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
        credentials: 'include' // Include credentials for cookies
      });

      if (response.ok) {
        const data = await response.json();
        
        // Save userId and authToken as cookies
        Cookies.set('userId', data.userId, { expires: 1 });
        Cookies.set('authToken', data.authToken, { expires: 1 });

        router.push('/login/patients/login/new-appointment');
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
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
            
          </div>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-lg mb-8 text-gray-400">Login to your account.</p>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
            <Button
  type="submit"
  style={{ backgroundColor: '#10b981', color: 'white' }} // #10b981 is green-500 in Tailwind
  className="w-full hover:bg-green-600"
>
  Login
</Button>
<Button
  onClick={handleSignUp}
  style={{ backgroundColor: '#10b981', color: 'white' }}
  className="w-full hover:bg-green-600"
>
  Sign up
</Button>


          </form>
        </div>
        <div className="mt-8 text-sm text-gray-500">
        
        </div>
      </div>
      <div className="lg:flex-1 bg-gray-100">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/585/326/non_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png"
          alt="Doctor and medical team"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
