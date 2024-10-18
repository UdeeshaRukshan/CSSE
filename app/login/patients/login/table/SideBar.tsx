import React from 'react'
import { Moon, Sun, FileText, X, Home, Calendar, Users, User, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

import { PDFDownloadLink } from '@react-pdf/renderer';

interface SideBarProps {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
  isSmallScreen: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
  appointmentData: any[];
  statsData: any[];
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen, isDarkMode, isSmallScreen, toggleSidebar, toggleDarkMode, appointmentData}) => {
  const router = useRouter()

  return (
    <aside className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out ${isSmallScreen && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'} h-[calc(100vh-4rem)] flex flex-col`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <span className="text-xl font-bold">Menu</span>
        {isSmallScreen && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => router.push('/login/patients/login/table')}>
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => router.push('/login/patients/login/patient')}>
            <Calendar className="mr-2 h-4 w-4" />
            Patients
          </Button>
          
        </div>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <Button variant="ghost" className="w-full justify-start mb-2" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      
      </div>
      <div className="p-4 border-t border-gray-700 mt-36">
        <div className="flex items-center mb-2">
          <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <div className="font-semibold">John Doe</div>
            <div className="text-sm text-gray-400">john@example.com</div>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  )
}

export default SideBar
