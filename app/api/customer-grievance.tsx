import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// ✅ Define interface for grievance data
interface GrievanceData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: string;
}

// ✅ HTML template for admin email
const adminHtmlTemplate = (data: GrievanceData): string => {
  const { name, email, phone, subject, message, submittedAt } = data;
  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <h2 style="color:rgb(219,6,24);">New Customer Grievance Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><em>Submitted at: ${submittedAt}</em></p>
      </body>
    </html>
  `;
};

// ✅ HTML template for user confirmation
const userHtmlTemplate = (data: GrievanceData): string => {
  const { name, subject, submittedAt } = data;
  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <h2 style="color:rgb(219,6,24);">Thank You, ${name}</h2>
        <p>We have received your grievance regarding <strong>${subject}</strong>.</p>
        <p>Our team will review your submission and get back to you soon.</p>
        <p><em>Submitted at: ${submittedAt}</em></p>
        <br />
        <p style="color:#555;">— Rameshwar Bank Support Team</p>
      </body>
    </html>
  `;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // ✅ Ensure required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const grievanceData: GrievanceData = {
      name,
      email,
      phone,
      subject,
      message,
      submittedAt: new Date().toLocaleString(),
    };

    // ✅ Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can use Outlook, SMTP etc.
      auth: {
        user: process.env.EMAIL_USER, // admin email
        pass: process.env.EMAIL_PASS, // app password (not your Gmail login!)
      },
    });

    // ✅ Send email to Admin
    await transporter.sendMail({
      from: `"Grievance Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // admin email (set in .env)
      subject: `New Customer Grievance from ${name}`,
      html: adminHtmlTemplate(grievanceData),
    });

    // ✅ Send confirmation email to User
    await transporter.sendMail({
      from: `"Rameshwar Bank" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your grievance",
      html: userHtmlTemplate(grievanceData),
    });

    return res.status(200).json({ success: true, message: "Emails sent successfully" });
  } catch (error: any) {
    console.error("Error sending grievance emails:", error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
