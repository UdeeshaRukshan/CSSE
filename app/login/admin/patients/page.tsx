'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'
import SideBar from '../components/SideBar'
import { Calendar, X, Send, MessageCircle, ChevronLeft, ChevronRight, Plus, User, Filter } from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"
import Cookies from 'js-cookie';
import { useGlobalContext } from '@/lib/GlobalProvider'

// Define types for user and stats
type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  imageUrl: string | null;
  createdAt: string
};

type Stat = {
  title: string;
  value: number;
  icon: string;
};

export default function Employees() {
  // const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isNewEmployeeFormOpen, setIsNewEmployeeFormOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [selectedRole, setSelectedRole] = useState("")
  const [isEditEmployeeFormOpen, setIsEditEmployeeFormOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all") // Updated: Set initial filterRole to "all"
  const itemsPerPage = 10
  const { isDarkMode, toggleDarkMode, userData } = useGlobalContext()


  // const [userData, setUserData] = useState({ name: '', email: '', img:'' });
  
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
    const fetchUsers = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch('http://localhost:4000/api/users')
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        const data = await response.json()
        const patientUsers = data.filter(user => user.role === 'patient')
        setUsers(patientUsers)
        setFilteredUsers(patientUsers)
        toast.success('Users fetched successfully')
      } catch (error) {
        console.error("Failed to fetch users:", error)
        setError('Failed to fetch users. Please try again later.')
        toast.error('Failed to fetch users')
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const filtered = users.filter(user => 
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterRole === "all" ? user.role === 'patient' : user.role === filterRole)
    )
    setFilteredUsers(filtered)
    setCurrentPage(1)
  }, [searchTerm, filterRole, users])

  // const toggleDarkMode = () => toggleDarkMode(!isDarkMode)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleSendTemporaryPassword = (id: string) => {
    toast.promise(
      fetch(`http://localhost:4000/api/admin/reset/${id}`, { method: 'POST' }),
      {
        loading: 'Sending temporary password...',
        success: 'Temporary password sent successfully',
        error: 'Failed to send temporary password',
      }
    )
  }

  const handleUpdateUser = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch user details')
      }
      const user = await response.json()
      setSelectedUser(user)
      setSelectedRole(user.role)
      setIsEditEmployeeFormOpen(true)
      toast.success('User details fetched for editing')
    } catch (error) {
      console.error("Failed to fetch user:", error)
      toast.error('Failed to fetch user details')
    }
  }

  const handleSaveUser = async () => {
    if (selectedUser) {
      toast.promise(
        fetch(`http://localhost:4000/api/users/${selectedUser._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...selectedUser, role: selectedRole }),
        }).then(res => {
          if (!res.ok) throw new Error('Failed to update user')
          setUsers(prevUsers => prevUsers.map(user => user._id === selectedUser._id ? { ...selectedUser, role: selectedRole } : user))
          setIsEditEmployeeFormOpen(false)
        }),
        {
          loading: 'Updating user...',
          success: 'User updated successfully',
          error: 'Failed to update user',
        }
      )
    }
  }

  const handleDeleteUser = (id: string) => {
    toast.promise(
      fetch(`http://localhost:4000/api/users/${id}`, { method: 'DELETE' })
        .then(res => {
          if (!res.ok) throw new Error('Failed to delete user')
          setUsers(prevUsers => prevUsers.filter(user => user._id !== id))
        }),
      {
        loading: 'Deleting user...',
        success: 'User deleted successfully',
        error: 'Failed to delete user',
      }
    )
  }

  const handleAddEmployee = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newEmployee = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: selectedRole,
      startDate: formData.get('startDate') as string,
    }

    toast.promise(
      fetch('http://localhost:4000/api/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      }).then(res => {
        if (!res.ok) throw new Error('Failed to add employee')
        return res.json()
      }).then(data => {
        setUsers(prevUsers => [...prevUsers, data])
        setIsNewEmployeeFormOpen(false)
      }),
      {
        loading: 'Adding new employee...',
        success: 'New employee added successfully. A password reset email has been sent.',
        error: 'Failed to add new employee',
      }
    )
  }

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

  const LoadingSkeleton = () => (
    <>
      {[...Array(itemsPerPage)].map((_, index) => (
        <tr key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <td className="p-2"><Skeleton className="h-10 w-10 rounded-full" /></td>
          <td className="p-2"><Skeleton className="h-4 w-[150px]" /></td>
          <td className="p-2"><Skeleton className="h-4 w-[200px]" /></td>
          <td className="p-2"><Skeleton className="h-4 w-[100px]" /></td>
          <td className="p-2">
            <Skeleton className="h-8 w-[100px] mr-2 inline-block" />
            <Skeleton className="h-8 w-[100px] inline-block" />
          </td>
          <td className="p-2"><Skeleton className="h-8 w-[80px]" /></td>
        </tr>
      ))}
    </>
  )

  return (
    <div className={`flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Toaster position="top-right" />
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
          data={users}
          statsData={[]}
        />
        {/* Main Content */}
        <main className={`flex-grow px-4 sm:px-6 lg:px-8`}>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Patient Management</h1>
              <Dialog open={isNewEmployeeFormOpen} onOpenChange={setIsNewEmployeeFormOpen} className='pt-5'>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Patient
                  </Button>
                </DialogTrigger>
                <DialogContent className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                  <DialogHeader>
                    <DialogTitle>Add New Patient</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddEmployee} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Enter patient name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Enter patient email" required />
                    </div>
                    <div className="flex justify-between">
                      <Button type="submit" className="w-1/2 mr-2">Add Patient</Button>
                      <Button type="button" variant="outline" className="w-1/2 ml-2" onClick={() => handleSendTemporaryPassword(selectedUser?._id || '')}>
                        <Send className="mr-2 h-4 w-4" />
                        Send Temp Password
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Search and Filter */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 mr-4">
                <Input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                />
              </div>
            </div>

            {error ? (
              <div className="text-red-500 text-center py-4">{error}</div>
            ) : (
              <div className={`overflow-x-auto rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
                <table className="w-full">
                  <thead>
                    <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <th className="p-2 text-left">Image</th>
                      <th className="p-2 text-left">Patient Name</th>
                      <th className="p-2 text-left">Email</th>
                      <th className="p-2 text-left">Role</th>
                      <th className="p-2 text-left">Actions</th>
                      <th className="p-2 text-left">OTP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <LoadingSkeleton />
                    ) : (
                      paginatedUsers.map(user => (
                        <tr key={user._id} className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                          <td className="p-2">
                            {user.imageUrl ? (
                              <Image
                                src={user.imageUrl}
                                alt={`${user.name}'s profile`}
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <User className="w-6 h-6 text-gray-600" />
                              </div>
                            )}
                          </td>
                          <td className="p-2">{user.name}</td>
                          <td className="p-2">{user.email}</td>
                          <td className="p-2">{user.role}</td>
                          <td className="p-2">
                            <Button variant="outline" size="sm" className={`mr-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 text-gray-100'} transition-colors duration-300`}
                              onClick={() => handleUpdateUser(user._id)}>
                              Update
                            </Button>
                            <Button variant="outline" size="sm" className={`mr-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 text-gray-100'} transition-colors duration-300`}
                              onClick={() => handleDeleteUser(user._id)}>
                              Delete
                            </Button>
                          </td>
                          <td className="p-2">
                            <Button variant="outline" size="sm" className={`mr-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 text-gray-100'} transition-colors duration-300`}
                              onClick={() => handleSendTemporaryPassword(user._id)}>
                              <MessageCircle className="mr-1 h-4 w-4" />
                              OTP
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex justify-between items-center mt-4">
              <Button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1 || isLoading}
                className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <span>Page {currentPage} of {totalPages}</span>
              <Button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || isLoading}
                className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </main> 

         {/* Dialog for Editing Employee */}
         <Dialog open={isEditEmployeeFormOpen} onOpenChange={setIsEditEmployeeFormOpen}>
          <DialogContent className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <DialogHeader>
              <DialogTitle>Edit Patient</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Label>Name</Label>
              <Input
                value={selectedUser?.name || ''}
                onChange={e => setSelectedUser(prev => prev ? { ...prev, name: e.target.value } : null)}
              />
              <Label>Email</Label>
              <Input
                type="email"
                value={selectedUser?.email || ''}
                onChange={e => setSelectedUser(prev => prev ? { ...prev, email: e.target.value } : null)}
              />
              <Label>Role</Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="patient">Patient</SelectItem>
                  <SelectItem value="pharmacist">Pharmacist</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleSaveUser} className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}