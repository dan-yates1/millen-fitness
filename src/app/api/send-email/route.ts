import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// We'll add the RESEND_API_KEY to the .env file later
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the recipient email address from environment variables
const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
// Get the base URL for constructing image paths
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Fallback just in case

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not configured.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  if (!recipientEmail) {
    console.error('Recipient email address is not configured.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      // Use the verified domain for the 'from' address
      from: 'Millen Fitness Contact Form <noreply@danyates.co.uk>',
      to: [recipientEmail], // Send to the configured recipient
      replyTo: email, // Set the sender's email as the reply-to address
      subject: `New Contact Form Submission: ${subject}`,
      // Enhanced HTML email template with inline styles and logo
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #f8f8f8; padding: 20px; text-align: center;">
            <img src="${baseUrl}/mf-logo.jpg" alt="Millen Fitness Logo" style="max-width: 150px; height: auto; margin-bottom: 15px;">
            <h1 style="color: #1a1a1a; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 20px;">
            <h2 style="color: #555; font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Contact Details</h2>
            <p style="margin-bottom: 15px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 15px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
            <p style="margin-bottom: 15px;"><strong>Subject:</strong> ${subject}</p>
            <h2 style="color: #555; font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 30px; margin-bottom: 20px;">Message</h2>
            <div style="background-color: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 4px;">
              <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <div style="background-color: #f8f8f8; padding: 10px 20px; text-align: center; font-size: 12px; color: #888;">
            Sent via Millen Fitness Website
          </div>
        </div>
      `,
      // Keep the plain text version for email clients that don't support HTML
      text: `
        New Contact Form Submission from Millen Fitness:\n
        Name: ${name}\n
        Email: ${email}\n
        Subject: ${subject}\n
        Message:\n
        ${message}
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (err) {
    console.error('Error processing request:', err);
    // Check if it's a JSON parsing error
    if (err instanceof SyntaxError) {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
