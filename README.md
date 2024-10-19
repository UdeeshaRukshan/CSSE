# Healthcare Web Application

This is a healthcare web application built using [Next.js](https://nextjs.org/) for managing patient appointments, employee records, and administrative tasks. The system enables patients to view, schedule, cancel, and download appointment details in various formats (PDF and JSON). Administrators can manage employee records and view detailed appointment statistics. 

## Features

- **Patient Management**
  - Schedule and manage appointments.
  - Download appointment details as PDF or JSON.
  - Cancel or delete appointments.

- **Employee Management**
  - Add, edit, and delete employee records.
  - Track employee roles and start dates.

- **Dark Mode Support**
  - Toggle between light and dark modes for a better user experience.

- **Sidebar Navigation**
  - Dynamic sidebar navigation for easy access to different sections of the app.

## Technologies Used

- **Next.js**: React framework for building web applications with server-side rendering.
- **React**: UI library for building reusable components.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Axios**: HTTP client for making API requests.
- **MUI**: Material UI for designing tables and icons.
- **Lucide-react**: Icon set used for buttons and UI elements.
- **jsPDF**: JavaScript library to generate PDF files for appointments.
- **FileSaver.js**: Save files on the client-side, used to export appointment details in JSON format.
- **Cookies**: Manages user authentication and stores session data.
- **Environment Variables**: For secure API key management (`.env.local`).

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v16.x or later.
- **npm**: v7.x or later (comes with Node.js).

### Clone the Repository

```bash
git clone https://github.com/Udeesharukshan/healthcare-app.git
cd healthcare-app

Install dependencies
npm install

NEXT_PUBLIC_API_URL=https://api.yourbackend.com
NEXT_PUBLIC_SOME_API_KEY=your-api-key-here

npm run dev


This will start the development server. Open http://localhost:3000 to view the application.

Usage

Patient Dashboard: Patients can log in, view appointments, download details, and manage their schedules.
Admin Dashboard: Admins can manage employee records and view appointment statistics.
Appointment Management
Patients can:

View upcoming and past appointments.
Cancel or delete appointments.
Download appointment details in PDF or JSON formats.
Employee Management
Admins can:

Add new employees.
Edit or remove employee records.
Track employee start dates and roles.
Dark Mode
Toggle the theme between light and dark modes by clicking the theme switcher.
API Endpoints

/appointment/user/{userId}: Fetch appointments for a specific user.
/appointment/{appointmentId}: Delete an appointment by its ID.
/appointment/cancel/{appointmentId}: Cancel an appointment by its ID.
/employee: Add a new employee record.
Folder Structure

bash
Copy code
.
├── components/          # Reusable UI components
├── pages/               # Next.js pages (each page corresponds to a route)
│   ├── login/           # Login routes
│   ├── patients/        # Patient-related routes
│   └── employees/       # Employee-related routes
├── public/              # Static assets (e.g., images, icons)
├── styles/              # Global styles and Tailwind configurations
├── utils/               # Utility functions and helper files
└── .env.local           # Environment variables
Contributing

Fork the project.
Create your feature branch: git checkout -b feature/my-feature.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/my-feature.
Open a pull request.
License

This project is licensed under the MIT License.
