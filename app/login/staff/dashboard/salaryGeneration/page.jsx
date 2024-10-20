"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  FileText,
  Menu,
  X,
  Calendar,
  User,
  Home,
  Users,
  Settings,
  LogOut,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function SalaryGeneration() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [staff, setStaff] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [staffUsername, setStaffUsername] = useState("");
  const [staffFullname, setStaffFullname] = useState("");
  const [staffEmail, setStaffEmail] = useState("");

  const fetchStaff = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/otherStaff/all");
      if (!response.ok) {
        throw new Error("Failed to fetch staff members");
      }
      const data = await response.json();
      console.log("API Response:", data);

      const staffArray = Array.isArray(data) ? data : data.OtherStaff || [];
      setStaff(staffArray);
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchStaff();
  }, []);

  useEffect(() => {
    const staffDataSession = sessionStorage.getItem("user");
    if (staffDataSession) {
      const jsonStaffData = JSON.parse(staffDataSession);
      setStaffUsername(jsonStaffData.username);
      setStaffFullname(jsonStaffData.fullName);
      setStaffEmail(jsonStaffData.email);
    }
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const calculateSalary = () => {
    const hours = parseFloat(hoursWorked);
    const rate = parseFloat(hourlyRate);
    if (isNaN(hours) || isNaN(rate)) {
      alert("Please enter valid numbers for hours worked and hourly rate.");
      return;
    }
    const weeklyPayment = hours * rate;
    const monthlyPayment = weeklyPayment * 4; // Assuming 4 weeks per month
    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div
      className={`flex flex-col h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      <header className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="SmartMed Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-xl font-bold">SmartMed</span>
        </div>
        <div className="flex items-center">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-2">{staffUsername}</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } lg:block fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out ${
            isSmallScreen && !isSidebarOpen
              ? "-translate-x-full"
              : "translate-x-0"
          } h-[calc(100vh-4rem)] flex flex-col`}
        >
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
              <Button
                variant="ghost"
                className="w-full justify-start mb-2"
                onClick={() => router.push("/login/staff/dashboard/")}
              >
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start mb-2"
                onClick={() => router.push("/login/staff/dashboard/otherStaff")}
              >
                <User className="mr-2 h-4 w-4" />
                Employees
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start mb-2"
                onClick={() => router.push("/login/staff/dashboard/workshift")}
              >
                <Users className="mr-2 h-4 w-4" />
                Work Shifts
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start mb-2"
                onClick={() => router.push("/login/staff/salary-generation")}
              >
                <DollarSign className="mr-2 h-4 w-4" />
                Salary Generation
              </Button>
            </div>
          </nav>
          <div className="p-4 border-t border-gray-700">
            <Button
              variant="ghost"
              className="w-full justify-start mb-2"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <Sun className="mr-2 h-4 w-4" />
              ) : (
                <Moon className="mr-2 h-4 w-4" />
              )}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <FileText className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
          </div>
          <div className="p-4 border-t border-gray-700 mt-auto">
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <div className="flex items-center mb-2">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-semibold">{staffUsername}</div>
                <div className="text-sm text-gray-400">{staffEmail}</div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
              onClick={() => router.push("/login/staff/login")}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        <main
          className={`flex-grow px-4 sm:px-6 lg:px-8 ${
            isSidebarOpen ? "" : ""
          }`}
        >
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Salary Generation</h1>
            </div>

            <Card className={`${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <CardHeader>
                <CardTitle>Calculate Monthly Salary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="employee">Select Employee</Label>
                    <Select
                      value={selectedEmployee}
                      onValueChange={setSelectedEmployee}
                    >
                      <SelectTrigger id="employee">
                        <SelectValue placeholder="Select an employee" />
                      </SelectTrigger>
                      <SelectContent>
                        {staff.map((employee) => (
                          <SelectItem key={employee._id} value={employee._id}>
                            {employee.fullname}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hours">Hours Worked (per week)</Label>
                    <Input
                      id="hours"
                      type="number"
                      value={hoursWorked}
                      onChange={(e) => setHoursWorked(e.target.value)}
                      placeholder="Enter hours worked"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rate">Hourly Rate</Label>
                    <Input
                      id="rate"
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      placeholder="Enter hourly rate"
                    />
                  </div>
                  <Button onClick={calculateSalary}>Calculate Salary</Button>
                </div>
              </CardContent>
            </Card>

            {monthlyPayment > 0 && (
              <Card
                className={`mt-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <CardHeader>
                  <CardTitle>Salary Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Monthly Payment: LKR.{monthlyPayment.toFixed(2)}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
