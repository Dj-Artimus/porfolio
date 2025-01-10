'use server';
import nodemailer from "nodemailer";

export const sendContactMessage = async (email, message) => {
  try {
    // Configure Nodemailer
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
        
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Use 465 for SSL, or 587 for TLS
      secure: true, // Use true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app-specific password
      },
      debug: true,
      logger: true,
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
