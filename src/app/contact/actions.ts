"use server";

import nodemailer from "nodemailer";

const ALLOWED_SERVICES = [
  "Social Media",
  "SEO Strategy",
  "Blog Content",
  "Strategic Consulting",
];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripNewlines(s: string): string {
  return s.replace(/[\r\n]/g, " ");
}

export async function sendInquiry(formData: FormData) {
  const name = stripNewlines((formData.get("name") as string) ?? "");
  const businessName = stripNewlines((formData.get("businessName") as string) ?? "");
  const email = stripNewlines((formData.get("email") as string) ?? "");
  const service = (formData.get("service") as string) ?? "";
  const message = (formData.get("message") as string) ?? "";

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // Whitelist service
  const safeService = ALLOWED_SERVICES.includes(service) ? service : "General";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Niobium Website" <${process.env.GMAIL_USER}>`,
      to: "niobium.co@gmail.com",
      replyTo: email,
      subject: `New Inquiry: ${safeService} — ${stripNewlines(businessName || name)}`,
      html: `
        <div style="font-family: monospace; max-width: 600px;">
          <h2 style="text-transform: uppercase; letter-spacing: 0.1em;">New Client Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Business</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(businessName) || "—"}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(safeService)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
          </table>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: "Failed to send. Please email us directly at niobium.co@gmail.com" };
  }
}
