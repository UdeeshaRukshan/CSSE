"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SelectItem } from "@/components/ui/select";
import { Doctors } from "@/constants";
import { getAppointmentSchema } from "@/lib/validation";

import "react-datepicker/dist/react-datepicker.css";

import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { Form } from "../ui/form";
import axios from "axios";

interface AppointmentFormProps {
  userId: string;
  patientId: string; // Ensure patientId is defined as a prop
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export const AppointmentForm = ({
  userId,
  patientId, // Ensure patientId is passed correctly
  setOpen,
}: AppointmentFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  // Define validation schema for creating an appointment
  const AppointmentFormValidation = getAppointmentSchema("create");

  // Initialize the form with default values
  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      doctor: "",
      schedule: new Date(Date.now()),
      reason: "",
      note: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof AppointmentFormValidation>) => {
    setIsLoading(true);
    console.log("Form submitted with values:", values); // Debugging line

    try {
      const appointmentData = {
        userId, // Include userId
        patientId, // Ensure patientId is included
        doctor: values.doctor,
        schedule: new Date(values.schedule),
        reason: values.reason,
        status: "scheduled", // Default status
        note: values.note,
      };

      // Make the API request to create the appointment
      const { data } = await axios.post('http://localhost:4000/api/appointment', appointmentData);
      console.log("Appointment created:", data); // Debugging line

      if (data) {
        form.reset();
        router.push(`/login/patients/login/new-appointment/success?appointmentId=${data._id}`);
      }
    } catch (error) {
      console.error("Error during appointment creation:", error);
    } finally {
      setIsLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">New Appointment</h1>
          <p className="text-dark-700">
            Request a new appointment in 10 seconds.
          </p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="doctor"
          label="Doctor"
          placeholder="Select a doctor"
        >
          {Doctors.map((doctor, i) => (
            <SelectItem key={doctor.name + i} value={doctor.name}>
              <div className="flex cursor-pointer items-center gap-2">
                <Image
                  src={doctor.image}
                  width={32}
                  height={32}
                  alt="doctor"
                  className="rounded-full border border-dark-500"
                />
                <p>{doctor.name}</p>
              </div>
            </SelectItem>
          ))}
        </CustomFormField>

        <CustomFormField
          fieldType={FormFieldType.DATE_PICKER}
          control={form.control}
          name="schedule"
          label="Expected appointment date"
          showTimeSelect
          dateFormat="MM/dd/yyyy  -  h:mm aa"
        />

        <div className="flex flex-col gap-6">
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="reason"
            label="Appointment reason"
            placeholder="Annual monthly check-up"
          />

          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="note"
            label="Comments/notes"
            placeholder="Prefer afternoon appointments, if possible"
          />
        </div>

        <SubmitButton
          isLoading={isLoading}
          className="shad-primary-btn w-full"
        >
          Submit Appointment
        </SubmitButton>
      </form>
    </Form>
  );
};
