// 
// 'use client';
// import React, { useState, useEffect } from 'react'
// import { Search, ChevronLeft, ChevronRight } from 'lucide-react'

 

// export default function DoctorDashboard() {
//   const [appointments, setAppointments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetch('http://localhost:4000/api/doctorappointment/doctor/6712903d40cc48e7c37d2f4f/today-appointments')
//       .then(response => response.json())
//       .then(data => {
//         // Extract only the necessary fields
//         const filteredAppointments = data.data.map(appointment => ({
//           id: appointment._id,
//           patient: appointment.patient._id,  // Or any other patient info you need
//           date: appointment.appointmentDate,
//           time: appointment.time
//         }));
//         console.log(filteredAppointments);
//         setAppointments(filteredAppointments);
//       })
//       .catch(error => console.error('Error fetching appointments:', error));
//   }, []);

//   return (
//     <div className="flex h-screen bg-[#E5EEF6]">
//       {/* Navigation Drawer */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-4 bg-[#1C4980] text-white">
//           <h1 className="text-2xl font-bold flex items-center">
//             <span className="bg-white text-[#1C4980] p-1 rounded mr-2">
//               <img src="/placeholder.svg?height=24&width=24" alt="Logo" className="w-6 h-6" />
//             </span>
//             SmartMed
//           </h1>
//         </div>
//         <nav className="mt-4">
//           <div className="px-4 py-2 text-sm text-gray-600 font-bold">Doctor's Menu</div>
//           {["Today's Appointments", 'Upcoming Appointments', 'My Patients', 'My Profile'].map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               className={`block px-4 py-2 text-sm ${
//                 item === "Today's Appointments" ? 'bg-[#E5EEF6] text-[#1C4980] font-semibold' : 'text-gray-600'
//               }`}
//             >
//               {item}
//               {item === "Today's Appointments" && (
//                 <span className="float-right bg-[#1C4980] text-white rounded-full px-2 py-1 text-xs">
//                   {appointments.length}
//                 </span>
//               )}
//             </a>
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
//               placeholder="Search patients, appointments..."
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

//         {/* Dashboard Content */}
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4 text-black">Your Appointments Today</h2>
//             <div className="bg-[#F2F9FF] rounded-lg p-4">
//               {isLoading ? (
//                 <p className="text-center py-4">Loading appointments...</p>
//               ) : error ? (
//                 <p className="text-center py-4 text-red-500">{error}</p>
//               ) : appointments.length === 0 ? (
//                 <p className="text-center py-4">No appointments scheduled for today.</p>
//               ) : (
//                 <table className="w-full">
//                   <thead>
//                     <tr className="text-left text-sm text-gray-600">
//                       <th className="pb-2">Patient</th>
//                       <th className="pb-2">Appointment ID</th>
//                       <th className="pb-2">Date</th>
//                       <th className="pb-2">Time</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {appointments.map((appointment, index) => (
//                       <tr key={appointment.id} className={index % 2 === 0 ? 'bg-white' : ''}>
//                         <td className="py-2 text-black">
//                           <div className="flex items-center">
//                             <div
//                               className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mr-2 ${
//                                 ['bg-green-200', 'bg-blue-200', 'bg-blue-200', 'bg-green-200', 'bg-purple-200'][index]
//                               }`}
//                             >
                            
//                             </div>
//                             {appointment.patient}
//                           </div>
//                         </td>
//                         <td className="py-2 text-black">{appointment.id}</td>
//                         <td className="py-2 text-black">{appointment.date}</td>
//                         <td className="py-2 text-black">{appointment.time}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//             <div className="flex justify-between mt-4">
//               <button className="flex items-center text-[#1C4980]">
//                 <ChevronLeft className="h-4 w-4 mr-1" />
//                 <span className="text-sm">Previous</span>
//               </button>
//               <button className="flex items-center text-[#1C4980]">
//                 <span className="text-sm">Next</span>
//                 <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

'use client';
import React, { useState, useEffect } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Cookies from 'js-cookie';
import PatientFacade from './Facade/PatientFacade'




interface Appointment {
  id: string;
  patient: string;
  date: string;
  time: string;
}

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [doctorId, setDoctorId] = useState<string | null>(null);
  const router = useRouter();
  

  const handlePatientClick = (patientId: string,appointmentId: string) => {
    Cookies.set('appointmentId', appointmentId, { expires: 1 });
    router.push(`/login/doctor/PatientProfile/${patientId}`);
  };

  useEffect(() => {
    const fetchDoctorId = async () => {
      const userEmail = Cookies.get('userEmail');
      if (!userEmail) {
        setError('User email not found. Please log in again.');
        return;
      }

      try {
        const response = await fetch(`http://localhost:4000/api/doctor/getdoctorbyemail/${userEmail}`);
        if (!response.ok) {
          throw new Error('Failed to fetch doctor ID');
        }
        const data = await response.json();
        console.log(data.doctor._id);
        setDoctorId(data.doctor._id);
        
      } catch (error) {
        console.error('Error fetching doctor ID:', error);
        setError('Failed to load doctor information. Please try again later.');
      }
    };

    fetchDoctorId();
  }, []);

  useEffect(() => {
    if (!doctorId) return; // Only run if doctorId is set

    const fetchAppointments = async () => {
      setIsLoading(true);
      try {
        const response = await PatientFacade.getTodaysAppointments(doctorId);
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        const filteredAppointments = data.data.map((appointment: any) => ({
          id: appointment._id,
          patient: appointment.patient.userId,
          date: appointment.appointmentDate,
          time: appointment.time
        }));
        setAppointments(filteredAppointments); // Set the appointments state
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('Failed to load appointments. Please try again later.');
      } finally {
        setIsLoading(false); // Stop loading once the request completes
      }
    };

    fetchAppointments();
  }, [doctorId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getInitials = (patientId: string) => {
    return patientId.slice(0, 2).toUpperCase();
  };

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
                <span className="float-right bg-[#1C4980] text-white rounded-full px-2 py-1 text-xs">
                  {appointments.length}
                </span>
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

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Your Appointments Today</h2>
            <div className="bg-[#F2F9FF] rounded-lg p-4">
              {isLoading ? (
                <p className="text-center py-4">Loading appointments...</p>
              ) : error ? (
                <p className="text-center py-4 text-red-500">{error}</p>
              ) : appointments.length === 0 ? (
                <p className="text-center py-4">No appointments scheduled for today.</p>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-600">
                      <th className="pb-2">Patient</th>
                      <th className="pb-2">Appointment ID</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment, index) => (
                      <tr key={appointment.id} className={index % 2 === 0 ? 'bg-white' : ''}>
                        <td className="py-2 text-black">
                          <div className="flex items-center">
                            <button onClick={() => handlePatientClick(appointment.patient,appointment.id)}
                            
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mr-2 ${
                                ['bg-green-200', 'bg-blue-200', 'bg-purple-200', 'bg-yellow-200', 'bg-red-200'][index % 5]
                              }`}>
                            
                              {getInitials(appointment.patient)}
                              
                            
                            </button>
                            {appointment.patient}
                          </div>
                        </td>
                        <td className="py-2 text-black">{appointment.id.slice(-6).toUpperCase()}</td>
                        <td className="py-2 text-black">{formatDate(appointment.date)}</td>
                        <td className="py-2 text-black">{appointment.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="flex justify-between mt-4">
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
        </main>
      </div>
    </div>
  )
}