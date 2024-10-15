import Image from "next/image";
import { redirect } from "next/navigation";
import axios from "axios";

import { AppointmentForm } from "@/components/forms/AppointmentForm";

const Appointment = async ({ params: { userId } }:SearchParamProps) => {
  try {
    // Fetch patient data using Axios
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/patients/${userId}`);
    const patient = response.data;

    // If the patient is not found, redirect or handle the error
    if (!patient) {
      redirect(`/error`); // Redirect to an error page or handle accordingly
      return; // Prevent further execution
    }

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
              patientId={patient?.$id}
              userId={userId}
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
  } catch (error) {
    console.error('Error fetching patient data:', error);
    // Redirect to an error page or handle the error as needed
    redirect(`/error`); // Redirect to an error page
  }
};

export default Appointment;
