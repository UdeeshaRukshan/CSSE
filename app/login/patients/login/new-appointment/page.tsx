"use client"; // This should be at the top of the file

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for the App Router
import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

const Appointment = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true); // For handling loading state
  const [error, setError] = useState(null); // For handling errors
  const router = useRouter(); // Use Next.js router for redirection
  const [uId, setUserId] = useState(null);
  useEffect(() => {
    const userId = Cookies.get("userId"); // Moved userId inside useEffect
    setUserId(userId);
    const fetchPatientData = async () => {
      try {
        if (!userId) {
          router.push(`/error`);
          return;
        }

        // Fetch patient data using Axios
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/patients/${userId}`
        );
        const patientData = response.data.patient;
        console.log(patientData);
        // If no patient is found, redirect or handle the error
        if (!patientData) {
          router.push(`/error`);
          return;
        }

        // Set the patient data in state
        setPatient(patientData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching patient data:", error);
        //setError('Failed to fetch patient data'); // Set error message
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [router]); // The effect runs when the router changes

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }
  console.log(patient._id);
  console.log(uId);
  // Render the appointment form once the patient data is fetched
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            patientId={patient._id} // Ensure patient ID is correct
            userId={uId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;
