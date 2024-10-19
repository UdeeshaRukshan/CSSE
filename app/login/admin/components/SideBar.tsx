

import React, { useEffect, useState } from 'react'
import { Moon, Sun, FileText, X, Home, Calendar, Users, User, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import PDFDocument from './PDFDocument';
import { pdf } from '@react-pdf/renderer'; // Used for generating PDF in an onClick handler
import Cookies from 'js-cookie';
import { saveAs } from 'file-saver'; // To trigger the file download

interface SideBarProps {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
  isSmallScreen: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
  data?: any[];
  statsData?: any[];
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen, isDarkMode, isSmallScreen, toggleSidebar, toggleDarkMode, data = [], statsData }) => {
  const router = useRouter();
  const [userData, setUserData] = useState({ name: '', email: '', img:'' });

  useEffect(() => {
    const userId = Cookies.get('userId');
    if (userId) {
      fetch(`http://localhost:4000/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData({ name: data.name, email: data.email, img: data.img });
        })
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, []);

  function logoutNavigate() {
    router.push('/');
  }

  const generateAndDownloadPDF = async () => {
    const blob = await pdf(<PDFDocument data={data} statsData={statsData} />).toBlob();
    saveAs(blob, 'employee_report.pdf');
  };
  

  return (
<aside className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block fixed lg:static inset-y-0 left-0 z-50 w-64 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transform transition-transform duration-200 ease-in-out ${isSmallScreen && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'} h-[calc(100vh-4rem)] flex flex-col`}>      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <span className="text-xl font-bold">Menu</span>
        {isSmallScreen && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => router.push('/login/admin/dashboard/')}>
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => router.push('/login/admin/employees/')}>
            <Calendar className="mr-2 h-4 w-4" />
            Employees
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => router.push('/login/admin/patients/')}>
            <Users className="mr-2 h-4 w-4" />
            Patients
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => router.push('/login/admin/appointments/')}>
            <User className="mr-2 h-4 w-4" />
            Appointments
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => router.push('/login/admin/doctors/')}>
            <User className="mr-2 h-4 w-4" />
            Doctors
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <Button variant="ghost" className="w-full justify-start mb-2" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2" onClick={generateAndDownloadPDF}>
          <FileText className="mr-2 h-4 w-4" />
          Export PDF
        </Button>
      </div>
      <div className="p-4 border-t border-gray-700 mt-32">
        <div className="flex items-center mb-2">
          <img src={userData.img} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <div className="font-semibold">{userData.name}</div>
            <div className="text-sm text-gray-400">{userData.email}</div>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900" onClick={logoutNavigate}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default SideBar;
