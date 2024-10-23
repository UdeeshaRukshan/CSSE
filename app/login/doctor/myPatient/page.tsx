
'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Search, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react'
import Cookies from 'js-cookie';
import DefaultSidebar from '@/app/login/doctor/sidebar/page'

interface Doctor {
  _id: string;
  fullName: string;
}

interface Appointment {
  _id: string;
  patient: string;
  appointmentDate: string;
  time: string;
  doctor: Doctor;
  prescription: Prescription;
  diagnosis: DiagnosisReport;
  createdAt: string;
  updatedAt: string;
}

interface DiagnosisReport {
  _id: string;
  primaryDiagnosis: string;
  relatedSymptoms: string;
  possibleCourse: string;
  treatmentPlan: string;
  createdAt: string;
  updatedAt: string;
}

interface Prescription {
  _id: string;
  medicationName: string;
  form: string;
  strength: string;
  dosage: string;
  frequency: string;
  duration: string;
  createdAt: string;
  updatedAt: string;
}

export default function PatientMedicalHistory() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [isAddDiagnosisOpen, setIsAddDiagnosisOpen] = useState(false)
  const [isViewDiagnosisOpen, setIsViewDiagnosisOpen] = useState(false)
  const [isAddPrescriptionOpen, setIsAddPrescriptionOpen] = useState(false)
  const [isViewPrescriptionOpen, setIsViewPrescriptionOpen] = useState(false)
  const [currentDiagnosis, setCurrentDiagnosis] = useState<DiagnosisReport | null>(null)
  const [currentPrescription, setCurrentPrescription] = useState<Prescription | null>(null)
  const [newDiagnosis, setNewDiagnosis] = useState<DiagnosisReport>({
    _id: '',
    primaryDiagnosis: '',
    relatedSymptoms: '',
    possibleCourse: '',
    treatmentPlan: '',
    createdAt: '',
    updatedAt: ''
  })
  const [newPrescription, setNewPrescription] = useState<Prescription>({
    _id: '',
    medicationName: '',
    form: '',
    strength: '',
    dosage: '',
    frequency: '',
    duration: '',
    createdAt: '',
    updatedAt: ''
  })

  const params = useParams();
  const id = params.id as string;
  const currentAppointmentId =  Cookies.get('appointmentId');
  const doctorId = Cookies.get('doctorId');

  useEffect(() => {
    const fetchMedicalHistory = async (patientId: string) => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`http://localhost:4000/api/doctorappointment/doctor/${doctorId}/appointments`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setAppointments(data.data)
      } catch (error) {
        console.error('Error fetching medical history:', error)
      }
    }

    fetchMedicalHistory(id)
  }, [])

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

  const handleSubmitDiagnosis = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:4000/api/doctorappointment/appointment/${currentAppointmentId}/diagnosis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDiagnosis),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      // Handle successful submission (e.g., update the appointments list)
      setIsAddDiagnosisOpen(false)
      setNewDiagnosis({
        _id: '',
        primaryDiagnosis: '',
        relatedSymptoms: '',
        possibleCourse: '',
        treatmentPlan: '',
        createdAt: '',
        updatedAt: ''
      })
    } catch (error) {
      console.error('Error submitting diagnosis:', error)
    }
  }

  const handleSubmitPrescription = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:4000/api/doctorappointment/appointment/${currentAppointmentId}/prescription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPrescription),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      // Handle successful submission (e.g., update the appointments list)
      setIsAddPrescriptionOpen(false)
      setNewPrescription({
        _id: '',
        medicationName: '',
        form: '',
        strength: '',
        dosage: '',
        frequency: '',
        duration: '',
        createdAt: '',
        updatedAt: ''
      })
    } catch (error) {
      console.error('Error submitting prescription:', error)
    }
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
     <DefaultSidebar/>
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

        {/* Patient Medical History */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#1C4980]">Patient's Medical Treatment History</h2>
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
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Time</th>
                    <th className="px-4 py-2 text-left">Diagnosis Report</th>
                    <th className="px-4 py-2 text-left">Prescription</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={appointment._id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F2F9FF]'}>
                      <td className="px-4 py-2 text-black">{appointment.doctor.fullName}</td>
                      <td className="px-4 py-2 text-black">{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
                      <td className="px-4 py-2 text-black">{appointment.time}</td>
                      <td className="px-4 py-2">
                        <button 
                          className="bg-green-500 text-white px-2 py-1 rounded-md text-sm"
                          onClick={() => handleViewDiagnosis(appointment.diagnosis)}
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
                Close
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
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}