'use client'

import { useState } from 'react'
import { Moon, Sun, Globe, ArrowUpRight, Users, FileText, User, Share2, RotateCcw, HelpCircle, Bell, Settings, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const monthlyData = [
  { month: 'Jan', value1: 70, value2: 90 },
  { month: 'Feb', value1: 50, value2: 40 },
  { month: 'Mar', value1: 25, value2: 30 },
  { month: 'Apr', value1: 35, value2: 45 },
  { month: 'May', value1: 20, value2: 25 },
  { month: 'Jun', value1: 75, value2: 60 },
  { month: 'Jul', value1: 50, value2: 70 },
  { month: 'Aug', value1: 50, value2: 40 },
  { month: 'Sep', value1: 25, value2: 30 },
  { month: 'Oct', value1: 35, value2: 45 },
  { month: 'Nov', value1: 20, value2: 25 },
  { month: 'Dec', value1: 75, value2: 60 },
]

const salesTrendsData = [
  { name: 'Web Design Template', trend: 2.0 },
  { name: 'App Template', trend: -2.0 },
  { name: 'Dashboard Template', trend: -2.0 },
  { name: 'Icons Set', trend: 2.0 },
]

const productSalesData = [
  { name: 'Web Template', sold: 123, trend: 2.0 },
  { name: 'Icons Set', sold: 123, trend: -2.0 },
  { name: 'App Template', sold: 123, trend: -2.0 },
  { name: 'Dashboard Template', sold: 123, trend: 2.0 },
]

const earningsCategoriesData = [
  { name: 'Web Template', value: 1763, percentage: 35 },
  { name: 'Icons Set', value: 321, percentage: 25 },
  { name: 'App Template', value: 669, percentage: 25 },
  { name: 'Dashboard Template', value: 154, percentage: 15 },
]

const COLORS = ['#8b5cf6', '#f472b6', '#60a5fa', '#fbbf24']

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg?height=40&width=40" alt="Ageng Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Ageng</h1>
        </div>
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Globe className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <ArrowUpRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <Users className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <FileText className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <User className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <Share2 className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <RotateCcw className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <HelpCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <Bell className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <Settings className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <main className="p-6">
        <div className="mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Trends</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                  <span className="text-sm font-medium">$1,245</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="text-sm font-medium">$1,356</span>
                </div>
                <Select defaultValue="month">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value1" fill="#f472b6" />
                  <Bar dataKey="value2" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-medium text-gray-500">Product Name</th>
                    <th className="text-right font-medium text-gray-500">Rate</th>
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

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Product Sales</CardTitle>
              <Select defaultValue="month">
                <SelectTrigger className="w-[180px]">
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
              <table className="w-full">
                <tbody>
                  {productSalesData.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${COLORS[index % COLORS.length]}`}></div>
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="text-right">{item.sold} / 1000 Sold</td>
                      <td className={`text-right ${item.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.trend > 0 ? '▲' : '▼'} {Math.abs(item.trend)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Earnings Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <ResponsiveContainer width={200} height={200}>
                  <PieChart>
                    <Pie
                      data={earningsCategoriesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {earningsCategoriesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <table className="w-full">
                <tbody>
                  {earningsCategoriesData.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${COLORS[index % COLORS.length]}`}></div>
                          <span>{item.name} ({item.percentage}%)</span>
                        </div>
                      </td>
                      <td className="text-right">${item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </main>

      <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow">
        <Sun className="h-5 w-5 text-yellow-500" />
        <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
        <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  )
}