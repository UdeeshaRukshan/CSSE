import React from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'


const appointments = [
  { id: 1, patient: 'Phoenix Baker',appointmentId:'A100', initials: 'PB', date: 'Jan 4, 2022',time:'5.30 p.m'},
  { id: 2, patient: 'Candice Wu',appointmentId:'A101',  initials: 'CW', date: 'Jan 2, 2022',time:'5.45 p.m'},
  { id: 3, patient: 'Lana Steiner',appointmentId:'A102',  initials: 'LS', date: 'Jan 4, 2022',time:'6.00 p.m'},
  { id: 4, patient: 'Drew Cano',appointmentId:'A103',  initials: 'DC', date: 'Jan 8, 2022',time:'6.30 p.m'},
  { id: 5, patient: 'Natali Craig',appointmentId:'A104',  initials: 'NC', date: 'Jan 6, 2022',time:'7.00 p.m'},
]

export default function DoctorDashboard() {
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

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Your Appointments Today</h2>
            <div className="bg-[#F2F9FF] rounded-lg p-4">
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
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mr-2 ${
                            ['bg-green-200', 'bg-blue-200', 'bg-blue-200', 'bg-green-200', 'bg-purple-200'][index]
                          }`}>
                            {appointment.initials}
                          </div>
                          {appointment.patient}
                        </div>
                      </td>
                      <td className="py-2 text-black">{appointment.appointmentId}</td>
                      <td className="py-2 text-black">{appointment.date}</td>
                      <td className="py-2 text-black">
                         {appointment.time}
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
    </div>
  )
}