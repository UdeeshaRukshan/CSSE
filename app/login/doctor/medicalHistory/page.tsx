// import React from 'react'
// import { Search, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
// import Link from 'next/link'

// const appointments = [
//   { id: 1, doctorName: "Dr. Emily Johnson", hospital: "City Hospital", date: "2023-05-15", diagnosisReport: "Acute bronchitis", prescription: "Antibiotics" },
//   { id: 2, doctorName: "Dr. Michael Lee", hospital: "Central Clinic", date: "2023-03-22", diagnosisReport: "Migraine", prescription: "Pain relievers" },
//   { id: 3, doctorName: "Dr. Sarah Parker", hospital: "Wellness Center", date: "2023-01-10", diagnosisReport: "Sprained ankle", prescription: "RICE method" },
//   { id: 4, doctorName: "Dr. David Wilson", hospital: "Community Health", date: "2022-11-05", diagnosisReport: "Seasonal allergies", prescription: "Antihistamines" },
//   { id: 5, doctorName: "Dr. Lisa Brown", hospital: "Family Care", date: "2022-09-18", diagnosisReport: "Gastroenteritis", prescription: "Oral rehydration" },
// ]

// export default function PatientMedicalHistory({ patientName = "Phoenix Baker" }) {
//   return (
//     <div className="flex h-screen bg-[#E5EEF6]">
//       {/* Navigation Drawer */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-4 bg-[#1C4980] text-white">
//           <h1 className="text-2xl font-bold flex items-center">
//             <span className="bg-white text-[#1C4980] p-1 rounded mr-2">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="currentColor"/>
//                 <path d="M19 16C20.6569 16 22 14.6569 22 13C22 11.3431 20.6569 10 19 10C17.3431 10 16 11.3431 16 13C16 14.6569 17.3431 16 19 16Z" fill="currentColor"/>
//                 <path d="M13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5Z" fill="currentColor"/>
//                 <path d="M13 13C13 14.6569 11.6569 16 10 16C8.34315 16 7 14.6569 7 13C7 11.3431 8.34315 10 10 10C11.6569 10 13 11.3431 13 13Z" fill="currentColor"/>
//                 <path d="M10 24C11.6569 24 13 22.6569 13 21C13 19.3431 11.6569 18 10 18C8.34315 18 7 19.3431 7 21C7 22.6569 8.34315 24 10 24Z" fill="currentColor"/>
//               </svg>
//             </span>
//             SmartMed
//           </h1>
//         </div>
//         <nav className="mt-4">
//           <div className="px-4 py-2 text-sm text-gray-600">Navigation Drawer</div>
//           {['Overview', 'Dashboard', 'Appointments', 'Favorites', 'Trash'].map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               className={`block px-4 py-2 text-sm ${
//                 item === 'Appointments' ? 'bg-[#E5EEF6] text-[#1C4980] font-semibold' : 'text-gray-600'
//               }`}
//             >
//               {item}
//               {item === 'Appointments' && (
//                 <span className="float-right bg-[#1C4980] text-white rounded-full px-2 py-1 text-xs">24</span>
//               )}
//             </a>
//           ))}
//           <div className="mt-4 px-4 text-sm font-semibold text-gray-600">Labels</div>
//           {[1, 2, 3, 4].map((_, index) => (
//             <div key={index} className="flex items-center px-4 py-2 text-sm text-gray-600">
//               <input type="checkbox" className="mr-2" />
//               <span>Label</span>
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Bar */}
//         <header className="bg-[#1C4980] text-white p-4 flex justify-between items-center">
//           <div className="flex-1"></div>
//           <div className="flex items-center bg-white rounded-full px-4 py-2 w-1/2">
//             <Search className="h-5 w-5 text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Hinted search text"
//               className="bg-transparent text-gray-800 w-full focus:outline-none"
//             />
//           </div>
//           <div className="flex-1 flex justify-end items-center">
//             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-[#1C4980] font-bold mr-2">
//               AM
//             </div>
//             <span>Amar</span>
//           </div>
//         </header>

