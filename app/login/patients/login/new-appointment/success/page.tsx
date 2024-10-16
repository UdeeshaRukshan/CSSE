// Mark this component as a Client Component
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";

const RequestSuccess = ({ searchParams, params: { userId } }: SearchParamProps) => {
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const appointmentId = (searchParams?.appointmentId as string) || "";

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/appointment/${appointmentId}`);
        setAppointment(response.data); // Adjust based on the API response structure
      } catch (err) {
        console.error('Error fetching appointment:', err);
       
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [appointmentId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const doctor = Doctors.find((doctor) => doctor.name === appointment?.doctor);
  
  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>Requested appointment details: </p>
          <div className="flex items-center gap-3">
            {doctor && (
              <>
                <Image
                  src={doctor.image}
                  alt="doctor"
                  width={100}
                  height={100}
                  className="size-6"
                />
                <p className="whitespace-nowrap">Dr. {doctor.name}</p>
              </>
            )}
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p>{formatDateTime(appointment?.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/login/patients/login/new-appointment`}>
            New Appointment
          </Link>
        </Button>

       
      </div>
    </div>
  );
};

export default RequestSuccess;
