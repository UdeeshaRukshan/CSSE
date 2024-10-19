// 'use client'

// import { useState, useEffect } from 'react'
// import { Moon, Sun, FileText, Menu, X, Plus, Calendar, User, Send, ChevronLeft, ChevronRight, Search } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Loader2 } from 'lucide-react'
// import SideBar from '../components/SideBar'

// interface Appointment {
//   _id: string
//   patientId: string
//   doctor: string
//   schedule: string
//   reason: string
//   transactions: string[]
// }

// interface Transaction {
//   _id: string
//   transactionId: string
//   type: string
//   amount: number
//   date: string
//   createdAt: string
// }

// export default function Appointments() {
//   const [isDarkMode, setIsDarkMode] = useState(true)
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true)
//   const [appointments, setAppointments] = useState<Appointment[]>([])
//   const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const [isSmallScreen, setIsSmallScreen] = useState(false)
//   const [selectedTransactions, setSelectedTransactions] = useState<Transaction[]>([])
//   const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState('')

//   const itemsPerPage = 10
//   const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 1024)
//       setIsSidebarOpen(window.innerWidth >= 1024)
//     }
//     handleResize()
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   useEffect(() => {
//     fetchAppointments()
//   }, [])

//   useEffect(() => {
//     const filtered = appointments.filter(appointment =>
//       Object.values(appointment).some(value =>
//         value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     )
//     setFilteredAppointments(filtered)
//     setCurrentPage(1)
//   }, [searchTerm, appointments])

//   const fetchAppointments = async () => {
//     setIsLoading(true)
//     try {
//       const response = await fetch('http://localhost:4000/api/appointment')
//       const data = await response.json()
//       setAppointments(data)
//       setFilteredAppointments(data)
//     } catch (error) {
//       console.error('Error fetching appointments:', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const fetchTransactions = async (transactionIds: string[]) => {
//     try {
//       const transactions = await Promise.all(
//         transactionIds.map(id =>
//           fetch(`http://localhost:4000/api/transaction/?id=${id}`).then(res => res.json())
//         )
//       )
//       setSelectedTransactions(transactions)
//       setIsTransactionModalOpen(true)
//     } catch (error) {
//       console.error('Error fetching transactions:', error)
//     }
//   }

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

//   const paginatedAppointments = filteredAppointments.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   )

//   return (
//     <div className={`flex flex-col h-screen ${isDarkMode ? 'dark' : ''}`}>
//       {/* Header */}
//       <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 h-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
//         <div className="flex items-center">
//           <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={toggleSidebar}>
//             <Menu className="h-6 w-6" />
//           </Button>
//           <img src="/placeholder.svg?height=32&width=32" alt="CarePulse Logo" className="w-8 h-8 mr-2" />
//           <span className="text-xl font-bold">CarePulse</span>
//         </div>
//         <div className="flex items-center">
//           <img src="/placeholder.svg?height=32&width=32" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
//           <span className="ml-2">Admin</span>
//         </div>
//       </header>

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <SideBar 
//           isSidebarOpen={isSidebarOpen} 
//           isDarkMode={isDarkMode} 
//           isSmallScreen={isSmallScreen} 
//           toggleSidebar={toggleSidebar} 
//           toggleDarkMode={toggleDarkMode}
//           data={appointments}
//           statsData={[]}
//         />

//         {/* Main Content */}
//         <main className={`flex-grow px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${isSidebarOpen ? 'pl-4' : ''}`}>
//           <div className="h-[calc(100vh-4rem)] overflow-y-auto">
//             <h1 className="text-3xl font-bold my-6">Appointments</h1>

//             {/* Search Input */}
//             <div className="mb-4">
//               <Input
//                 type="text"
//                 placeholder="Search appointments..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="max-w-sm"
//                 icon={<Search className="h-4 w-4" />}
//               />
//             </div>

//             {/* Appointments Table */}
//             {isLoading ? (
//               <div className="flex justify-center items-center h-64">
//                 <Loader2 className="h-8 w-8 animate-spin" />
//               </div>
//             ) : (
//               <div className="rounded-lg border border-gray-200 dark:border-gray-700">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Patient ID</TableHead>
//                       <TableHead>Doctor</TableHead>
//                       <TableHead>Reason</TableHead>
//                       <TableHead>Date & Time</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {paginatedAppointments.map((appointment) => (
//                       <TableRow key={appointment._id}>
//                         <TableCell>{appointment.patientId}</TableCell>
//                         <TableCell>{appointment.doctor}</TableCell>
//                         <TableCell>{appointment.reason}</TableCell>
//                         <TableCell>{new Date(appointment.schedule).toLocaleString()}</TableCell>
//                         <TableCell>
//                           <Button onClick={() => fetchTransactions(appointment.transactions)}>
//                             Show Transactions
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </div>
//             )}

//             {/* Pagination */}
//             <div className="flex justify-between items-center mt-4">
//               <Button
//                 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//               >
//                 <ChevronLeft className="mr-2 h-4 w-4" />
//                 Previous
//               </Button>
//               <span>Page {currentPage} of {totalPages}</span>
//               <Button
//                 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//                 <ChevronRight className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Transaction Modal */}
//       <Dialog open={isTransactionModalOpen} onOpenChange={setIsTransactionModalOpen}>
//         <DialogContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
//           <DialogHeader>
//             <DialogTitle>Transaction Details</DialogTitle>
//           </DialogHeader>
//           <div className="mt-4">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Type</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Created At</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {selectedTransactions.map((transaction) => (
//                   <TableRow key={transaction._id}>
//                     <TableCell>{transaction.type}</TableCell>
//                     <TableCell>${transaction.amount}</TableCell>
//                     <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
//                     <TableCell>{new Date(transaction.createdAt).toLocaleString()}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, FileText, Menu, X, Plus, Calendar, User, Send, ChevronLeft, ChevronRight, Search, Eye, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Loader2 } from 'lucide-react'
import SideBar from '../components/SideBar'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/lib/GlobalProvider'
import Link from 'next/link'

interface Appointment {
  _id: string
  patientId: string
  doctor: string
  schedule: string
  reason: string
  transactions: string[]
  status: 'scheduled' | 'completed' | 'cancelled'
}

interface Transaction {
  _id: string
  transactionId: string
  type: string
  amount: number
  date: string
  createdAt: string
}

export default function Appointments() {
  // const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [selectedTransactions, setSelectedTransactions] = useState<Transaction[]>([])
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const itemsPerPage = 10
  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage)
  const { isDarkMode, toggleDarkMode, userData } = useGlobalContext()

  // const [userData, setUserData] = useState({ name: '', email: '', img:'' });
  const router = useRouter();

  // useEffect(() => {
  //   const userId = Cookies.get('userId');
  //   if (userId) {
  //     fetch(`http://localhost:4000/api/users/${userId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUserData({ name: data.name, email: data.email, img: data.img });
  //       })
  //       .catch((error) => console.error('Error fetching user data:', error));
  //   }
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
      setIsSidebarOpen(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    fetchAppointments()
  }, [])

  useEffect(() => {
    const filtered = appointments.filter(appointment =>
      Object.values(appointment).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    setFilteredAppointments(filtered)
    setCurrentPage(1)
  }, [searchTerm, appointments])

  const fetchAppointments = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:4000/api/appointment')
      const data = await response.json()
      setAppointments(data)
      setFilteredAppointments(data)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchTransactions = async (transactionIds: string[]) => {
    try {
      const transactions = await Promise.all(
        transactionIds.map(id =>
          fetch(`http://localhost:4000/api/transaction/?id=${id}`).then(res => res.json())
        )
      )
      setSelectedTransactions(transactions)
      setIsTransactionModalOpen(true)
    } catch (error) {
      console.error('Error fetching transactions:', error)
    }
  }

  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleViewAppointment = (id: string) => {
    router.push(`/login/admin/appointments/${id}`)
  }

  const handleDeleteAppointment = (id: string) => {
    // Implement delete appointment logic
    console.log(`Deleting appointment ${id}`)
  }

  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    // <div className={`flex flex-col h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
    <div className={`flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>

      {/* Header */}
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
        <div className="flex items-center cursor-pointer" onClick={toggleSidebar}>
          <img src="/assets/images/image.png" alt="CarePulse Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">HealthMate</span>
        </div>
        <div className="flex items-center">
          <img src="/assets/images/admin.png" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
          <span className="ml-2">{userData.name}</span>
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
          data={appointments}
          statsData={[]}
        />

        {/* Main Content */}
        <main className={`flex-grow px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 ${isSidebarOpen ? 'pl-4' : ''}`}>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <h1 className="text-3xl font-bold my-6">Appointments</h1>

            {/* Search Input */}
            <div className={`max-w-sm  mb-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
              <Input
                type="text"
                placeholder="Search appointments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`max-w-sm ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                icon={<Search className="h-4 w-4" />}
              />
            </div>

            {/* Appointments Table */}
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <div className={`rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
                <Table>
                  <TableHeader>
                    <TableRow className={isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}>
                      <TableHead>Patient ID</TableHead>
                      <TableHead>Doctor</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedAppointments.map((appointment) => (
                      <TableRow key={appointment._id} className={`${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-300`}>
                        <TableCell>{appointment.patientId}</TableCell>
                        <TableCell>{appointment.doctor}</TableCell>
                        <TableCell>{appointment.reason}</TableCell>
                        <TableCell>{new Date(appointment.schedule).toLocaleString()}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            appointment.status === 'scheduled' ? 'bg-blue-500 text-white' :
                            appointment.status === 'completed' ? 'bg-green-500 text-white' :
                            'bg-red-500 text-white'
                          }`}>
                            {appointment.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2 ">
                            <Button size="sm" onClick={() => fetchTransactions(appointment.transactions)} className={`mr-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 text-gray-100'} transition-colors duration-300`}>
                              Transactions
                            </Button>
                            <Link href={`/login/admin/appointments/${appointment._id}`}>
                              <Button size="sm" variant="outline"  className={`mr-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 text-gray-100'} transition-colors duration-300`}>
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </Link>
                            <Button size="sm" variant="destructive" onClick={() => handleDeleteAppointment(appointment._id)} className={`mr-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 text-gray-100'} transition-colors duration-300`}>
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <Button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <span>Page {currentPage} of {totalPages}</span>
              <Button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Transaction Modal */}
      <Dialog open={isTransactionModalOpen} onOpenChange={setIsTransactionModalOpen}>
        <DialogContent className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow className={isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Created At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedTransactions.map((transaction) => (
                  <TableRow key={transaction._id} className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} duration-300`}>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>${transaction.amount}</TableCell>
                    <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
                    <TableCell>{new Date(transaction.createdAt).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}