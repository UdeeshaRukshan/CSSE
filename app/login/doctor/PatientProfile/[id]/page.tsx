// 'use client'
// import React, { useState } from 'react'
// import { Search, ChevronLeft, ChevronRight, User, Phone, MapPin, Briefcase, Users, AlertCircle, FileText, Heart, Package2, Plus, X } from 'lucide-react'
// import { Button } from "@/components/ui/button"

// interface PatientDetails {
//   name: string;
//   age: number;
//   gender: string;
//   address: string;
//   maritalStatus: string;
//   phone: string;
//   occupation: string;
//   guardian: string;
//   guardianTel: string;
//   primaryCarePhysician: string;
//   insuranceProvider: string;
//   insurancePolicyNumber: string;
//   allergies: string[];
//   familyMedicalHistory: string;
//   currentMedications: string;
// }

// const patientData: PatientDetails = {
//   name: "Mr. Kamal",
//   age: 27,
//   gender: "Male",
//   address: "Colombo",
//   maritalStatus: "Single",
//   phone: "+94123456789",
//   occupation: "Software Engineer",
//   guardian: "Saman Kumara",
//   guardianTel: "+94123456789",
//   primaryCarePhysician: "Dr. Amarangi",
//   insuranceProvider: "Blue Cross",
//   insurancePolicyNumber: "ABCD1234",
//   allergies: ["Peanuts", "Penicillin", "Pollen"],
//   familyMedicalHistory: "Mother Had Breast Cancer",
//   currentMedications: "Ibuprofen 200mg"
// }

// export default function PatientDetailsPage() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-[#E5EEF6]">
//     {/* Navigation Drawer */}
//     <div className="w-64 bg-white shadow-md">
//       <div className="p-4 bg-[#1C4980] text-white">
//         <h1 className="text-2xl font-bold flex items-center">
//           <span className="bg-white text-[#1C4980] p-1 rounded mr-2">
//             {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="currentColor"/>
//               <path d="M19 16C20.6569 16 22 14.6569 22 13C22 11.3431 20.6569 10 19 10C17.3431 10 16 11.3431 16 13C16 14.6569 17.3431 16 19 16Z" fill="currentColor"/>
//               <path d="M13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5Z" fill="currentColor"/>
//               <path d="M13 13C13 14.6569 11.6569 16 10 16C8.34315 16 7 14.6569 7 13C7 11.3431 8.34315 10 10 10C11.6569 10 13 11.3431 13 13Z" fill="currentColor"/>
//               <path d="M10 24C11.6569 24 13 22.6569 13 21C13 19.3431 11.6569 18 10 18C8.34315 18 7 19.3431 7 21C7 22.6569 8.34315 24 10 24Z" fill="currentColor"/>
//             </svg> */}
//               <img src="app\login\doctor\favicon.ico" alt="Logo" className="w-6 h-6" />
//           </span>
//           SmartMed
//         </h1>
//       </div>
//       <nav className="mt-4">
//         <div className="px-4 py-2 text-sm text-gray-600 font-bold">Doctor's Menu</div>
//         {["Today's Appointments", 'Upcoming Apoointments', 'My Patients', 'My Profile'].map((item, index) => (
//           <a
//             key={index}
//             href="#"
//             className={`block px-4 py-2 text-sm ${
//               item === "Today's Appointments" ? 'bg-[#E5EEF6] text-[#1C4980] font-semibold' : 'text-gray-600'
//             }`}
//           >
//             {item}
//             {item === "Today's Appointments" && (
//               <span className="float-right bg-[#1C4980] text-white rounded-full px-2 py-1 text-xs">24</span>
//             )}
//           </a>
//         ))}
         
//       </nav>
//     </div>

//     {/* Main Content */}
//     <div className="flex-1 flex flex-col">
//       {/* Top Bar */}
//       <header className="bg-[#1C4980] text-white p-4 flex justify-between items-center">
//         <div className="flex-1"></div>
//         <div className="flex items-center bg-white rounded-full px-4 py-2 w-1/2">
//           <Search className="h-5 w-5 text-gray-400 mr-2" />
//           <input
//             type="text"
//             placeholder="Hinted search text"
//             className="bg-transparent text-gray-800 w-full focus:outline-none"
//           />
//         </div>
//         <div className="flex-1 flex justify-end items-center">
//           <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-[#1C4980] font-bold mr-2">
//             AM
//           </div>
//           <span>Amar</span>
//         </div>
//       </header>

