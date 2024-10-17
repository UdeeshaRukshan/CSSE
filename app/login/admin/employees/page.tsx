// import Image from "next/image";
// import Link from "next/link";

// import { StatCard } from "@/components/StatCard";
// import { columns } from "@/components/table/columns";
// import { DataTable } from "@/components/table/DataTable";
// import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

// const AdminPage = async () => {
//   const appointments = await getRecentAppointmentList();

//   return (
//     <div className="mx-auto flex max-w-7xl flex-col space-y-14">
//       <header className="admin-header">
//         <Link href="/" className="cursor-pointer">
//           <Image
//             src="/assets/icons/logo-full.svg"
//             height={32}
//             width={162}
//             alt="logo"
//             className="h-8 w-fit"
//           />
//         </Link>

//         <p className="text-16-semibold">Admin Dashboard</p>
//       </header>

//       <main className="admin-main">
//         <section className="w-full space-y-4">
//           <h1 className="header">Welcome 👋</h1>
//           <p className="text-dark-700">
//             Start the day with managing new appointments
//           </p>
//         </section>

//         <section className="admin-stat">
//           <StatCard
//             type="appointments"
//             count={appointments.scheduledCount}
//             label="Scheduled appointments"
//             icon={"/assets/icons/appointments.svg"}
//           />
//           <StatCard
//             type="pending"
//             count={appointments.pendingCount}
//             label="Pending appointments"
//             icon={"/assets/icons/pending.svg"}
//           />
//           <StatCard
//             type="cancelled"
//             count={appointments.cancelledCount}
//             label="Cancelled appointments"
//             icon={"/assets/icons/cancelled.svg"}
//           />
//         </section>

//         <DataTable columns={columns} data={appointments.documents} />
//       </main>
//     </div>
//   );
// };

// export default AdminPage;

// 'use client'

// import { useState } from 'react'
// import { Moon, Sun, FileText, Menu, X, Plus, Calendar, User, Send } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select } from "@/components/ui/select"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


// const appointmentsData = [
//   { patient: 'Phoenix Baker', date: 'Jan 4, 2022', status: 'Scheduled', doctor: 'Dr. Alex Ramirez' },
//   { patient: 'Candice Wu', date: 'Jan 2, 2022', status: 'Pending', doctor: 'Dr. Michael May' },
//   { patient: 'Lana Steiner', date: 'Jan 4, 2022', status: 'Cancelled', doctor: 'Dr. Jasmine Lee' },
//   { patient: 'Drew Cano', date: 'Jan 8, 2022', status: 'Scheduled', doctor: 'Dr. Hardik Sharma' },
//   { patient: 'Natali Craig', date: 'Jan 6, 2022', status: 'Pending', doctor: 'Dr Aiyana Cruz' },
// ]

// const statsData = [
//   { title: 'Total number of scheduled appointments', value: 94, icon: '📅' },
//   { title: 'Total number of pending appointments', value: 32, icon: '⏳' },
//   { title: 'Total number of cancelled appointments', value: 56, icon: '❌' },
// ]

// export default function AdminPage() {
//   const [isDarkMode, setIsDarkMode] = useState(true)
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isNewEmployeeFormOpen, setIsNewEmployeeFormOpen] = useState(false)

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

//   const handleSendTemporaryPassword = () => {
//     // Logic to send temporary password
//     console.log("Sending temporary password...")
//   }

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
//       {/* Header */}
//       <header className="flex justify-between items-center p-4 border-b border-gray-700">
//         <div className="flex items-center cursor-pointer" onClick={toggleSidebar}>
//           <img src="/placeholder.svg?height=32&width=32" alt="CarePulse Logo" className="w-8 h-8 mr-2" />
//           <span className="text-xl font-bold">CarePulse</span>
//         </div>
//         <div className="flex items-center">
//           <img src="/placeholder.svg?height=32&width=32" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
//           <span className="ml-2">Admin</span>
//         </div>
//       </header>

