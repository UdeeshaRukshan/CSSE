"use client";
import React from 'react';
import { jsPDF } from 'jspdf';
import { useState, useEffect } from "react";
import { Plus} from "lucide-react";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import axios from "axios";
import { saveAs } from "file-saver";
import SideBar from "../../table/SideBar";
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
import Cookies from 'js-cookie';

export default function Employees() {
  const [appointments, setAppointments] = useState([]);
  const [scheduledCount, setScheduledCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [cancelledCount, setCancelledCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNewEmployeeFormOpen, setIsNewEmployeeFormOpen] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();
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

  const generatePDF = (appointment) => {
    const doc = new jsPDF();

    // Set up the title and header styles
    doc.setFontSize(20);
    doc.text('Appointment Details', 14, 22);
    doc.setFontSize(12);
    
    // Add a line for separation
    doc.line(14, 25, 196, 25);
    
    // Add appointment details
    doc.setFontSize(12);
    doc.text(`Doctor: ${appointment.doctor}`, 14, 30);
    doc.text(`Scheduled: ${new Date(appointment.schedule).toLocaleString()}`, 14, 35);
    doc.text(`Reason: ${appointment.reason}`, 14, 40);
    doc.text(`Status: ${appointment.status}`, 14, 45);
    doc.text(`Note: ${appointment.note}`, 14, 50);

    // Save the PDF
    doc.save(`appointment_${appointment._id}.pdf`);
  };
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
  const navigateNewAppointment = () => {
    router.push("/login/patients/login/new-appointment");
  }

  useEffect(() => {
    const userId = Cookies.get("userId");
    console.log(userId);
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
        setTotalCount(
          appointmentsData.length
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
          pendingCount={totalCount}
          cancelledCount={cancelledCount}
        />

        {/* Main Content */}
        <main className="flex-grow px-4 sm:px-6 lg:px-8">
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Welcome, Patient</h1>
              <Button onClick={()=>navigateNewAppointment}>
                <Plus className="w-6 h-6 mr-2" />
                New Appointment
              </Button>
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
                  <p className="font-bold">Total</p>
                  <p className="text-2xl">{totalCount}</p>
                </div>
                <div className="bg-red-500 p-4 rounded-lg">
                  <p className="font-bold">Cancelled</p>
                  <p className="text-2xl">{cancelledCount}</p>
                </div>
              </div>
            </div>

            {/* Appointment Table */}
            <TableContainer component={Paper} sx={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
      <Table>
        <TableHead sx={{ backgroundColor: '#002f5c' }}>
          <TableRow>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Doctor</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Scheduled</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Reason</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Status</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow 
              key={appointment._id} 
              sx={{ 
                backgroundColor: '#fff', 
                '&:nth-of-type(even)': { backgroundColor: '#f9f9f9' }, 
                '&:hover': { backgroundColor: '#f0f0f0' } 
              }}
            >
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>{appointment.doctor}</TableCell>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>{new Date(appointment.schedule).toLocaleString()}</TableCell>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>{appointment.reason}</TableCell>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>{appointment.status}</TableCell>
              <TableCell>
                {/* Download Button */}
                <IconButton
                  sx={{
                    backgroundColor: 'blue !important',
                    color: 'white !important',
                    '&:hover': { backgroundColor: 'darkblue !important' },
                    marginRight: '8px',
                    borderRadius: '4px',
                  }}
                  onClick={() => generatePDF(appointment)}
                >
                  <DownloadIcon />
                </IconButton>

                {/* Delete Button */}
                <IconButton
                  sx={{
                    backgroundColor: 'red !important',
                    color: 'white !important',
                    '&:hover': { backgroundColor: 'darkred !important' },
                    marginRight: '8px',
                    borderRadius: '4px',
                  }}
                  onClick={() => handleDeleteAppointment(appointment)}
                >
                  <DeleteIcon />
                </IconButton>

                {/* Cancel Button */}
                <IconButton
                  sx={{
                    backgroundColor: 'yellow !important',
                    color: 'black !important',
                    '&:hover': { backgroundColor: 'goldenrod !important' },
                    borderRadius: '4px',
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
