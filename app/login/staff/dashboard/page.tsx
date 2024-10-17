'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, FileText, Menu, X, Plus, Calendar, User, Send, ChevronLeft, ChevronRight, Home, Users, Settings, LogOut, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'
import { title } from 'process'

const appointmentsData = [
  { patient: 'Phoenix Baker', date: 'Jan 4, 2022', status: 'Scheduled', doctor: 'Dr. Alex Ramirez' },
  { patient: 'Candice Wu', date: 'Jan 2, 2022', status: 'Pending', doctor: 'Dr. Michael May' },
  { patient: 'Lana Steiner', date: 'Jan 4, 2022', status: 'Cancelled', doctor: 'Dr. Jasmine Lee' },
  { patient: 'Drew Cano', date: 'Jan 8, 2022', status: 'Scheduled', doctor: 'Dr. Hardik Sharma' },
  { patient: 'Natali Craig', date: 'Jan 6, 2022', status: 'Pending', doctor: 'Dr Aiyana Cruz' },
  ...Array(20).fill(null).map((_, i) => ({
    patient: `Patient ${i + 6}`,
    date: `Jan ${10 + i}, 2022`,
    status: ['Scheduled', 'Pending', 'Cancelled'][i % 3],
    doctor: `Dr. Doctor ${i + 6}`
  }))
]

const statsData = [
  { title: 'Total number of work shifts', value: 94, icon: '📅' },
  { title: 'Total number of available employees', value: 32, icon: '👨‍💼' },
  { title: 'Total number of workshift cancellation requests', value: 56, icon: '❌' },
  { title: 'Total number of workshift staff complains', value: 56, icon: '📄' },
  { title: 'Total number of recruiments ongoing', value: 56, icon: '👨‍💻' },
]

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isNewEmployeeFormOpen, setIsNewEmployeeFormOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [selectedRole, setSelectedRole] = useState("")

  const itemsPerPage = 10
  const totalPages = Math.ceil(appointmentsData.length / itemsPerPage)
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
      setIsSidebarOpen(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleSendTemporaryPassword = () => {
    console.log("Sending temporary password...")
  }

  const paginatedAppointments = appointmentsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
        <div className="flex items-center cursor-pointer" onClick={toggleSidebar}>
          <img src="/placeholder.svg?height=32&width=32" alt="CarePulse Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">CarePulse</span>
        </div>
        <div className="flex items-center">
          <img src="/placeholder.svg?height=32&width=32" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
          <span className="ml-2">Staff Manager</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
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

              <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => router.push('/login/staff/dashboard/')}>
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <User className="mr-2 h-4 w-4" />
                Employees
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                Employee Progress
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2" onClick={()=> router.push('/login/staff/dashboard/workshift')}>
                <Users className="mr-2 h-4 w-4" />
                Work Shifts
              </Button>
              
            </div>
          </nav>
          <div className="p-4 border-t border-gray-700">
            <Button variant="ghost" className="w-full justify-start mb-2" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <FileText className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
          </div>
          <div className="p-4 border-t border-gray-700 mt-34">
          <Button variant="ghost" className="w-full justify-start mb-2">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
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

        {/* Main Content */}
        <main className={`flex-grow px-4 sm:px-6 lg:px-8 ${isSidebarOpen ? '' : ''}`}>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Welcome, Staff Manager</h1>
              <Dialog open={isNewEmployeeFormOpen} onOpenChange={setIsNewEmployeeFormOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Employee
                  </Button>
                </DialogTrigger>
                <DialogContent className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                  <DialogHeader>
                    <DialogTitle>Add New Employee</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter employee name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter employee email" />
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Select value={selectedRole} onValueChange={setSelectedRole}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="nurse">Nurse</SelectItem>
                          <SelectItem value="receptionist">Receptionist</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input id="startDate" type="date" />
                    </div>
                    <div className="flex justify-between">
                      <Button type="submit" className="w-1/2 mr-2">Add Employee</Button>
                      <Button type="button" variant="outline" className="w-1/2 ml-2" onClick={handleSendTemporaryPassword}>
                        <Send className="mr-2 h-4 w-4" />
                        Send Temp Password
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {statsData.map((stat, index) => (
                <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300 hover:shadow-lg`}>
                  <div className="text-3xl mb-2">{stat.icon} {stat.value}</div>
                  <div className="text-sm">{stat.title}</div>
                </div>
              ))}
            </div>

            <div className={`overflow-x-auto rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
              <table className="w-full">
                <thead>
                  <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <th className="p-2 text-left">Patient</th>
                    <th className="p-2 text-left">Date</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Doctor</th>
                    <th className="p-2 text-left">Actions</th>
                    <th className="p-2 text-left">OTP</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedAppointments.map((appointment, index) => (
                    <tr key={index} className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                      <td className="p-2">{appointment.patient}</td>
                      <td className="p-2">{appointment.date}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          appointment.status === 'Scheduled' ? 'bg-green-500 text-white' :
                          appointment.status === 'Pending' ? 'bg-yellow-500 text-black' :
                          'bg-red-500 text-white'
                        }`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="p-2">{appointment.doctor}</td>
                      <td className="p-2">
                        <Button variant="outline" size="sm" className="mr-2">
                          <Calendar className="mr-1 h-4 w-4" />
                          Schedule
                        </Button>
                        <Button variant="outline" size="sm">
                          <X className="mr-1 h-4 w-4" />
                          Cancel
                        </Button>
                      </td>
                      <td className="p-2">
                        <Button variant="outline" size="sm">
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