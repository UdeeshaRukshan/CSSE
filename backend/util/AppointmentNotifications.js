const nodemailer = require('nodemailer');
const loggerService=require('./LoggerService');
// Configure your email transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587, // or 465 for SSL
    secure: false, // true for port 465
    auth: {
        user: 'udeeshagamage12@zohomail.com',
        pass: 'udeesharukshan', // Ensure this is your actual password
    },
});


// Function to send notification email
const sendNotificationEmail = (data) => {
    const { patientEmail, subject, message } = data;

    const mailOptions = {
        from: 'udeeshagamage12@zohomail.com',
        to: patientEmail,
        subject: subject,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #0056b3;">Appointment Confirmation</h2>
                <p style="font-size: 16px; line-height: 1.5;">${message}</p>
                <div style="margin-top: 20px;">
                    <p style="font-size: 14px;">Thank you for choosing our service!</p>
                    <p style="font-size: 14px;">If you have any questions, feel free to contact us.</p>
                </div>
                <footer style="margin-top: 30px; font-size: 12px; color: #888;">
                    <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </footer>
            </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            loggerService.error(`Error sending email: ${error.message}`);
            return;
        }
        console.log('Email sent:', info.response);
    });
};

module.exports = {
    sendNotificationEmail,
};
