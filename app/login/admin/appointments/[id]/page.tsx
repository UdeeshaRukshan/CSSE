// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// // import { Loader2, ArrowLeft } from 'lucide-react'
// // import SideBar from '../../components/SideBar'
// // import { useRouter, useSearchParams } from 'next/navigation'

// // interface Appointment {
// //   _id: string
// //   patientId: string
// //   doctor: string
// //   schedule: string
// //   reason: string
// //   transactions: string[]
// //   status: 'scheduled' | 'completed' | 'cancelled'
// // }

// // interface Transaction {
// //   _id: string
// //   transactionId: string
// //   type: string
// //   amount: number
// //   date: string
// //   createdAt: string
// // }

// // export default function AppointmentDetails() {
// //   const [isDarkMode, setIsDarkMode] = useState(true)
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true)
// //   const [isSmallScreen, setIsSmallScreen] = useState(false)
// //   const [appointment, setAppointment] = useState<Appointment | null>(null)
// //   const [transactions, setTransactions] = useState<Transaction[]>([])
// //   const [isLoading, setIsLoading] = useState(true)
// //   const router = useRouter()
//   // const searchParams = useSearchParams()
//   // const id = searchParams.get('id')
// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsSmallScreen(window.innerWidth < 1024)
// //       setIsSidebarOpen(window.innerWidth >= 1024)
// //     }
// //     handleResize()
// //     window.addEventListener('resize', handleResize)
// //     return () => window.removeEventListener('resize', handleResize)
// //   }, [])

// //   useEffect(() => {
// //     if (id) {
// //       fetchAppointmentDetails()
// //     }
// //   }, [id])

// //   const fetchAppointmentDetails = async () => {
// //     setIsLoading(true)
// //     try {
// //       const response = await fetch(`http://localhost:4000/api/appointment/${id}`)
// //       const data = await response.json()
// //       setAppointment(data)
// //       if (data.transactions.length > 0) {
// //         await fetchTransactions(data.transactions)
// //       }
// //     } catch (error) {
// //       console.error('Error fetching appointment details:', error)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const fetchTransactions = async (transactionIds: string[]) => {
// //     try {
// //       const transactions = await Promise.all(
// //         transactionIds.map(id =>
// //           fetch(`http://localhost:4000/api/transaction/?id=${id}`).then(res => res.json())
// //         )
// //       )
// //       setTransactions(transactions)
// //     } catch (error) {
// //       console.error('Error fetching transactions:', error)
// //     }
// //   }

// //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
// //   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

// //   if (isLoading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <Loader2 className="h-8 w-8 animate-spin" />
// //       </div>
// //     )
// //   }

// //   if (!appointment) {
// //     return <div>Appointment not found</div>
// //   }

// //   return (
// //     <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
// //       {/* Header */}
// //       <header className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
// //         <div className="flex items-center cursor-pointer" onClick={toggleSidebar}>
// //           <img src="/assets/images/image.png" alt="HealthMate Logo" className="w-8 h-8 mr-2" />
// //           <span className="text-xl font-bold">HealthMate</span>
// //         </div>
// //         <div className="flex items-center">
// //           <img src="/assets/images/admin.png" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
// //           <span className="ml-2">Admin</span>
// //         </div>
// //       </header>

// //       <div className="flex flex-1 overflow-hidden">
// //         {/* Sidebar */}
// //         <SideBar 
// //           isSidebarOpen={isSidebarOpen} 
// //           isDarkMode={isDarkMode} 
// //           isSmallScreen={isSmallScreen} 
// //           toggleSidebar={toggleSidebar} 
// //           toggleDarkMode={toggleDarkMode}
// //           data={[]}
// //           statsData={[]}
// //         />

// //         {/* Main Content */}
// //         <main className={`flex-grow px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300 ${isSidebarOpen ? 'pl-4' : ''}`}>
// //           <div className="h-[calc(100vh-4rem)] overflow-y-auto">
// //             <div className="flex items-center my-6">
// //               <Button
// //                 variant="ghost"
// //                 onClick={() => router.push('/appointments')}
// //                 className={`mr-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
// //               >
// //                 <ArrowLeft className="h-4 w-4 mr-2" />
// //                 Back to Appointments
// //               </Button>
// //               <h1 className="text-3xl font-bold">Appointment Details</h1>
// //             </div>

// //             <Card className={`mb-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
// //               <CardHeader>
// //                 <CardTitle>Appointment Information</CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="grid grid-cols-2 gap-4">
// //                   <div>
// //                     <p className="font-semibold">Patient ID:</p>
// //                     <p>{appointment.patientId}</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold">Doctor:</p>
// //                     <p>{appointment.doctor}</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold">Reason:</p>
// //                     <p>{appointment.reason}</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold">Schedule:</p>
// //                     <p>{new Date(appointment.schedule).toLocaleString()}</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold">Status:</p>
// //                     <p className={`inline-block px-2 py-1 rounded-full text-xs ${
// //                       appointment.status === 'scheduled' ? 'bg-blue-500 text-white' :
// //                       appointment.status === 'completed' ? 'bg-green-500 text-white' :
// //                       'bg-red-500 text-white'
// //                     }`}>
// //                       {appointment.status}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {transactions.length > 0 && (
// //               <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
// //                 <CardHeader>
// //                   <CardTitle>Transactions</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <Table>
// //                     <TableHeader>
// //                       <TableRow className={isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}>
// //                         <TableHead>Type</TableHead>
// //                         <TableHead>Amount</TableHead>
// //                         <TableHead>Date</TableHead>
// //                         <TableHead>Created At</TableHead>
// //                       </TableRow>
// //                     </TableHeader>
// //                     <TableBody>
// //                       {transactions.map((transaction) => (
// //                         <TableRow key={transaction._id} className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-300`}>
// //                           <TableCell>{transaction.type}</TableCell>
// //                           <TableCell>${transaction.amount}</TableCell>
// //                           <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
// //                           <TableCell>{new Date(transaction.createdAt).toLocaleString()}</TableCell>
// //                         </TableRow>
// //                       ))}
// //                     </TableBody>
// //                   </Table>
// //                 </CardContent>
// //               </Card>
// //             )}
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   )
// // }



// 'use client'

// import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Loader2, ArrowLeft } from 'lucide-react'
// import SideBar from '../../components/SideBar'
// import { useRouter, useSearchParams } from 'next/navigation'

// interface Appointment {
//   _id: string
//   patientId: string
//   doctor: string
//   schedule: string
//   reason: string
//   transactions: string[]
//   status: 'scheduled' | 'completed' | 'cancelled'
// }

// interface Transaction {
//   _id: string
//   transactionId: string
//   type: string
//   amount: number
//   date: string
//   createdAt: string
// }

// export default function AppointmentDetails() {
//   const [isDarkMode, setIsDarkMode] = useState(true)
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true)
//   const [isSmallScreen, setIsSmallScreen] = useState(false)
//   const [appointment, setAppointment] = useState<Appointment | null>(null)
//   const [transactions, setTransactions] = useState<Transaction[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const id = searchParams.get('id')

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
//     fetchAppointmentDetails()
//   }, [])

//   const fetchAppointmentDetails = async () => {
//     setIsLoading(true)
//     try {
//       // Fetch the hardcoded appointment data
//       const response = await fetch(`http://localhost:4000/api/appointment/${id}`)
//       if (!response.ok) {
//         throw new Error('Failed to fetch appointment details')
//       }

//       const data = await response.json()
//       setAppointment(data)

//       // If the appointment has associated transactions, fetch them
//       if (data.transactions.length > 0) {
//         await fetchTransactions(data.transactions)
//       }
//     } catch (error) {
//       console.error('Error fetching appointment details:', error)
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
//       setTransactions(transactions)
//     } catch (error) {
//       console.error('Error fetching transactions:', error)
//     }
//   }

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader2 className="h-8 w-8 animate-spin" />
//       </div>
//     )
//   }

//   if (!appointment) {
//     return <div>Appointment not found</div>
//   }

//   return (
//     <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
//       {/* Header */}
//       <header className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
//         <div className="flex items-center cursor-pointer" onClick={toggleSidebar}>
//           <img src="/assets/images/image.png" alt="HealthMate Logo" className="w-8 h-8 mr-2" />
//           <span className="text-xl font-bold">HealthMate</span>
//         </div>
//         <div className="flex items-center">
//           <img src="/assets/images/admin.png" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
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
//           data={[]}
//           statsData={[]}
//         />

//         {/* Main Content */}
//         <main className={`flex-grow px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300 ${isSidebarOpen ? 'pl-4' : ''}`}>
//           <div className="h-[calc(100vh-4rem)] overflow-y-auto">
//             <div className="flex items-center my-6">
//               <Button
//                 variant="ghost"
//                 onClick={() => router.push('/appointments')}
//                 className={`mr-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
//               >
//                 <ArrowLeft className="h-4 w-4 mr-2" />
//                 Back to Appointments
//               </Button>
//               <h1 className="text-3xl font-bold">Appointment Details</h1>
//             </div>

