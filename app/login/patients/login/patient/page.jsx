"use client";

import { useState, useEffect } from "react";
import { Plus, Send } from "lucide-react";
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
import axios from "axios";
import { saveAs } from "file-saver";
import SideBar from "../table/SideBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Employees() {
  const [appointments, setAppointments] = useState([]);
  const [scheduledCount, setScheduledCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [cancelledCount, setCancelledCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNewEmployeeFormOpen, setIsNewEmployeeFormOpen] = useState(false);
  const [error, setError] = useState(null);

  // New Employee Form State
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    role: "",
    startDate: "",
  });

  const itemsPerPage = 10;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Function to delete an appointment
  const deleteAppointment = async (appointmentId) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/appointment/${appointmentId}`
      );
      console.log("Appointment deleted:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error deleting appointment:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  // Function to cancel an appointment
  const cancelAppointment = async (appointmentId) => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/appointment/cancel/${appointmentId}`
      );
      console.log("Appointment canceled:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error canceling appointment:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  const handleDeleteAppointment = async (appointment) => {
    setSelectedAppointment(appointment);
    setShowDeleteModal(true);

    // Confirmation before deleting
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );
    if (confirmDelete) {
      try {
        await deleteAppointment(appointment._id);
        await fetchAppointments();
        alert("Done! Appointment deleted successfully.");
      } catch (error) {
        alert("Failed to delete appointment.");
      }
    }
  };

  const handleCancelAppointment = async (appointment) => {
    setSelectedAppointment(appointment);
    setShowCancelModal(true);

    // Confirmation before canceling
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );
    if (confirmCancel) {
      try {
        await cancelAppointment(appointment._id);

        await fetchAppointments();
        alert("Done! Appointment canceled successfully.");
      } catch (error) {
        alert("Failed to cancel appointment.");
      }
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/appointment`
        );
        const appointmentsData = response.data;
        setAppointments(appointmentsData);

        // Update appointment stats based on fetched data
        setScheduledCount(
          appointmentsData.filter((app) => app.status === "scheduled").length
        );
        setPendingCount(
          appointmentsData.filter((app) => app.status === "scheduled").length
        );
        setCancelledCount(
          appointmentsData.filter((app) => app.status === "cancelled").length
        );
      } catch (err) {
        setError("Error fetching appointments. Please try again later.");
        console.error("Error fetching appointments:", err);
      }
    };

    fetchAppointments();
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const downloadAppointment = (appointment) => {
    const blob = new Blob([JSON.stringify(appointment, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, `appointment_${appointment._id}.json`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setEmployeeData((prevData) => ({
      ...prevData,
      role: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, role, startDate } = employeeData;

    if (!name || !email || !role || !startDate) {
      setError("All fields are required.");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/employee`,
        employeeData
      );
      setIsNewEmployeeFormOpen(false);
      setEmployeeData({ name: "", email: "", role: "", startDate: "" });
      // Optionally fetch updated appointments or employees here
    } catch (err) {
      setError("Error adding employee. Please try again later.");
      console.error("Error adding employee:", err);
    }
  };

  return (
    <div
      className={`flex flex-col ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-300`}
    >
      {/* Header */}
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
          <span className="text-xl font-bold">CarePulse</span>
        </div>
        <div className="flex items-center">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-2">Patient</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar
          isSidebarOpen={isSidebarOpen}
          isDarkMode={isDarkMode}
          toggleSidebar={toggleSidebar}
          scheduledCount={scheduledCount}
          pendingCount={pendingCount}
          cancelledCount={cancelledCount}
        />

        {/* Main Content */}
        <main className="flex-grow px-4 sm:px-6 lg:px-8">
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Welcome, Patient</h1>
              <Dialog
                open={isNewEmployeeFormOpen}
                onOpenChange={setIsNewEmployeeFormOpen}
              >
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Employee
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
                >
                  <DialogHeader>
                    <DialogTitle>Add New Employee</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    {/* Employee Form Fields */}
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter employee name"
                        value={employeeData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter employee email"
                        value={employeeData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="nurse">Nurse</SelectItem>
                          <SelectItem value="receptionist">
                            Receptionist
                          </SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={employeeData.startDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex justify-between">
                      <Button type="submit" className="w-1/2 mr-2">
                        Add Employee
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-1/2 ml-2"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Temp Password
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Appointment Statistics */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Appointment Statistics</h2>
              {error && <p className="text-red-500">{error}</p>}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-bold">Total Scheduled</p>
                  <p className="text-2xl">{scheduledCount}</p>
                </div>
                <div className="bg-yellow-500 p-4 rounded-lg">
                  <p className="font-bold">Pending</p>
                  <p className="text-2xl">{pendingCount}</p>
                </div>
                <div className="bg-red-500 p-4 rounded-lg">
                  <p className="font-bold">Cancelled</p>
                  <p className="text-2xl">{cancelledCount}</p>
                </div>
              </div>
            </div>

            {/* Appointment Table */}
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Table>
                <TableHead sx={{ backgroundColor: "#002f5c", color: "white" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Doctor
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Scheduled
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Reason
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow
                      key={appointment._id}
                      sx={{
                        backgroundColor: "#fff",
                        "&:nth-of-type(even)": { backgroundColor: "#f9f9f9" },
                        "&:hover": { backgroundColor: "#f0f0f0" },
                      }}
                    >
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>
                        {new Date(appointment.schedule).toLocaleString()}
                      </TableCell>
                      <TableCell>{appointment.reason}</TableCell>
                      <TableCell>{appointment.status}</TableCell>
                      <TableCell>
                        {/* Download Button */}
                        <IconButton
                          sx={{
                            backgroundColor: "blue !important",
                            color: "white !important",
                            "&:hover": {
                              backgroundColor: "darkblue !important",
                            },
                            marginRight: "8px",
                            borderRadius: "4px",
                          }}
                          onClick={() => downloadAppointment(appointment)}
                        >
                          <DownloadIcon />
                        </IconButton>

                        {/* Delete Button */}
                        <IconButton
                          sx={{
                            backgroundColor: "red !important",
                            color: "white !important",
                            "&:hover": {
                              backgroundColor: "darkred !important",
                            },
                            marginRight: "8px",
                            borderRadius: "4px",
                          }}
                          onClick={() => handleDeleteAppointment(appointment)}
                        >
                          <DeleteIcon />
                        </IconButton>

                        {/* Cancel Button */}
                        <IconButton
                          sx={{
                            backgroundColor: "yellow !important",
                            color: "black !important",
                            "&:hover": {
                              backgroundColor: "goldenrod !important",
                            },
                            borderRadius: "4px",
                          }}
                          onClick={() => handleCancelAppointment(appointment)}
                        >
                          <CancelIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </main>
      </div>
    </div>
  );
}