//         {/* Patient Medical History */}
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-2xl font-semibold mb-4 text-[#1C4980]">{patientName}'s Medical Treatment History</h2>
//             <div className="flex space-x-4 mb-4">
//               <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add New Diagnosis Report
//               </button>
//               <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add New Prescription
//               </button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-[#F2F9FF] text-[#1C4980]">
//                     <th className="px-4 py-2 text-left">Doctor's Name</th>
//                     <th className="px-4 py-2 text-left">Hospital</th>
//                     <th className="px-4 py-2 text-left">Date</th>
//                     <th className="px-4 py-2 text-left">Diagnosis Report</th>
//                     <th className="px-4 py-2 text-left">Prescription</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {appointments.map((appointment, index) => (
//                     <tr key={appointment.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F2F9FF]'}>
//                       <td className="px-4 py-2 text-black">{appointment.doctorName}</td>
//                       <td className="px-4 py-2 text-black">{appointment.hospital}</td>
//                       <td className="px-4 py-2 text-black">{appointment.date}</td>
//                       <td className="px-4 py-2">
//                         <button className="bg-green-500 text-white px-2 py-1 rounded-md text-sm">View</button>
//                       </td>
//                       <td className="px-4 py-2">
//                         <button className="bg-green-500 text-white px-2 py-1 rounded-md text-sm">View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="flex justify-between mt-4">
//               <button className="flex items-center text-[#1C4980]">
//                 <ChevronLeft className="h-4 w-4 mr-1" />
//                 <span className="text-2xl">+</span>
//               </button>
//               <button className="flex items-center text-[#1C4980]">
//                 <span className="text-2xl">+</span>
//                 <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }
// 'use client'
// import React, { useState } from 'react'
// import { Search, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react'

// interface Appointment {
//   id: number;
//   doctorName: string;
//   hospital: string;
//   date: string;
//   diagnosisReport: DiagnosisReport;
//   prescription: string;
// }

// interface DiagnosisReport {
//   primaryDiagnosis: string;
//   relatedSymptoms: string;
//   possibleCourse: string;
//   treatmentPlan: string;
// }

// const initialAppointments: Appointment[] = [
//   { 
//     id: 1, 
//     doctorName: "Dr. Emily Johnson", 
//     hospital: "City Hospital", 
//     date: "2023-05-15", 
//     diagnosisReport: {
//       primaryDiagnosis: "Acute bronchitis",
//       relatedSymptoms: "Cough, fever, chest discomfort",
//       possibleCourse: "7-10 days with proper treatment",
//       treatmentPlan: "Antibiotics, rest, increased fluid intake"
//     }, 
//     prescription: "Antibiotics" 
//   },
//   { 
//     id: 2, 
//     doctorName: "Dr. Michael Lee", 
//     hospital: "Central Clinic", 
//     date: "2023-03-22", 
//     diagnosisReport: {
//       primaryDiagnosis: "Migraine",
//       relatedSymptoms: "Severe headache, nausea, light sensitivity",
//       possibleCourse: "4-72 hours per episode",
//       treatmentPlan: "Pain relievers, rest in dark quiet room"
//     }, 
//     prescription: "Pain relievers" 
//   },
//   // ... (other appointments)
// ]

// export default function PatientMedicalHistory({ patientName = "Phoenix Baker" }) {
//   const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments)
//   const [isAddDiagnosisOpen, setIsAddDiagnosisOpen] = useState(false)
//   const [isViewDiagnosisOpen, setIsViewDiagnosisOpen] = useState(false)
//   const [currentDiagnosis, setCurrentDiagnosis] = useState<DiagnosisReport | null>(null)
//   const [newDiagnosis, setNewDiagnosis] = useState<DiagnosisReport>({
//     primaryDiagnosis: '',
//     relatedSymptoms: '',
//     possibleCourse: '',
//     treatmentPlan: ''
//   })

//   const handleAddDiagnosis = () => {
//     setIsAddDiagnosisOpen(true)
//   }

//   const handleViewDiagnosis = (diagnosis: DiagnosisReport) => {
//     setCurrentDiagnosis(diagnosis)
//     setIsViewDiagnosisOpen(true)
//   }

//   const handleSubmitDiagnosis = (e: React.FormEvent) => {
//     e.preventDefault()
//     const newAppointment: Appointment = {
//       id: appointments.length + 1,
//       doctorName: "Current Doctor", // This should be dynamically set in a real application
//       hospital: "Current Hospital", // This should be dynamically set in a real application
//       date: new Date().toISOString().split('T')[0],
//       diagnosisReport: newDiagnosis,
//       prescription: "To be added" // This should be handled separately in a real application
//     }
//     setAppointments([newAppointment, ...appointments])
//     setIsAddDiagnosisOpen(false)
//     setNewDiagnosis({
//       primaryDiagnosis: '',
//       relatedSymptoms: '',
//       possibleCourse: '',
//       treatmentPlan: ''
//     })
//   }

//   return (
//          <div className="flex h-screen bg-[#E5EEF6]">
//       {/* Navigation Drawer */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-4 bg-[#1C4980] text-white">
//           <h1 className="text-2xl font-bold flex items-center">
//             <span className="bg-white text-[#1C4980] p-1 rounded mr-2">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="currentColor"/>
//                 <path d="M19 16C20.6569 16 22 14.6569 22 13C22 11.3431 20.6569 10 19 10C17.3431 10 16 11.3431 16 13C16 14.6569 17.3431 16 19 16Z" fill="currentColor"/>
//                 <path d="M13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5Z" fill="currentColor"/>
//                 <path d="M13 13C13 14.6569 11.6569 16 10 16C8.34315 16 7 14.6569 7 13C7 11.3431 8.34315 10 10 10C11.6569 10 13 11.3431 13 13Z" fill="currentColor"/>
//                 <path d="M10 24C11.6569 24 13 22.6569 13 21C13 19.3431 11.6569 18 10 18C8.34315 18 7 19.3431 7 21C7 22.6569 8.34315 24 10 24Z" fill="currentColor"/>
//               </svg>
//             </span>
//             SmartMed
//           </h1>
//         </div>
//         <nav className="mt-4">
//           <div className="px-4 py-2 text-sm text-gray-600">Navigation Drawer</div>
//           {['Overview', 'Dashboard', 'Appointments', 'Favorites', 'Trash'].map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               className={`block px-4 py-2 text-sm ${
//                 item === 'Appointments' ? 'bg-[#E5EEF6] text-[#1C4980] font-semibold' : 'text-gray-600'
//               }`}
//             >
//               {item}
//               {item === 'Appointments' && (
//                 <span className="float-right bg-[#1C4980] text-white rounded-full px-2 py-1 text-xs">24</span>
//               )}
//             </a>
//           ))}
//           <div className="mt-4 px-4 text-sm font-semibold text-gray-600">Labels</div>
//           {[1, 2, 3, 4].map((_, index) => (
//             <div key={index} className="flex items-center px-4 py-2 text-sm text-gray-600">
//               <input type="checkbox" className="mr-2" />
//               <span>Label</span>
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Bar */}
//         <header className="bg-[#1C4980] text-white p-4 flex justify-between items-center">
//           <div className="flex-1"></div>
//           <div className="flex items-center bg-white rounded-full px-4 py-2 w-1/2">
//             <Search className="h-5 w-5 text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Hinted search text"
//               className="bg-transparent text-gray-800 w-full focus:outline-none"
//             />
//           </div>
//           <div className="flex-1 flex justify-end items-center">
//             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-[#1C4980] font-bold mr-2">
//               AM
//             </div>
//             <span>Amar</span>
//           </div>
//         </header>


