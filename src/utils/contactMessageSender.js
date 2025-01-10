'use server';
import nodemailer from "nodemailer";

export const sendContactMessage = async (email, message) => {
  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can also use other SMTP services
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email's app password
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