//         {/* Patient Details Content */}
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div className="flex items-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                   <User className="w-8 h-8 text-blue-500" />
//                 </div>
//                 <h2 className="text-2xl font-semibold text-gray-800">Patient Name : {patientData.name}</h2>
//               </div>
//               <button className="bg-[#66BB6A] hover:bg-[#5CA85C] text-white font-bold py-2 px-4 rounded-lg text-center">
//   Medical History
// </button>

//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
//                 <div className="space-y-3">
//                   <InfoItem icon={<User />} label="Age" value={patientData.age.toString()} />
//                   <InfoItem icon={<User />} label="Gender" value={patientData.gender} />
//                   <InfoItem icon={<MapPin />} label="Address" value={patientData.address} />
//                   <InfoItem icon={<Users />} label="Marital Status" value={patientData.maritalStatus} />
//                   <InfoItem icon={<Phone />} label="Phone" value={patientData.phone} />
//                   <InfoItem icon={<Briefcase />} label="Occupation" value={patientData.occupation} />
//                   <InfoItem icon={<User />} label="Guardian" value={patientData.guardian} />
//                   <InfoItem icon={<Phone />} label="Guardian Tel" value={patientData.guardianTel} />
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-700">Medical Care Information</h3>
//                 <div className="space-y-3">
//                   <InfoItem icon={<User />} label="Primary Care Physician" value={patientData.primaryCarePhysician} />
//                   <InfoItem icon={<FileText />} label="Insurance Provider" value={patientData.insuranceProvider} />
//                   <InfoItem icon={<FileText />} label="Insurance Policy Number" value={patientData.insurancePolicyNumber} />
//                   <InfoItem 
//                     icon={<AlertCircle />} 
//                     label="Allergies" 
//                     value={patientData.allergies.join(", ")} 
//                   />
//                   <InfoItem icon={<Heart />} label="Family Medical History" value={patientData.familyMedicalHistory} />
//                   <InfoItem icon={<FileText />} label="Current Medications" value={patientData.currentMedications} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
//   return (
//     <div className="flex items-center">
//       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//         {icon}
//       </div>
//       <div>
//         <p className="text-sm text-gray-500">{label}</p>
//         <p className="text-sm font-medium text-gray-700">{value}</p>
//       </div>
//     </div>
//   )
// }

//  

// 'use client'

// import React, { useState, useEffect } from 'react'
// import { useParams } from 'next/navigation'
// import { User, Mail, Calendar, MapPin, Briefcase, Phone, UserPlus, FileText, AlertCircle, Pill, Heart, FileCheck, CreditCard } from 'lucide-react'
// import { Button } from "@/components/ui/button"

// interface PatientDetails {
//   _id: string;
//   userId: string;
//   email: string;
//   birthDate: string;
//   gender: string;
//   address: string;
//   occupation: string;
//   emergencyContactName: string;
//   emergencyContactNumber: string;
//   primaryPhysician: string;
//   insuranceProvider: string;
//   insurancePolicyNumber: string;
//   allergies: string[];
//   currentMedication: string[];
//   familyMedicalHistory: string[];
//   pastMedicalHistory: string[];
//   identificationType: string;
//   identificationNumber: string;
//   identificationDocument: string;
//   privacyConsent: boolean;
// }

// export default function PatientDetailsPage() {
//   const [patientData, setPatientData] = useState<PatientDetails | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const params = useParams();
//   const id = params.id as string;

//   useEffect(() => {
//     if (id) {
//       fetchPatientDetails(id);
//     }
//   }, [id]);

//   const fetchPatientDetails = async (patientId: string) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:4000/api/doctor/getpatient/${patientId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch patient details');
//       }
//       const data = await response.json();
//       setPatientData(data);
//       setIsLoading(false);
//     } catch (err) {
//       setError('Failed to load patient details. Please try again later.');
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return <div className="flex h-screen items-center justify-center">Loading patient details...</div>;
//   }

//   if (error) {
//     return <div className="flex h-screen items-center justify-center text-red-500">{error}</div>;
//   }

//   if (!patientData) {
//     return <div className="flex h-screen items-center justify-center">No patient data available.</div>;
//   }

