import Image from "next/image";
import { redirect } from "next/navigation";
import axios from "axios";

import RegisterForm from "@/components/forms/RegisterForm";

const Register = async ({ params: { userId } }:SearchParamProps) => {
  try {
    // Fetch user data using Axios
    const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`);
    const user = userResponse.data;

    // Fetch patient data using Axios
    const patientResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/patients/${userId}`);
    const patient = patientResponse.data;

    // Redirect if the patient already exists
    if (patient) redirect(`/patients/login/${userId}/new-appointment`);

    return (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />

            <RegisterForm user={user} />

            <p className="copyright py-12">© 2024 CarePluse</p>
          </div>
        </section>

        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[390px]"
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching user or patient:', error);
    // Handle error accordingly, e.g., redirect to an error page or display an error message
  }
};

export default Register;