//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
//         <div className="flex justify-between items-center p-4 border-b border-gray-700">
//           <span className="text-xl font-bold">Menu</span>
//           <Button variant="ghost" size="icon" onClick={toggleSidebar}>
//             <X className="h-6 w-6" />
//           </Button>
//         </div>
//         <nav className="p-4">
//           <Button variant="ghost" className="w-full justify-start mb-2" onClick={toggleDarkMode}>
//             {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </Button>
//           <Button variant="ghost" className="w-full justify-start">
//             <FileText className="mr-2 h-4 w-4" />
//             Export PDF
//           </Button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <main className="p-4">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//           <Dialog open={isNewEmployeeFormOpen} onOpenChange={setIsNewEmployeeFormOpen}>
//             <DialogTrigger asChild>
//               <Button>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add New Employee
//               </Button>
//             </DialogTrigger>
//             <DialogContent className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
//               <DialogHeader>
//                 <DialogTitle>Add New Employee</DialogTitle>
//               </DialogHeader>
//               <form className="space-y-4">
//                 <div>
//                   <Label htmlFor="name">Name</Label>
//                   <Input id="name" placeholder="Enter employee name" />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" type="email" placeholder="Enter employee email" />
//                 </div>
//                 <div>
//                   <Label htmlFor="role">Role</Label>
//                   <Select id="role">
//                     <option value="">Select a role</option>
//                     <option value="doctor">Doctor</option>
//                     <option value="nurse">Nurse</option>
//                     <option value="receptionist">Receptionist</option>
//                     <option value="admin">Admin</option>
//                   </Select>
//                 </div>
//                 <div>
//                   <Label htmlFor="startDate">Start Date</Label>
//                   <Input id="startDate" type="date" />
//                 </div>
//                 <div className="flex justify-between">
//                   <Button type="submit" className="w-1/2 mr-2">Add Employee</Button>
//                   <Button type="button" variant="outline" className="w-1/2 ml-2" onClick={handleSendTemporaryPassword}>
//                     <Send className="mr-2 h-4 w-4" />
//                     Send Temp Password
//                   </Button>
//                 </div>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           {statsData.map((stat, index) => (
//             <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300 hover:shadow-lg`}>
//               <div className="text-3xl mb-2">{stat.icon} {stat.value}</div>
//               <div className="text-sm">{stat.title}</div>
//             </div>
//           ))}
//         </div>

//         {/* Appointments Table */}
//         <div className={`overflow-x-auto rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
//           <table className="w-full">
//             <thead>
//               <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
//                 <th className="p-2 text-left">Patient</th>
//                 <th className="p-2 text-left">Date</th>
//                 <th className="p-2 text-left">Status</th>
//                 <th className="p-2 text-left">Doctor</th>
//                 <th className="p-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointmentsData.map((appointment, index) => (
//                 <tr key={index} className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300`}>
//                   <td className="p-2">{appointment.patient}</td>
//                   <td className="p-2">{appointment.date}</td>
//                   <td className="p-2">
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       appointment.status === 'Scheduled' ? 'bg-green-500 text-white' :
//                       appointment.status === 'Pending' ? 'bg-yellow-500 text-black' :
//                       'bg-red-500 text-white'
//                     }`}>
//                       {appointment.status}
//                     </span>
//                   </td>
//                   <td className="p-2">{appointment.doctor}</td>
//                   <td className="p-2">
//                     <Button variant="outline" size="sm" className="mr-2">
//                       <Calendar className="mr-1 h-4 w-4" />
//                       Schedule
//                     </Button>
//                     <Button variant="outline" size="sm">
//                       <X className="mr-1 h-4 w-4" />
//                       Cancel
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, FileText, Menu, X, Plus, Calendar, User, Send, ChevronLeft, ChevronRight, Home, Users, Settings, LogOut, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'
import SideBar from '../components/SideBar'

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
  { title: 'Total number of scheduled appointments', value: 94, icon: '📅' },
  { title: 'Total number of pending appointments', value: 32, icon: '⏳' },
  { title: 'Total number of cancelled appointments', value: 56, icon: '❌' },
]

export default function Employees() {
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
          appointmentData={appointmentsData}
          statsData={statsData}
        />
        {/* Main Content */}
        <main className={`flex-grow px-4 sm:px-6 lg:px-8 ${isSidebarOpen ? '' : ''}`}>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Welcome, Admin</h1>
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