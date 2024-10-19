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
  Send,
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Settings,
  LogOut,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNewEmployeeFormOpen, setIsNewEmployeeFormOpen] = useState(false);
  const [isNewStaffFormOpen, setIsNewStaffFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    age: "",
    contact: "",
    password: "",
    specialization: "",
    experience: "",
  });
  const [staffFormData, setStaffFormData] = useState({
    fullname: "",
    email: "",
    age: "",
    contact: "",
    password: "",
    role: "",
    experience: "",
  });
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [doctorCount, setDoctorCount] = useState(0);
  const [staffUsername, setStaffUsername] = useState("");
  const [staffFullname, setStaffFullname] = useState("");
  const [staffEmail, setStaffEmail] = useState("");

  const fetchDoctors = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/doctor/all");
      if (!response.ok) {
        throw new Error("Failed to fetch doctors");
      }
      const data = await response.json();
      console.log(data.doctors);
      console.log(data.doctors.length);
      setDoctors(data.doctors);
      setDoctorCount(data.doctors.length);
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
    fetchDoctors();
  }, []);

  useEffect(() => {
    const staffDataSession = sessionStorage.getItem("user");
    console.log("Staff Data", staffDataSession);
    if (staffDataSession) {
      const jsonStaffData = JSON.parse(staffDataSession);
      setStaffUsername(jsonStaffData.username);
      setStaffFullname(jsonStaffData.fullName);
      setStaffEmail(jsonStaffData.email);
      console.log(staffUsername);
    }
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleDoctorAdding = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4000/api/doctor/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create doctor account");
      }

      const data = await response.json();
      console.log("Doctor account created:", data);

      setFormData({
        fullname: "",
        email: "",
        age: "",
        contact: "",
        password: "",
        specialization: "",
        experience: "",
      });
      setIsNewEmployeeFormOpen(false);
      fetchDoctors();
    } catch (error) {
      console.error("Error creating doctor account:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStaffAdding = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/staff/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(staffFormData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create staff account");
      }

      const data = await response.json();
      console.log("Staff account created:", data);

      setStaffFormData({
        fullname: "",
        email: "",
        age: "",
        contact: "",
        password: "",
        role: "",
        experience: "",
      });
      setIsNewStaffFormOpen(false);
    } catch (error) {
      console.error("Error creating staff account:", error);
    }
  };

  const handleStaffInputChange = (e) => {
    const { name, value } = e.target;
    setStaffFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendTemporaryPassword = async (email) => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/send-temporary-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to send temporary password"
        );
      }

      const data = await response.json();
      console.log("Temporary password sent:", data);
      // You might want to show a success message to the user here
    } catch (error) {
      console.error("Error sending temporary password:", error);
      // You might want to show an error message to the user here
    }
  };

  const statsData = [
    { title: "Total number of work shifts", value: 94, icon: "📅" },
    {
      title: "Total number of available doctors",
      value: doctorCount,
      icon: "👨‍💼",
    },
    {
      title: "Total number of workshift cancellation requests",
      value: 56,
      icon: "❌",
    },
    {
      title: "Total number of workshift staff complains",
      value: 56,
      icon: "📄",
    },
    { title: "Total number of recruiments ongoing", value: 56, icon: "👨‍💻" },
  ];

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
            alt="CarePulse Logo"
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
              <Button variant="ghost" className="w-full justify-start mb-2">
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
          <div className="p-4 border-t border-gray-700 mt-34">
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
              <h1 className="text-3xl font-bold">Welcome, {staffFullname}</h1>
              <div className="space-x-2">
                <Dialog
                  open={isNewEmployeeFormOpen}
                  onOpenChange={setIsNewEmployeeFormOpen}
                >
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Doctor
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className={`${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <DialogHeader>
                      <DialogTitle>Add New Doctor</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleDoctorAdding}>
                      <div>
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input
                          id="fullname"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          placeholder="Enter Doctor's full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          type="email"
                          placeholder="Enter Doctor's email"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          type="number"
                          placeholder="Enter Doctor's age"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact">Contact</Label>
                        <Input
                          id="contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          type="tel"
                          placeholder="Enter Doctor's contact number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          type="password"
                          placeholder="Enter Password"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="specialization">Specialization</Label>
                        <Select
                          name="specialization"
                          value={formData.specialization}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              specialization: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select the specialization" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Cardiology">
                              Cardiology
                            </SelectItem>
                            <SelectItem value="OMF">OMF</SelectItem>
                            <SelectItem value="Dental">Dental</SelectItem>
                            <SelectItem value="OPD">OPD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          type="number"
                          placeholder="Enter Doctor's years of experience"
                          required
                        />
                      </div>
                      <div className="flex justify-between">
                        <Button type="submit" className="w-1/2 mr-2">
                          Add Doctor
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-1/2 ml-2"
                          onClick={() =>
                            handleSendTemporaryPassword(formData.email)
                          }
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Temp Password
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
                <Dialog
                  open={isNewStaffFormOpen}
                  onOpenChange={setIsNewStaffFormOpen}
                >
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Other Staff
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className={`${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <DialogHeader>
                      <DialogTitle>Add New Staff Member</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleStaffAdding}>
                      <div>
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input
                          id="fullname"
                          name="fullname"
                          value={staffFormData.fullname}
                          onChange={handleStaffInputChange}
                          placeholder="Enter staff member's full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          value={staffFormData.email}
                          onChange={handleStaffInputChange}
                          type="email"
                          placeholder="Enter staff member's email"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          name="age"
                          value={staffFormData.age}
                          onChange={handleStaffInputChange}
                          type="number"
                          placeholder="Enter staff member's age"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact">Contact</Label>
                        <Input
                          id="contact"
                          name="contact"
                          value={staffFormData.contact}
                          onChange={handleStaffInputChange}
                          type="tel"
                          placeholder="Enter staff member's contact number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          name="password"
                          value={staffFormData.password}
                          onChange={handleStaffInputChange}
                          type="password"
                          placeholder="Enter Password"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Role</Label>
                        <Select
                          name="role"
                          value={staffFormData.role}
                          onValueChange={(value) =>
                            setStaffFormData((prev) => ({
                              ...prev,
                              role: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select the role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nurse">Nurse</SelectItem>
                            <SelectItem value="Technician">
                              Technician
                            </SelectItem>
                            <SelectItem value="Receptionist">
                              Receptionist
                            </SelectItem>
                            <SelectItem value="Administrator">
                              Administrator
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input
                          id="experience"
                          name="experience"
                          value={staffFormData.experience}
                          onChange={handleStaffInputChange}
                          type="number"
                          placeholder="Enter staff member's years of experience"
                          required
                        />
                      </div>
                      <div className="flex justify-between">
                        <Button type="submit" className="w-1/2 mr-2">
                          Add Staff Member
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-1/2 ml-2"
                          onClick={() =>
                            handleSendTemporaryPassword(staffFormData.email)
                          }
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Temp Password
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  } transition-colors duration-300 hover:shadow-lg`}
                >
                  <div className="text-3xl mb-2">
                    {stat.icon} {stat.value}
                  </div>
                  <div className="text-sm">{stat.title}</div>
                </div>
              ))}
            </div>

            <div
              className={`overflow-x-auto rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              } transition-colors duration-300`}
            >
              <table className="w-full">
                <thead>
                  <tr
                    className={`${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}
                  >
                    <th className="p-2 text-left">Doctor</th>
                    <th className="p-2 text-left">Specialization</th>
                    <th className="p-2 text-left">Email</th>
                    <th className="p-2 text-left">Experience</th>
                    <th className="p-2 text-left">Contact</th>
                    <th className="p-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={6} className="text-center p-4">
                        Loading doctors...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={6} className="text-center p-4 text-red-500">
                        Error: {error}
                      </td>
                    </tr>
                  ) : doctors.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center p-4">
                        No doctors found.
                      </td>
                    </tr>
                  ) : (
                    doctors.map((doctor) => (
                      <tr
                        key={doctor._id}
                        className={`${
                          isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                        } transition-colors duration-300`}
                      >
                        <td className="p-2">{doctor.fullname}</td>
                        <td className="p-2">{doctor.specialization}</td>
                        <td className="p-2">{doctor.email}</td>
                        <td className="p-2">{doctor.experience} years</td>
                        <td className="p-2">{doctor.contact}</td>
                        <td className="p-2">
                          <Button variant="outline" size="sm" className="mr-2">
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
