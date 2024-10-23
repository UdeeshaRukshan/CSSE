// 'use client'

// import React from 'react'
// import { useRouter } from 'next/navigation'
// import { Button } from "@/components/ui/button"
// import { LogOut } from 'lucide-react'

// export function LogoutButton() {
//   const router = useRouter()

//   const handleLogout = async () => {
//     try {
//       // 1. Call the logout API endpoint
//       const response = await fetch('http://localhost:4000/api/doctor/logout', {
//         method: 'POST',
//         credentials: 'include', // Important for sending cookies
//       })

//       if (!response.ok) {
//         throw new Error('Logout failed')
//       }

//       // 2. Clear local storage
//       localStorage.clear()

//       // 3. Update application state (if using a state management library)
//       // For example, if using React Context:
//       // setUser(null)
//       // setIsAuthenticated(false)

//       // 4. Redirect to login page
//       router.push('/login/doctor/login')
//     } catch (error) {
//       console.error('Logout error:', error)
//       // Handle error (e.g., show an error message to the user)
//     }
//   }

//   return (
//     <Button onClick={handleLogout} variant="ghost" className="text-red-500 hover:text-red-700 hover:bg-red-100">
//       <LogOut className="mr-2 h-4 w-4" />
//       Logout
//     </Button>
//   )
// }


'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Cookies from 'js-cookie'


export function LogoutButton() {
  const router = useRouter()
  

  const handleLogout = async () => {
    try {
      // Call the logout API endpoint (replace with your actual API endpoint)
      const response = await fetch('http://localhost:4000/api/doctor/logout', {
        method: 'POST',
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error('Logout failed')
      }

      // Clear localStorage
      localStorage.clear()

      // Clear all cookies using js-cookie
      const cookies = Cookies.get()
      for (const cookie in cookies) {
        Cookies.remove(cookie)
      }

    //   toast({
    //     title: "Logged out successfully",
    //     description: "You have been securely logged out of your account.",
    //     duration: 3000,
    //   })

      // Redirect to login page
      router.push('/login/doctor/login')
    } catch (error) {
      console.error('Logout error:', error)
       
    }
  }

  return (
    <Button 
      onClick={handleLogout} 
      variant="ghost" 
      className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-100"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  )
}