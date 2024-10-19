'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

type UserData = {
  name: string
  email: string
  img: string
}

type GlobalContextType = {
  isDarkMode: boolean
  toggleDarkMode: () => void
  userData: UserData
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }
  return context
}

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [userData, setUserData] = useState<UserData>({ name: '', email: '', img: '' })

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode))
    }

    const userId = Cookies.get('userId')
    if (userId) {
      fetch(`http://localhost:4000/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData({ name: data.name, email: data.email, img: data.img })
        })
        .catch((error) => console.error('Error fetching user data:', error))
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))
  }

  return (
    <GlobalContext.Provider value={{ isDarkMode, toggleDarkMode, userData, setUserData }}>
      {children}
    </GlobalContext.Provider>
  )
}