
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'
import SideBar from '../components/SideBar'
import { Calendar, X, Send, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'

// Define types for user and stats
type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string
};

type Stat = {
  title: string;
  value: number;
  icon: string;
};

export default function Employees() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isNewEmployeeFormOpen, setIsNewEmployeeFormOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [users, setUsers] = useState<User[]>([]) // Store fetched users here
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [selectedRole, setSelectedRole] = useState("")
  const itemsPerPage = 10
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
      setIsSidebarOpen(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Fetch users dynamically from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/users')
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error("Failed to fetch users:", error)
      }
    }
    fetchUsers()
  }, [])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleSendTemporaryPassword = (id: string) => {
    fetch(`http://localhost:4000/api/admin/reset/${id}`, { method: 'POST' })
      .then(res => console.log("Temporary password sent for user:", id))
      .catch(err => console.error(err))
  }

  const handleUpdateUser = (id: string) => {
    router.push(`/users/update/${id}`)
  }

  const handleDeleteUser = (id: string) => {
    fetch(`http://localhost:4000/api/users/${id}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter(user => user._id !== id)))
      .catch(err => console.error(err))
  }

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(users.length / itemsPerPage)

  return (
    <div className={`flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
        <div className="flex items-center cursor-pointer" onClick={toggleSidebar}>
          <img src="/placeholder.svg?height=32&width=32" alt="CarePulse Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">CarePulse</span>
        </div>
        <div className="flex items-center">
          <img src="/placeholder.svg?height=32&width=32" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
          <span className="ml-2">Admin</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar 
          isSidebarOpen={isSidebarOpen} 
          isDarkMode={isDarkMode} 
          isSmallScreen={isSmallScreen} 
          toggleSidebar={toggleSidebar} 
          toggleDarkMode={toggleDarkMode}
          statsData={[]} // Omitted statsData for now
        />
        {/* Main Content */}
        <main className={`flex-grow px-4 sm:px-6 lg:px-8`}>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Welcome, Admin</h1>
              <Dialog open={isNewEmployeeFormOpen} onOpenChange={setIsNewEmployeeFormOpen}>
                <DialogTrigger asChild>
                  <Button>
                    Add New Employee
                  </Button>
                </DialogTrigger>
                <DialogContent className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                  {/* Form for adding new employee (left unchanged) */}
                </DialogContent>
              </Dialog>
            </div>

            <div className={`overflow-x-auto rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
              <table className="w-full">
                <thead>
                  <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Email</th>
                    <th className="p-2 text-left">Created Date</th>
                    <th className="p-2 text-left">Actions</th>
                    <th className="p-2 text-left">OTP</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map(user => (
                    <tr key={user._id} className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                      <td className="p-2">{user.name}</td>
                      <td className="p-2">{user.email}</td>
                      <td className="p-2">{user.createdAt}</td>
                      <td className="p-2">
                        <Button variant="outline" size="sm" className={` mr-2 ${isDarkMode ? 'bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300`} onClick={() => handleUpdateUser(user._id)} >
                          Update
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteUser(user._id)}>
                          Delete
                        </Button>
                      </td>
                      <td className="p-2">
                        <Button variant="outline" size="sm" onClick={() => handleSendTemporaryPassword(user._id)}>
                          <MessageCircle className="mr-1 h-4 w-4" />
                          OTP
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <Button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <span>Page {currentPage} of {totalPages}</span>
              <Button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </main> 
      </div>
    </div>
  )
}
