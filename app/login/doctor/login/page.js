'use client';


const DoctorLoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle doctor login logic here
    };

    return (
        <div className={styles.container}>
            <h1>Doctor Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
};

export default DoctorLoginPage;
