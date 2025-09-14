import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./lib/sendgrid";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact in database
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      const emailSent = await sendEmail({
        to: process.env.CONTACT_EMAIL || "contact@digivibe.in",
        from: process.env.FROM_EMAIL || "noreply@digivibe.in",
        subject: `New Contact Form Submission from ${validatedData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
          <p><strong>Location:</strong> ${validatedData.location}</p>
          <p><strong>Budget:</strong> ${validatedData.budget || 'Not specified'}</p>
          <p><strong>Services:</strong> ${validatedData.services.join(', ')}</p>
          <p><strong>Message:</strong> ${validatedData.message || 'No message provided'}</p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone}
          Company: ${validatedData.company || 'Not provided'}
          Location: ${validatedData.location}
          Budget: ${validatedData.budget || 'Not specified'}
          Services: ${validatedData.services.join(', ')}
          Message: ${validatedData.message || 'No message provided'}
        `
      });

      if (!emailSent) {
        console.warn('Failed to send email notification');
      }

      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contactId: contact.id 
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