//   return (
//     <div className="flex h-screen bg-[#E5EEF6]">
//       <div className="flex-1 flex flex-col">
//         <header className="bg-[#1C4980] text-white p-4">
//           <h1 className="text-2xl font-bold">Patient Profile</h1>
//         </header>

//         <main className="flex-1 p-6 overflow-auto">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div className="flex items-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                   <User className="w-8 h-8 text-blue-500" />
//                 </div>
//                 <h2 className="text-2xl font-semibold text-gray-800">Patient ID: {patientData.userId}</h2>
//               </div>
//               <Button className="bg-[#66BB6A] hover:bg-[#5CA85C] text-white font-bold">
//                 Edit Profile
//               </Button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
//                 <div className="space-y-3">
//                   <InfoItem icon={<Mail />} label="Email" value={patientData.email} />
//                   <InfoItem icon={<Calendar />} label="Birth Date" value={new Date(patientData.birthDate).toLocaleDateString()} />
//                   <InfoItem icon={<User />} label="Gender" value={patientData.gender} />
//                   <InfoItem icon={<MapPin />} label="Address" value={patientData.address} />
//                   <InfoItem icon={<Briefcase />} label="Occupation" value={patientData.occupation} />
//                   <InfoItem icon={<UserPlus />} label="Emergency Contact" value={`${patientData.emergencyContactName} (${patientData.emergencyContactNumber})`} />
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-700">Medical Information</h3>
//                 <div className="space-y-3">
//                   <InfoItem icon={<User />} label="Primary Physician" value={patientData.primaryPhysician} />
//                   <InfoItem icon={<FileText />} label="Insurance Provider" value={patientData.insuranceProvider} />
//                   <InfoItem icon={<FileText />} label="Insurance Policy Number" value={patientData.insurancePolicyNumber} />
//                   <InfoItem icon={<AlertCircle />} label="Allergies" value={patientData.allergies.join(", ")} />
//                   <InfoItem icon={<Pill />} label="Current Medication" value={patientData.currentMedication.join(", ")} />
//                   <InfoItem icon={<Heart />} label="Family Medical History" value={patientData.familyMedicalHistory.join(", ")} />
//                   <InfoItem icon={<FileCheck />} label="Past Medical History" value={patientData.pastMedicalHistory.join(", ")} />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               <h3 className="text-xl font-semibold mb-4 text-gray-700">Identification</h3>
//               <div className="space-y-3">
//                 <InfoItem icon={<CreditCard />} label="Identification Type" value={patientData.identificationType} />
//                 <InfoItem icon={<CreditCard />} label="Identification Number" value={patientData.identificationNumber} />
//                 <InfoItem icon={<FileText />} label="Identification Document" value={<a href={patientData.identificationDocument} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Document</a>} />
//                 <InfoItem icon={<FileCheck />} label="Privacy Consent" value={patientData.privacyConsent ? "Provided" : "Not Provided"} />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
//   return (
//     <div className="flex items-center">
//       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//         {icon}
//       </div>
//       <div>
//         <p className="text-sm text-gray-500">{label}</p>
//         <p className="text-sm font-medium text-gray-700">{value}</p>
//       </div>
//     </div>
//   )
// }

'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Search, ChevronLeft, ChevronRight, User, Mail, Calendar, MapPin, Briefcase, Phone, UserPlus, FileText, AlertCircle, Pill, Heart, FileCheck, CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import DefaultSidebar from '../sidebar/page'

interface PatientDetails {
  _id: string;
  username:string,
  userId: string;
  email: string;
  birthDate: string;
  gender: string;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string[];
  currentMedication: string[];
  familyMedicalHistory: string[];
  pastMedicalHistory: string[];
  identificationType: string;
  identificationNumber: string;
  identificationDocument: string;
  privacyConsent: boolean;
}

