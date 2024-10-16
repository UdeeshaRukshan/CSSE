'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie to handle cookies
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

const PatientLoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/users/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include' // Include credentials for cookies
            });

            if (response.ok) {
                const data = await response.json();
                
                // Save userId and authToken as cookies
                Cookies.set('userId', data.userId, { expires: 1 }); 
                Cookies.set('authToken', data.authToken, { expires: 1 }); 

                router.push(`login/patients/login/new-appointment`);
            } else {
                setError('Invalid email or password.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    const handleSignUp = () => {
        router.push('/login/patients/login/content'); 
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <h1 className="text-3xl font-bold text-center text-dark mb-4">Patient Login</h1>
            {error && <p className="text-danger text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Email address' 
                    id='form1' 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Password' 
                    id='form2' 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <div className="d-flex justify-content-between mb-4">
                    <MDBCheckbox 
                        name='flexCheck' 
                        value='' 
                        id='flexCheckDefault' 
                        label='Remember me' 
                    />
                    <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn 
                    className="w-100 mb-4" 
                    type="submit"
                >
                    Sign in
                </MDBBtn>
            </form>

            <div className="text-center">
                <p>Not a member? <a href="/login/patients/login/content" onClick={handleSignUp}>Register</a></p>
                <p>or sign up with:</p>

                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm"/>
                    </MDBBtn>
                </div>
            </div>
        </MDBContainer>
    );
};

export default PatientLoginPage;
