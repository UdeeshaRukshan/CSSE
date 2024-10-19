'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button"; // Import your button component if you have one

interface PatientData {
  _id: string
  userId: string
  name: string
  email: string
  phone: string
  birthDate: string
  gender: string
  address: string
  occupation: string
  emergencyContactName: string
  emergencyContactNumber: string
  primaryPhysician: string
  insuranceProvider: string
  insurancePolicyNumber: string
  allergies: string[]
  currentMedication: string[]
  familyMedicalHistory: string[]
  pastMedicalHistory: string[]
  identificationType: string
  identificationNumber: string
  privacyConsent: boolean
}

export default function UserProfile() {
  const [patientData, setPatientData] = useState<PatientData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  const userId = Cookies.get("userId");

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/patients/${userId}`)
        setPatientData(response.data.patient)
        setLoading(false)
        console.log(response.data)
      } catch (err) {
        setError('Failed to fetch patient data')
        setLoading(false)
      }
    }

    fetchPatientData()
  }, [])

  if (loading) return <div className="text-center p-4 text-white">Loading...</div>
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>
  if (!patientData) return <div className="text-center p-4 text-white">No patient data found</div>

  return (
    <div className="min-h-screen bg-gray-700 text-white p-6">
      <Card className="max-w-5xl mx-auto bg-gray-800 shadow-2xl rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
        <CardHeader className="flex flex-row items-center space-x-6 pb-6">
          <Avatar className="w-24 h-24 rounded-full border-2 border-gray-600 shadow-lg">
            <AvatarImage src="https://miro.medium.com/v2/resize:fit:2400/1*9xbYBxTlBK-8ks-kvixqRA.jpeg" alt={patientData.name} />
            <AvatarFallback>{patientData.name}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-3xl font-bold text-white">{patientData.name}</CardTitle>
            <p className="text-lg text-gray-400">{patientData.occupation}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Personal Information</h3>
              <p><span className="font-medium text-gray-300">Email:</span> {patientData.email}</p>
              <p><span className="font-medium text-gray-300">Phone:</span> {patientData.phone}</p>
              <p><span className="font-medium text-gray-300">Birth Date:</span> {new Date(patientData.birthDate).toLocaleDateString()}</p>
              <p><span className="font-medium text-gray-300">Gender:</span> {patientData.gender}</p>
              <p><span className="font-medium text-gray-300">Address:</span> {patientData.address}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Medical Information</h3>
              <p><span className="font-medium text-gray-300">Primary Physician:</span> {patientData.primaryPhysician}</p>
              <p><span className="font-medium text-gray-300">Insurance Provider:</span> {patientData.insuranceProvider}</p>
              <p><span className="font-medium text-gray-300">Policy Number:</span> {patientData.insurancePolicyNumber}</p>
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Emergency Contact</h3>
            <p><span className="font-medium text-gray-300">Name:</span> {patientData.emergencyContactName}</p>
            <p><span className="font-medium text-gray-300">Number:</span> {patientData.emergencyContactNumber}</p>
          </div>
          <Separator className="my-6" />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Medical History</h3>
            <p><span className="font-medium text-gray-300">Allergies:</span> {patientData.allergies.length > 0 ? patientData.allergies.join(', ') : "None"}</p>
            <p><span className="font-medium text-gray-300">Current Medication:</span> {patientData.currentMedication.length > 0 ? patientData.currentMedication.join(', ') : "None"}</p>
            <p><span className="font-medium text-gray-300">Family Medical History:</span> {patientData.familyMedicalHistory.length > 0 ? patientData.familyMedicalHistory.join(', ') : "None"}</p>
            <p><span className="font-medium text-gray-300">Past Medical History:</span> {patientData.pastMedicalHistory.length > 0 ? patientData.pastMedicalHistory.join(', ') : "None"}</p>
          </div>
        </CardContent>

        <div className="flex justify-end mt-6">
          <Button onClick={() => router.push('/login/patients/login/patient')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  )
}
