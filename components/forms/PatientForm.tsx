"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';
import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    setErrorMessage(""); // Reset error message

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
      };
      console.log('User object:', user);
  
      const response = await axios.post(`http://localhost:4000/api/users/signup`, user);
      console.log('Full Response Object:', response);
  
      if (response.data) {
        console.log('This is the response:', response.data);
        const userId = response.data.user._id;

        if (userId) {
          router.push(`/login/patients/login/reg`);
        } else {
          console.error('User ID is undefined.');
          setErrorMessage("User ID is undefined.");
        }
      } else {
        console.error('Response data is undefined');
        setErrorMessage("Response data is undefined.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error response data:', error.response?.data);
        console.error('Error status:', error.response?.status);
        setErrorMessage(error.response?.data?.message || "An error occurred.");
      } else {
        console.error('An error occurred:', error);
        setErrorMessage("An error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />
         
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter your password"
        />

        <SubmitButton isLoading={isLoading} >
          Get Started
        </SubmitButton>
      </form>
    </Form>
  );
};
