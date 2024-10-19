'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import SideBar from '../components/SideBar'
import Cookies from 'js-cookie';

const monthlyData = [
  { month: 'Jan', value1: 70, value2: 90 },
  { month: 'Feb', value1: 50, value2: 40 },
  { month: 'Mar', value1: 25, value2: 30 },
  { month: 'Apr', value1: 35, value2: 45 },
  { month: 'May', value1: 20, value2: 25 },
  { month: 'Jun', value1: 75, value2: 60 },
]

const salesTrendsData = [
  { name: 'Appointments', trend: 2.0 },
  { name: 'Pharmacy', trend: -2.0 },
  { name: 'ophthalmologists', trend: -2.0 },
  { name: 'Canteen', trend: 2.0 },
]

const productSalesData = [
  { name: 'Appointments', sold: 123, trend: 2.0 },
  { name: 'Pharmacy', sold: 123, trend: -2.0 },
  { name: 'ophthalmologists', sold: 123, trend: -2.0 },
  { name: 'Canteen', sold: 123, trend: 2.0 },
]

const earningsCategoriesData = [
  { name: 'Appointments', value: 1763, percentage: 35 },
  { name: 'Pharmacy', value: 321, percentage: 25 },
  { name: 'ophthalmologists', value: 669, percentage: 25 },
  { name: 'Canteen', value: 154, percentage: 15 },
]

const COLORS = ['#8b5cf6', '#f472b6', '#60a5fa', '#fbbf24']

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

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

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`flex justify-between items-center p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} h-16`}>
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
          appointmentData={earningsCategoriesData}
          statsData={productSalesData}
        />
        {/* Main Content */}
        <div className={`flex-1 overflow-auto p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {/* Trends Card */}
            <Card className={`col-span-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} light:bg-slate-50`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Trends</CardTitle>
                <Select defaultValue="month">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select a timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke={isDarkMode ? '#ffffff' : '#000000'} />
                    <YAxis stroke={isDarkMode ? '#ffffff' : '#000000'} />
                    <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#333' : '#fff' }} />
                    <Bar dataKey="value1" fill="#f472b6" />
                    <Bar dataKey="value2" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sales Trends Card */}
            <Card className={`col-span-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} light:bg-slate-50`}>
              <CardHeader>
                <CardTitle className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sales Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className={`text-left font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Product Name</th>
                      <th className={`text-right font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesTrendsData.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2">{item.name}</td>
                        <td className={`text-right ${item.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {item.trend > 0 ? '▲' : '▼'} {Math.abs(item.trend)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Product Sales and Earnings Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Product Sales Card */}
            <Card className={`col-span-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} light:bg-slate-50`}>
              <CardHeader>
                <CardTitle className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Product Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className={`text-left font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Product Name</th>
                      <th className={`text-right font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Sold</th>
                      <th className={`text-right font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productSalesData.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2">
                          <div className="flex items-center space-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-500"></div>
                            <span>{item.name}</span>
                          </div>
                        </td>
                        <td className="text-right">{item.sold}</td>
                        <td className={`text-right ${item.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {item.trend > 0 ? '▲' : '▼'} {Math.abs(item.trend)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Earnings Categories Card */}
            <Card className={`col-span-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} light:bg-slate-50`}>
              <CardHeader>
                <CardTitle className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Earnings Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={earningsCategoriesData} dataKey="value" outerRadius={80} fill="#8884d8">
                      {earningsCategoriesData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#333' : '#fff' }} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
