import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = async (email: any, password: any) => {
    const router = useRouter();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const { token, redirectUrl } = data;

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect based on role
      router.push(redirectUrl);
    } else {
      alert('Login failed');
    }

};

export default Login;
