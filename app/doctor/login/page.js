// app/doctor/login/page.js
const DoctorLoginPage = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        // Handle doctor login logic here
    };

    return (
        <div>
            <h1>Doctor Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default DoctorLoginPage;