//             <Card className={`mb-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
//               <CardHeader>
//                 <CardTitle>Appointment Information</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="font-semibold">Patient ID:</p>
//                     <p>{appointment.patientId}</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Doctor:</p>
//                     <p>{appointment.doctor}</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Reason:</p>
//                     <p>{appointment.reason}</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Schedule:</p>
//                     <p>{new Date(appointment.schedule).toLocaleString()}</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Status:</p>
//                     <p className={`inline-block px-2 py-1 rounded-full text-xs ${
//                       appointment.status === 'scheduled' ? 'bg-blue-500 text-white' :
//                       appointment.status === 'completed' ? 'bg-green-500 text-white' :
//                       'bg-red-500 text-white'
//                     }`}>
//                       {appointment.status}
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {transactions.length > 0 && (
//               <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                 <CardHeader>
//                   <CardTitle>Transactions</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Table>
//                     <TableHeader>
//                       <TableRow className={isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}>
//                         <TableHead>Type</TableHead>
//                         <TableHead>Amount</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead>Created At</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {transactions.map((transaction) => (
//                         <TableRow key={transaction._id} className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-300`}>
//                           <TableCell>{transaction.type}</TableCell>
//                           <TableCell>${transaction.amount}</TableCell>
//                           <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
//                           <TableCell>{new Date(transaction.createdAt).toLocaleString()}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }



'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Loader2, ArrowLeft } from 'lucide-react'
import SideBar from '../../components/SideBar'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useGlobalContext } from '@/lib/GlobalProvider'

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
  transactionStatus: any
  date: string
  createdAt: string
}

export default function AppointmentDetails() {
  // const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [appointment, setAppointment] = useState<Appointment | null>(null)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const params = useParams(); // Use useParams to retrieve dynamic route params
  const id = params.id; // Access the `id` from the dynamic route
  const { isDarkMode, toggleDarkMode, userData } = useGlobalContext()


  useEffect(() => {
    if (!id) return; // Wait for the 'id' to be available

    // Your logic here, using the `id`
    console.log(`ID: ${id}`);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
      setIsSidebarOpen(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (id) {
      fetchAppointmentDetails()
    }
  }, [id]) // Fetch data when id is available

  const fetchAppointmentDetails = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`http://localhost:4000/api/appointment/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch appointment details')
      }

      const data = await response.json()
      setAppointment(data)

      // If the appointment has associated transactions, fetch them
      if (data.transactions.length > 0) {
        await fetchTransactions(data.transactions)
      }
    } catch (error) {
      console.error('Error fetching appointment details:', error)
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
      setTransactions(transactions)
    } catch (error) {
      console.error('Error fetching transactions:', error)
    }
  }

  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!appointment) {
    return <div>Appointment not found</div>
  }

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
        <div className="flex items-center cursor-pointer" onClick={toggleSidebar}>
          <img src="/assets/images/image.png" alt="HealthMate Logo" className="w-8 h-8 mr-2" />
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
          data={[]}
          statsData={[]}
        />

        {/* Main Content */}
        <main className={`flex-grow px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 ${isSidebarOpen ? 'pl-4' : ''}`}>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex items-center my-6">
              <Button
                variant="ghost"
                onClick={() => router.push('/login/admin/appointments')}
                className={`mr-4 ${isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Appointments
              </Button>
              <h1 className="text-3xl font-bold">Appointment Details</h1>
            </div>

            <Card className={`mb-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-slate-50 text-gray-900'}`}>
              <CardHeader>
                <CardTitle>Appointment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Patient ID:</p>
                    <p>{appointment.patientId}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Doctor:</p>
                    <p>{appointment.doctor}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Reason:</p>
                    <p>{appointment.reason}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Schedule:</p>
                    <p>{new Date(appointment.schedule).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Status:</p>
                    <p className={`inline-block px-2 py-1 rounded-full text-xs ${
                      appointment.status === 'scheduled' ? 'bg-blue-500 text-white' :
                      appointment.status === 'completed' ? 'bg-green-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {appointment.status}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {transactions.length > 0 && (
              <Card className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <CardHeader>
                  <CardTitle>Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Created At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction._id} className={`${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell>${transaction.amount}</TableCell>
                          <TableCell>{transaction.transactionStatus}</TableCell>
                          <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
                          <TableCell>{new Date(transaction.createdAt).toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
