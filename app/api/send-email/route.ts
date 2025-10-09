import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'ahmedrazagithub@gmail.com',
        pass: process.env.EMAIL_PASS || 'qcej fapb rjem dxxa',
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'ahmedrazagithub@gmail.com',
      to: 'info@gen18x.com',
      subject: `🔔 New Contact Form: ${validatedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Gen18X Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
          
          <!-- Main Container -->
          <div style="max-width: 650px; margin: 0 auto; padding: 40px 20px;">
            
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #14b8a6 100%); padding: 40px 30px; border-radius: 20px 20px 0 0; text-align: center;">
              <div style="background-color: white; display: inline-block; padding: 15px 30px; border-radius: 50px; margin-bottom: 20px;">
                <h1 style="margin: 0; color: #1e3a8a; font-size: 28px; font-weight: bold;">Gen18<span style="color: #14b8a6;">X</span></h1>
              </div>
              <h2 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Inquiry</h2>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">You have received a new message from your website</p>
            </div>

            <!-- Main Content Card -->
            <div style="background-color: white; border-radius: 0 0 20px 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); overflow: hidden;">
              
              <!-- Priority Badge -->
              <div style="background: linear-gradient(90deg, #10b981 0%, #14b8a6 100%); padding: 15px 30px; text-align: center;">
                <span style="color: white; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">⚡ Requires Response</span>
              </div>

              <!-- Contact Information Section -->
              <div style="padding: 35px 30px;">
                <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 15px; margin-bottom: 25px; border-left: 5px solid #14b8a6;">
                  <h3 style="margin: 0 0 20px 0; color: #1e3a8a; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                    <span style="background-color: #14b8a6; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">👤</span>
                    Contact Details
                  </h3>
                  
                  <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
                    <tr>
                      <td style="padding: 12px 15px; background-color: white; border-radius: 8px; font-weight: 600; color: #1e3a8a; width: 140px; vertical-align: top;">
                        <span style="font-size: 14px;">📝 Full Name</span>
                      </td>
                      <td style="padding: 12px 15px; background-color: white; border-radius: 8px; color: #374151; font-size: 15px;">
                        <strong>${validatedData.firstName} ${validatedData.lastName}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; background-color: white; border-radius: 8px; font-weight: 600; color: #1e3a8a; vertical-align: top;">
                        <span style="font-size: 14px;">✉️ Email</span>
                      </td>
                      <td style="padding: 12px 15px; background-color: white; border-radius: 8px;">
                        <a href="mailto:${validatedData.email}" style="color: #14b8a6; text-decoration: none; font-weight: 500; font-size: 15px; display: inline-block; padding: 5px 15px; background-color: #f0fdfa; border-radius: 6px; transition: all 0.3s;">
                          ${validatedData.email}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; background-color: white; border-radius: 8px; font-weight: 600; color: #1e3a8a; vertical-align: top;">
                        <span style="font-size: 14px;">🏢 Company</span>
                      </td>
                      <td style="padding: 12px 15px; background-color: white; border-radius: 8px; color: #374151; font-size: 15px;">
                        <strong>${validatedData.company}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; background-color: white; border-radius: 8px; font-weight: 600; color: #1e3a8a; vertical-align: top;">
                        <span style="font-size: 14px;">📞 Phone</span>
                      </td>
                      <td style="padding: 12px 15px; background-color: white; border-radius: 8px;">
                        <a href="tel:${validatedData.phone}" style="color: #14b8a6; text-decoration: none; font-weight: 500; font-size: 15px; display: inline-block; padding: 5px 15px; background-color: #f0fdfa; border-radius: 6px;">
                          ${validatedData.phone}
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Subject Section -->
                <div style="margin-bottom: 25px;">
                  <h3 style="margin: 0 0 12px 0; color: #1e3a8a; font-size: 16px; font-weight: 600; display: flex; align-items: center;">
                    <span style="background-color: #fbbf24; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 14px;">📋</span>
                    Subject
                  </h3>
                  <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 18px 20px; border-radius: 12px; border-left: 4px solid #fbbf24;">
                    <p style="margin: 0; color: #78350f; font-size: 16px; font-weight: 600; line-height: 1.6;">
                      ${validatedData.subject}
                    </p>
                  </div>
                </div>

                <!-- Message Section -->
                <div style="margin-bottom: 25px;">
                  <h3 style="margin: 0 0 12px 0; color: #1e3a8a; font-size: 16px; font-weight: 600; display: flex; align-items: center;">
                    <span style="background-color: #8b5cf6; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 14px;">💬</span>
                    Message
                  </h3>
                  <div style="background-color: #faf5ff; padding: 20px; border-radius: 12px; border: 2px solid #e9d5ff;">
                    <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">
                      ${validatedData.message}
                    </p>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div style="text-align: center; padding: 25px 0; background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); border-radius: 12px; margin-top: 30px;">
                  <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px; font-weight: 500;">Quick Actions</p>
                  <div style="display: inline-block;">
                    <a href="mailto:${validatedData.email}" style="display: inline-block; background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); color: white; padding: 14px 30px; text-decoration: none; border-radius: 10px; font-weight: 600; margin: 0 8px; font-size: 14px; box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);">
                      ✉️ Reply via Email
                    </a>
                    <a href="tel:${validatedData.phone}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 14px 30px; text-decoration: none; border-radius: 10px; font-weight: 600; margin: 0 8px; font-size: 14px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                      📞 Call Now
                    </a>
                  </div>
                </div>

                <!-- Metadata -->
                <div style="margin-top: 25px; padding: 20px; background-color: #f9fafb; border-radius: 10px; border-left: 3px solid #9ca3af;">
                  <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                    <strong>Received:</strong> ${new Date().toLocaleString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p style="margin: 0; color: #6b7280; font-size: 13px;">
                    <strong>Source:</strong> Gen18X Contact Form (Website)
                  </p>
                </div>

              </div>

              <!-- Footer -->
              <div style="background: linear-gradient(135deg, #1e3a8a 0%, #14b8a6 100%); padding: 30px; text-align: center;">
                <div style="margin-bottom: 15px;">
                  <p style="margin: 0 0 8px 0; color: white; font-size: 16px; font-weight: 600;">Gen18X Global Imports</p>
                  <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 13px;">Empowering businesses with world-class computer products</p>
                </div>
                <div style="margin: 20px 0;">
                  <a href="mailto:info@gen18x.com" style="color: white; text-decoration: none; margin: 0 10px; font-size: 13px;">✉️ info@gen18x.com</a>
                  <span style="color: rgba(255,255,255,0.5);">|</span>
                  <a href="tel:+971565562134" style="color: white; text-decoration: none; margin: 0 10px; font-size: 13px;">📞 +971 56 556 2134</a>
                </div>
                <p style="margin: 15px 0 0 0; color: rgba(255,255,255,0.7); font-size: 12px;">
                  © ${new Date().getFullYear()} Gen18X Global Imports. All rights reserved.
                </p>
              </div>

            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Company: ${validatedData.company}
Phone: ${validatedData.phone}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
This email was sent from the Gen18X contact form
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}

