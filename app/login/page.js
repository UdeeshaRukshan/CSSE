// app/login/page.js
import { useRouter } from 'next/router';
import styles from './Login.module.css'; // You can create a CSS module for styling

const LoginPage = () => {
    const router = useRouter();

    const handleRoleSelection = (role) => {
        // Redirect to the corresponding login page based on the selected role
        router.push(`/login/${role}`);
    };

    return (
        <div className={styles.container}>
            <h1>Select Your Role</h1>
            <div className={styles.buttonContainer}>
                <button onClick={() => handleRoleSelection('patient')}>Patient</button>
                <button onClick={() => handleRoleSelection('admin')}>Admin</button>
                <button onClick={() => handleRoleSelection('doctor')}>Doctor</button>
                <button onClick={() => handleRoleSelection('staff')}>Staff</button>
            </div>
        </div>
    );
};

export default LoginPage;
