import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cookies from 'next-cookies'; // Import next-cookies

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser  = async () => {
      try {
        // Get cookies from the context
        const { userId } = cookies(); // This will get cookies from the request

        if (userId) {
          const res = await fetch(`http://localhost:4000/api/users/${userId}`, { method: 'GET' });
          const userData = await res.json(); // Parse the response

          if (userData) {
            setUser (userData);
            setIsLogged(true);
          } else {
            setIsLogged(false);
            setUser (null);
          }
        } else {
          setIsLogged(false);
          setUser (null);
        }
      } catch (error) {
        console.log('Error fetching user:', error);
        setIsLogged(false);
        setUser (null);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUser ();
  }, []); // Empty dependency array ensures this effect only runs once

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser ,
        loading,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;