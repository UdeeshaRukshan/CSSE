"use client";

import Image from "next/image";
import Link from "next/link";
import { StatCard } from "@/components/StatCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { saveAs } from 'file-saver';
import { Table, Button, Alert } from 'react-bootstrap'; // Importing Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [scheduledCount, setScheduledCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [cancelledCount, setCancelledCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/appointment`);
        const appointmentsData = response.data;
        console.log(appointmentsData);
        setAppointments(appointmentsData);

        setScheduledCount(appointmentsData.filter(app => app.status === 'scheduled').length);
        setPendingCount(appointmentsData.filter(app => app.status === 'pending').length);
        setCancelledCount(appointmentsData.filter(app => app.status === 'cancelled').length);
      } catch (err) {
        setError('Error fetching appointments. Please try again later.');
        console.error('Error fetching appointments:', err);
      }
    };

    fetchAppointments();
  }, []);

  // Function to download appointment as JSON
  const downloadAppointment = (appointment) => {
    const blob = new Blob([JSON.stringify(appointment, null, 2)], { type: 'application/json' });
    saveAs(blob, `appointment_${appointment._id}.json`);
  };

  const updateStatus = async (id, newStatus) => {
    // Implement the update logic here
  };

  const deleteAppointment = async (id) => {
    // Implement the delete logic here
  };

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div className="mx-auto container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <h2 className="text-center">Admin Dashboard</h2>
      </header>

      <main className="admin-main">
        <section className="mb-4 text-center">
          <h1>Welcome 👋</h1>
          <p>Start the day with managing new appointments</p>
        </section>

        <section className="row mb-4">
          <div className="col-md-4">
            <StatCard
              type="appointments"
              count={scheduledCount}
              label="Scheduled appointments"
              icon={"/assets/icons/appointments.svg"}
            />
          </div>
          <div className="col-md-4">
            <StatCard
              type="pending"
              count={pendingCount}
              label="Pending appointments"
              icon={"/assets/icons/pending.svg"}
            />
          </div>
          <div className="col-md-4">
            <StatCard
              type="cancelled"
              count={cancelledCount}
              label="Cancelled appointments"
              icon={"/assets/icons/cancelled.svg"}
            />
          </div>
        </section>

        <section className="appointment-table">
          <h2>Manage Appointments</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Doctor</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Status</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.userId}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.reason}</td>
                  <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
                  <td>{appointment.status}</td>
                  <td>{appointment.notes}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => updateStatus(appointment._id, 'completed')}
                      className="me-2"
                    >
                      Mark as Completed
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteAppointment(appointment._id)}
                      className="me-2"
                    >
                      Delete
                    </Button>
                    <Button
                      variant="info"
                      onClick={() => downloadAppointment(appointment)}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
