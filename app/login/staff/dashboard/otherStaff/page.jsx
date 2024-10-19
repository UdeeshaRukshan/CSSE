"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  FileText,
  Menu,
  X,
  Plus,
  Calendar,
  User,
  Home,
  Users,
  Settings,
  LogOut,
  Mail,
  Phone,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function EmployeeList() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [staffUsername, setStaffUsername] = useState("");
  const [staffFullname, setStaffFullname] = useState("");
  const [staffEmail, setStaffEmail] = useState("");

  const fetchEmployees = async () => {
    setIsLoading(true);
    try {
      // Fetch doctors
      const doctorResponse = await fetch(
        "http://localhost:4000/api/doctor/all"
      );
      if (!doctorResponse.ok) {
        throw new Error("Failed to fetch doctors");
      }
      const doctorData = await doctorResponse.json();

      // Fetch other staff members
      const staffResponse = await fetch(
        "http://localhost:4000/api/otherStaff/all"
      );
      if (!staffResponse.ok) {
        throw new Error("Failed to fetch staff members");
      }
      const staffData = await staffResponse.json();

      // Combine and set all employees
      const doctors = Array.isArray(doctorData.doctors)
        ? doctorData.doctors
        : [];
      const staff = Array.isArray(staffData.staff)
        ? staffData.staff
        : Array.isArray(staffData)
          ? staffData
          : [];

      setEmployees([...doctors, ...staff]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
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
    fetchEmployees();
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
                onClick={() => router.push("/login/staff/employees/")}
              >
                <User className="mr-2 h-4 w-4" />
                Employees
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                Employee Progress
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start mb-2"
                onClick={() => router.push("/login/staff/dashboard/workshift")}
              >
                <Users className="mr-2 h-4 w-4" />
                Work Shifts
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
              <h1 className="text-3xl font-bold">Employee List</h1>
              <Button onClick={() => router.push("/login/staff/dashboard")}>
                <Plus className="mr-2 h-4 w-4" />
                Add New Employee
              </Button>
            </div>

            {isLoading ? (
              <div className="text-center py-10">Loading employees...</div>
            ) : error ? (
              <div className="text-center py-10 text-red-500">
                Error: {error}
              </div>
            ) : employees.length === 0 ? (
              <div className="text-center py-10">No employees found.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {employees.map((employee) => (
                  <Card
                    key={employee._id}
                    className={`${isDarkMode ? "bg-gray-800" : "bg-white"}`}
                  >
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarImage
                          src={`/placeholder.svg?height=56&width=56`}
                          alt={employee.fullname}
                        />
                        <AvatarFallback>
                          {employee.fullname
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle>{employee.fullname}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {employee.specialization || employee.role}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-2">
                        <Mail className="mr-2 h-4 w-4" />
                        <span className="text-sm">{employee.email}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Phone className="mr-2 h-4 w-4" />
                        <span className="text-sm">{employee.contact}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span className="text-sm">
                          {employee.experience} years experience
                        </span>
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500"
                        >
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