//         {/* Patient Medical History */}
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-2xl font-semibold mb-4 text-[#1C4980]">{patientName}'s Medical Treatment History</h2>
//             <div className="flex space-x-4 mb-4">
//               <button 
//                 className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
//                 onClick={handleAddDiagnosis}
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add New Diagnosis
//               </button>
//               <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add New Prescription
//               </button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-[#F2F9FF] text-[#1C4980]">
//                     <th className="px-4 py-2 text-left">Doctor's Name</th>
//                     <th className="px-4 py-2 text-left">Hospital</th>
//                     <th className="px-4 py-2 text-left">Date</th>
//                     <th className="px-4 py-2 text-left">Diagnosis Report</th>
//                     <th className="px-4 py-2 text-left">Prescription</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {appointments.map((appointment, index) => (
//                     <tr key={appointment.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F2F9FF]'}>
//                       <td className="px-4 py-2 text-black">{appointment.doctorName}</td>
//                       <td className="px-4 py-2 text-black">{appointment.hospital}</td>
//                       <td className="px-4 py-2 text-black">{appointment.date}</td>
//                       <td className="px-4 py-2">
//                         <button 
//                           className="bg-green-500 text-white px-2 py-1 rounded-md text-sm"
//                           onClick={() => handleViewDiagnosis(appointment.diagnosisReport)}
//                         >
//                           View
//                         </button>
//                       </td>
//                       <td className="px-4 py-2">
//                         <button className="bg-green-500 text-white px-2 py-1 rounded-md text-sm">View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="flex justify-between mt-4">
//               <button className="flex items-center text-[#1C4980]">
//                 <ChevronLeft className="h-4 w-4 mr-1" />
//                 <span className="text-2xl">+</span>
//               </button>
//               <button className="flex items-center text-[#1C4980]">
//                 <span className="text-2xl">+</span>
//                 <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Add Diagnosis Modal */}
      

// {isAddDiagnosisOpen && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="bg-white p-6 rounded-lg w-full max-w-md">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold">Add New Diagnosis</h3>
//         <button onClick={() => setIsAddDiagnosisOpen(false)}>
//           <X className="h-6 w-6" />
//         </button>
//       </div>
//       <form onSubmit={handleSubmitDiagnosis}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1 text-black" htmlFor="primaryDiagnosis">
//             Primary Diagnosis
//           </label>
//           <input
//             type="text"
//             id="primaryDiagnosis"
//             className="w-full p-2 border rounded bg-green-100 text-black"
//             value={newDiagnosis.primaryDiagnosis}
//             onChange={(e) => setNewDiagnosis({...newDiagnosis, primaryDiagnosis: e.target.value})}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1 text-black" htmlFor="relatedSymptoms">
//             Related Symptoms
//           </label>
//           <input
//             type="text"
//             id="relatedSymptoms"
//             className="w-full p-2 border rounded bg-green-100 text-black"
//             value={newDiagnosis.relatedSymptoms}
//             onChange={(e) => setNewDiagnosis({...newDiagnosis, relatedSymptoms: e.target.value})}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1 text-black" htmlFor="possibleCourse">
//             Possible Course
//           </label>
//           <input
//             type="text"
//             id="possibleCourse"
//             className="w-full p-2 border rounded bg-green-100 text-black"
//             value={newDiagnosis.possibleCourse}
//             onChange={(e) => setNewDiagnosis({...newDiagnosis, possibleCourse: e.target.value})}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1 text-black" htmlFor="treatmentPlan">
//             Treatment Plan
//           </label>
//           <textarea
//             id="treatmentPlan"
//             className="w-full p-2 border rounded bg-green-100 text-black"
//             value={newDiagnosis.treatmentPlan}
//             onChange={(e) => setNewDiagnosis({...newDiagnosis, treatmentPlan: e.target.value})}
//             required
//           ></textarea>
//         </div>
//         <div className="flex justify-end space-x-2">
//           <button
//             type="button"
//             onClick={() => setIsAddDiagnosisOpen(false)}
//             className="px-4 py-2 border rounded text-black" // Updated text color for the Cancel button
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-green-500 text-white rounded"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// )}


       
//       {/* View Diagnosis Modal */}
// {isViewDiagnosisOpen && currentDiagnosis && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="bg-white p-6 rounded-lg w-full max-w-md">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold">Diagnosis Report</h3>
//         <button onClick={() => setIsViewDiagnosisOpen(false)}>
//           <X className="h-6 w-6" />
//         </button>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-black">Primary Diagnosis</label>
//         <p className="p-2 bg-green-100 rounded text-black">{currentDiagnosis.primaryDiagnosis}</p>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-black">Related Symptoms</label>
//         <p className="p-2 bg-green-100 rounded text-black">{currentDiagnosis.relatedSymptoms}</p>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-black">Possible Course</label>
//         <p className="p-2 bg-green-100 rounded text-black">{currentDiagnosis.possibleCourse}</p>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-black">Treatment Plan</label>
//         <p className="p-2 bg-green-100 rounded text-black">{currentDiagnosis.treatmentPlan}</p>
//       </div>
//       <div className="flex justify-end">
//         <button
//           onClick={() => setIsViewDiagnosisOpen(false)}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   )
// }
'use client'
import React, { useState } from 'react'
import { Search, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react'

interface Appointment {
  id: number;
  doctorName: string;
  hospital: string;
  date: string;
  diagnosisReport: DiagnosisReport;
  prescription: Prescription;
}

interface DiagnosisReport {
  primaryDiagnosis: string;
  relatedSymptoms: string;
  possibleCourse: string;
  treatmentPlan: string;
}

interface Prescription {
  medicationName: string;
  form: string;
  strength: string;
  dosage: string;
  frequency: string;
  duration: string;
}

const initialAppointments: Appointment[] = [
  { 
    id: 1, 
    doctorName: "Dr. Emily Johnson", 
    hospital: "City Hospital", 
    date: "2023-05-15", 
    diagnosisReport: {
      primaryDiagnosis: "Acute bronchitis",
      relatedSymptoms: "Cough, fever, chest discomfort",
      possibleCourse: "7-10 days with proper treatment",
      treatmentPlan: "Antibiotics, rest, increased fluid intake"
    }, 
    prescription: {
      medicationName: "Amoxicillin",
      form: "Tablet",
      strength: "500mg",
      dosage: "1 tablet",
      frequency: "3 times daily",
      duration: "7 days"
    }
  },
  { 
    id: 2, 
    doctorName: "Dr. Michael Lee", 
    hospital: "Central Clinic", 
    date: "2023-03-22", 
    diagnosisReport: {
      primaryDiagnosis: "Migraine",
      relatedSymptoms: "Severe headache, nausea, light sensitivity",
      possibleCourse: "4-72 hours per episode",
      treatmentPlan: "Pain relievers, rest in dark quiet room"
    }, 
    prescription: {
      medicationName: "Sumatriptan",
      form: "Tablet",
      strength: "50mg",
      dosage: "1 tablet",
      frequency: "As needed",
      duration: "Max 2 doses per 24 hours"
    }
  },
]

export default function PatientMedicalHistory({ patientName = "Phoenix Baker" }) {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments)
  const [isAddDiagnosisOpen, setIsAddDiagnosisOpen] = useState(false)
  const [isViewDiagnosisOpen, setIsViewDiagnosisOpen] = useState(false)
  const [isAddPrescriptionOpen, setIsAddPrescriptionOpen] = useState(false)
  const [isViewPrescriptionOpen, setIsViewPrescriptionOpen] = useState(false)
  const [currentDiagnosis, setCurrentDiagnosis] = useState<DiagnosisReport | null>(null)
  const [currentPrescription, setCurrentPrescription] = useState<Prescription | null>(null)
  const [newDiagnosis, setNewDiagnosis] = useState<DiagnosisReport>({
    primaryDiagnosis: '',
    relatedSymptoms: '',
    possibleCourse: '',
    treatmentPlan: ''
  })
  const [newPrescription, setNewPrescription] = useState<Prescription>({
    medicationName: '',
    form: '',
    strength: '',
    dosage: '',
    frequency: '',
    duration: ''
  })

  const handleAddDiagnosis = () => {
    setIsAddDiagnosisOpen(true)
  }

  const handleViewDiagnosis = (diagnosis: DiagnosisReport) => {
    setCurrentDiagnosis(diagnosis)
    setIsViewDiagnosisOpen(true)
  }

  const handleAddPrescription = () => {
    setIsAddPrescriptionOpen(true)
  }

  const handleViewPrescription = (prescription: Prescription) => {
    setCurrentPrescription(prescription)
    setIsViewPrescriptionOpen(true)
  }

  const handleSubmitDiagnosis = (e: React.FormEvent) => {
    e.preventDefault()
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      doctorName: "Current Doctor",
      hospital: "Current Hospital",
      date: new Date().toISOString().split('T')[0],
      diagnosisReport: newDiagnosis,
      prescription: {
        medicationName: '',
        form: '',
        strength: '',
        dosage: '',
        frequency: '',
        duration: ''
      }
    }
    setAppointments([newAppointment, ...appointments])
    setIsAddDiagnosisOpen(false)
    setNewDiagnosis({
      primaryDiagnosis: '',
      relatedSymptoms: '',
      possibleCourse: '',
      treatmentPlan: ''
    })
  }

  const handleSubmitPrescription = (e: React.FormEvent) => {
    e.preventDefault()
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      doctorName: "Current Doctor",
      hospital: "Current Hospital",
      date: new Date().toISOString().split('T')[0],
      diagnosisReport: {
        primaryDiagnosis: '',
        relatedSymptoms: '',
        possibleCourse: '',
        treatmentPlan: ''
      },
      prescription: newPrescription
    }
    setAppointments([newAppointment, ...appointments])
    setIsAddPrescriptionOpen(false)
    setNewPrescription({
      medicationName: '',
      form: '',
      strength: '',
      dosage: '',
      frequency: '',
      duration: ''
    })
  }

  return (
    <div className="flex h-screen bg-[#E5EEF6]">
    {/* Navigation Drawer */}
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 bg-[#1C4980] text-white">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="bg-white text-[#1C4980] p-1 rounded mr-2">
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="currentColor"/>
              <path d="M19 16C20.6569 16 22 14.6569 22 13C22 11.3431 20.6569 10 19 10C17.3431 10 16 11.3431 16 13C16 14.6569 17.3431 16 19 16Z" fill="currentColor"/>
              <path d="M13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5Z" fill="currentColor"/>
              <path d="M13 13C13 14.6569 11.6569 16 10 16C8.34315 16 7 14.6569 7 13C7 11.3431 8.34315 10 10 10C11.6569 10 13 11.3431 13 13Z" fill="currentColor"/>
              <path d="M10 24C11.6569 24 13 22.6569 13 21C13 19.3431 11.6569 18 10 18C8.34315 18 7 19.3431 7 21C7 22.6569 8.34315 24 10 24Z" fill="currentColor"/>
            </svg> */}
              <img src="app\login\doctor\favicon.ico" alt="Logo" className="w-6 h-6" />
          </span>
          SmartMed
        </h1>
      </div>
      <nav className="mt-4">
        <div className="px-4 py-2 text-sm text-gray-600 font-bold">Doctor's Menu</div>
        {["Today's Appointments", 'Upcoming Apoointments', 'My Patients', 'My Profile'].map((item, index) => (
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
            placeholder="Hinted search text"
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


        {/* Patient Medical History */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#1C4980]">{patientName}'s Medical Treatment History</h2>
            <div className="flex space-x-4 mb-4">
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
                onClick={handleAddDiagnosis}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Diagnosis
              </button>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
                onClick={handleAddPrescription}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Prescription
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F2F9FF] text-[#1C4980]">
                    <th className="px-4 py-2 text-left">Doctor's Name</th>
                    <th className="px-4 py-2 text-left">Hospital</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Diagnosis Report</th>
                    <th className="px-4 py-2 text-left">Prescription</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={appointment.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F2F9FF]'}>
                      <td className="px-4 py-2 text-black">{appointment.doctorName}</td>
                      <td className="px-4 py-2 text-black">{appointment.hospital}</td>
                      <td className="px-4 py-2 text-black">{appointment.date}</td>
                      <td className="px-4 py-2">
                        <button 
                          className="bg-green-500 text-white px-2 py-1 rounded-md text-sm"
                          onClick={() => handleViewDiagnosis(appointment.diagnosisReport)}
                        >
                          View
                        </button>
                      </td>
                      <td className="px-4 py-2">
                        <button 
                          className="bg-green-500 text-white px-2 py-1 rounded-md text-sm"
                          onClick={() => handleViewPrescription(appointment.prescription)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-4">
              <button className="flex items-center text-[#1C4980]">
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span className="text-2xl">+</span>
              </button>
              <button className="flex items-center text-[#1C4980]">
                <span className="text-2xl">+</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Add Diagnosis Modal */}
      {isAddDiagnosisOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Diagnosis</h3>
              <button onClick={() => setIsAddDiagnosisOpen(false)}>
                <X className="h-6 w-6" />
              
              </button>
            </div>
            <form onSubmit={handleSubmitDiagnosis}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="primaryDiagnosis">
                  Primary Diagnosis
                </label>
                <input
                  type="text"
                  id="primaryDiagnosis"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newDiagnosis.primaryDiagnosis}
                  onChange={(e) => setNewDiagnosis({...newDiagnosis, primaryDiagnosis: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="relatedSymptoms">
                  Related Symptoms
                </label>
                <input
                  type="text"
                  id="relatedSymptoms"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newDiagnosis.relatedSymptoms}
                  onChange={(e) => setNewDiagnosis({...newDiagnosis, relatedSymptoms: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="possibleCourse">
                  Possible Course
                </label>
                <input
                  type="text"
                  id="possibleCourse"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newDiagnosis.possibleCourse}
                  onChange={(e) => setNewDiagnosis({...newDiagnosis, possibleCourse: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="treatmentPlan">
                  Treatment Plan
                </label>
                <textarea
                  id="treatmentPlan"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newDiagnosis.treatmentPlan}
                  onChange={(e) => setNewDiagnosis({...newDiagnosis, treatmentPlan: e.target.value})}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddDiagnosisOpen(false)}
                  className="px-4 py-2 border rounded text-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Diagnosis Modal */}
      {isViewDiagnosisOpen && currentDiagnosis && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Diagnosis Report</h3>
              <button onClick={() => setIsViewDiagnosisOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Primary Diagnosis</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentDiagnosis.primaryDiagnosis}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Related Symptoms</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentDiagnosis.relatedSymptoms}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Possible Course</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentDiagnosis.possibleCourse}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Treatment Plan</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentDiagnosis.treatmentPlan}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsViewDiagnosisOpen(false)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Prescription Modal */}
      {isAddPrescriptionOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Prescription</h3>
              <button onClick={() => setIsAddPrescriptionOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmitPrescription}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="medicationName">
                  Medication Name
                </label>
                <input
                  type="text"
                  id="medicationName"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newPrescription.medicationName}
                  onChange={(e) => setNewPrescription({...newPrescription, medicationName: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="form">
                  Form
                </label>
                <input
                  type="text"
                  id="form"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newPrescription.form}
                  onChange={(e) => setNewPrescription({...newPrescription, form: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="strength">
                  Strength
                </label>
                <input
                  type="text"
                  id="strength"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newPrescription.strength}
                  onChange={(e) => setNewPrescription({...newPrescription, strength: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="dosage">
                  Dosage
                </label>
                <input
                  type="text"
                  id="dosage"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newPrescription.dosage}
                  onChange={(e) => setNewPrescription({...newPrescription, dosage: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="frequency">
                  Frequency
                </label>
                <input
                  type="text"
                  id="frequency"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newPrescription.frequency}
                  onChange={(e) => setNewPrescription({...newPrescription, frequency: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="duration">
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  className="w-full p-2 border rounded bg-green-100 text-black"
                  value={newPrescription.duration}
                  onChange={(e) => setNewPrescription({...newPrescription, duration: e.target.value})}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddPrescriptionOpen(false)}
                  className="px-4 py-2 border rounded text-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Prescription Modal */}
      {isViewPrescriptionOpen && currentPrescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Prescription Details</h3>
              <button onClick={() => setIsViewPrescriptionOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Medication Name</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentPrescription.medicationName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Form</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentPrescription.form}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Strength</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentPrescription.strength}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Dosage</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentPrescription.dosage}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Frequency</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentPrescription.frequency}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Duration</label>
              <p className="p-2 bg-green-100 rounded text-black">{currentPrescription.duration}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsViewPrescriptionOpen(false)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}