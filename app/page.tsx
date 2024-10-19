'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserCircle, ShieldCheck, Stethoscope, Users } from 'lucide-react'

const LoginPage = () => {
  const router = useRouter()

  const handleRoleSelection = (role: string) => {
    if (role) {
      console.log(`Navigating to: /login/${role}/login`)
      router.push(`/login/${role}/login`)
    }
  }

  const roles = [
    { name: 'Patients', color: 'bg-blue-500 hover:bg-blue-600', icon: UserCircle },
    { name: 'Admin', color: 'bg-green-500 hover:bg-green-600', icon: ShieldCheck },
    { name: 'Doctor', color: 'bg-yellow-500 hover:bg-yellow-600', icon: Stethoscope },
    { name: 'Staff', color: 'bg-purple-500 hover:bg-purple-600', icon: Users },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-gray-900">
      <Card className="w-full max-w-md mx-4 bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white">Select Your Role</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {roles.map((role) => (
              <Button
                key={role.name}
                onClick={() => handleRoleSelection(role.name.toLowerCase())}
                className={`${role.color} text-white font-semibold rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center h-32`}
              >
                <role.icon className="w-10 h-10 mb-2" />
                <span>{role.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage