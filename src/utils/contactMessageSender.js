'use server';
import nodemailer from "nodemailer";

export const sendContactMessage = async (email, message) => {
  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can also use other SMTP services
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your email address
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your email's app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_TO, // Receiver's email
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