export default function PatientDetailsPage() {
  const [patientData, setPatientData] = useState<PatientDetails | null>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  

  const handlePatientClick = (patientId: string) => {
    router.push(`/login/doctor/medicalHistory/${patientId}`);
  };

  useEffect(() => {
    if (id) {
      console.log(id);
      fetchPatientDetails(id);
    }
  }, [id]);

  const fetchPatientDetails = async (patientId: string) => {
    try {
      setIsLoading(true);
      console.log(patientId);
      const response = await fetch(`http://localhost:4000/api/doctor/getpatient/${patientId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch patient details');
      }
      const data = await response.json();
      console.log(data);
      setPatientData(data);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load patient details. Please try again later.');
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading patient details...</div>;
  }

  if (error) {
    return <div className="flex h-screen items-center justify-center text-red-500">{error}</div>;
  }

  if (!patientData) {
    return <div className="flex h-screen items-center justify-center">No patient data available.</div>;
  }

  return (
    <div className="flex h-screen bg-[#E5EEF6]">
      {/* Navigation Drawer */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 bg-[#1C4980] text-white">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="bg-white text-[#1C4980] p-1 rounded mr-2">
              <img src="/placeholder.svg?height=24&width=24" alt="Logo" className="w-6 h-6" />
            </span>
            SmartMed
          </h1>
        </div>
        <nav className="mt-4">
          <div className="px-4 py-2 text-sm text-gray-600 font-bold">Doctor's Menu</div>
          {["Today's Appointments", 'Upcoming Appointments', 'My Patients', 'My Profile'].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`block px-4 py-2 text-sm ${
                item === "Today's Appointments" ? 'bg-[#E5EEF6] text-[#1C4980] font-semibold' : 'text-gray-600'
              }`}
            >
              {item}
              {item === "Today's Appointments" && (
                <span className="float-right bg-[#1C4980] text-white rounded-full px-2 py-1 text-xs">24</span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-[#1C4980] text-white p-4 flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-1/2">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search patients, appointments..."
              className="bg-transparent text-gray-800 w-full focus:outline-none"
            />
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-[#1C4980] font-bold mr-2">
              AM
            </div>
            <span>Amar</span>
          </div>
        </header>

        {/* Patient Details Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Patient ID: {patientData.userId}</h2>
              </div>
              <button className="bg-[#aaf0c9] hover:bg-[#5CA85C] text-black font-bold py-2 px-6 rounded-lg w-48 h-12 flex items-center justify-center"
        onClick={() => handlePatientClick(patientData._id)} >
        Medical History
</button>
               
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
                <div className="space-y-3">
                  <InfoItem icon={<Mail />} label="Email" value={patientData.email} />
                  <InfoItem icon={<Calendar />} label="Birth Date" value={new Date(patientData.birthDate).toLocaleDateString()} />
                  <InfoItem icon={<User />} label="Gender" value={patientData.gender} />
                  <InfoItem icon={<MapPin />} label="Address" value={patientData.address} />
                  <InfoItem icon={<Briefcase />} label="Occupation" value={patientData.occupation} />
                  <InfoItem icon={<UserPlus />} label="Emergency Contact" value={`${patientData.emergencyContactName} (${patientData.emergencyContactNumber})`} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Medical Information</h3>
                <div className="space-y-3">
                  <InfoItem icon={<User />} label="Primary Physician" value={patientData.primaryPhysician} />
                  <InfoItem icon={<FileText />} label="Insurance Provider" value={patientData.insuranceProvider} />
                  <InfoItem icon={<FileText />} label="Insurance Policy Number" value={patientData.insurancePolicyNumber} />
                  <InfoItem icon={<AlertCircle />} label="Allergies" value={patientData.allergies.join(", ")} />
                  <InfoItem icon={<Pill />} label="Current Medication" value={patientData.currentMedication.join(", ")} />
                  <InfoItem icon={<Heart />} label="Family Medical History" value={patientData.familyMedicalHistory.join(", ")} />
                  <InfoItem icon={<FileCheck />} label="Past Medical History" value={patientData.pastMedicalHistory.join(", ")} />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Identification</h3>
              <div className="space-y-3">
                <InfoItem icon={<CreditCard />} label="Identification Type" value={patientData.identificationType} />
                <InfoItem icon={<CreditCard />} label="Identification Number" value={patientData.identificationNumber} />
                <InfoItem icon={<FileText />} label="Identification Document" value={<a href={patientData.identificationDocument} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Document</a>} />
                <InfoItem icon={<FileCheck />} label="Privacy Consent" value={patientData.privacyConsent ? "Provided" : "Not Provided"} />
              </div>
            </div>
          </div>
        </main>

        {/* Pagination */}
        <div className="flex justify-between p-4 bg-white border-t">
          <button className="flex items-center text-[#1C4980]">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Previous</span>
          </button>
          <button className="flex items-center text-[#1C4980]">
            <span className="text-sm">Next</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-700">{value}</p>
      </div>
    </div>
  )
}