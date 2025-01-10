'use server';
import nodemailer from "nodemailer";

export const sendContactMessage = async (email, message) => {
  try {
    // Configure Nodemailer

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Use 465 for SSL, or 587 for TLS
      secure: true, // Use true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // Receiver's email
      subject: `Contact Msg from ${message.split(',')[0]}`,
      text: `From: ${email}\n\nMessage:\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
};
