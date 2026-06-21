// components/ContactForm.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      // Create a custom subject with priority indicators
      const prioritySubject = `🚀 PRIORITY: Portfolio Contact - ${formData.subject}`;
      
      // Create a formatted HTML email body with priority indicators
      const htmlMessage = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #84cc16; padding: 20px; border-radius: 10px 10px 0 0; color: #000; }
            .priority-badge { 
              display: inline-block; 
              background: #ef4444; 
              color: white; 
              padding: 4px 12px; 
              border-radius: 20px; 
              font-size: 12px; 
              font-weight: bold;
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0% { opacity: 1; }
              50% { opacity: 0.7; }
              100% { opacity: 1; }
            }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; display: block; margin-bottom: 5px; }
            .value { color: #111827; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
            .badge { display: inline-block; background: #84cc16; color: #000; padding: 2px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
            .action-buttons { margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px; text-align: center; }
            .action-btn { 
              display: inline-block; 
              padding: 8px 16px; 
              background: #84cc16; 
              color: #000; 
              text-decoration: none; 
              border-radius: 6px; 
              margin: 0 5px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <h2 style="margin:0;">📬 New Portfolio Contact</h2>
                  <p style="margin:5px 0 0; opacity:0.8;">Priority message from your portfolio website</p>
                </div>
                <span class="priority-badge">⚠️ PRIORITY</span>
              </div>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Name</span>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <span class="label">📧 Email</span>
                <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
              </div>
              <div class="field">
                <span class="label">📝 Subject</span>
                <div class="value"><span class="badge">${formData.subject}</span></div>
              </div>
              <div class="field">
                <span class="label">💬 Message</span>
                <div class="value" style="white-space:pre-wrap;">${formData.message}</div>
              </div>
              <div class="action-buttons">
                <p style="margin:0 0 10px; color:#6b7280; font-size:14px;">🚀 Quick Actions:</p>
                <a href="mailto:${formData.email}?subject=Re: ${formData.subject}" class="action-btn">✉️ Reply</a>
                <a href="https://wa.me/92${formData.phone || '3001234567'}?text=Hi ${formData.name}, I received your message about: ${formData.subject}" class="action-btn" style="background:#25D366;">💬 WhatsApp</a>
                <a href="tel:${formData.phone || '+923001234567'}" class="action-btn" style="background:#3b82f6;">📞 Call</a>
              </div>
            </div>
            <div class="footer">
              <p>Sent from your portfolio website • ${new Date().toLocaleString()}</p>
              <p style="margin-top:5px; color:#ef4444; font-weight:bold;">
                ⚠️ This is a PRIORITY message from your portfolio contact form
              </p>
            </div>
          </div>
        </body>
        </html>
      `;

      const response = await fetch("https://formsubmit.co/ajax/rafideveloper7@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: prioritySubject,
          message: formData.message,
          _captcha: "false",
          _template: "table",
          _subject: prioritySubject,
          _html: htmlMessage,
          _autoresponse: `Thank you for your message, ${formData.name}! I'll get back to you within 24 hours.`,
          // Add custom headers for priority
          _priority: "high",
          _category: "portfolio",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Message sent successfully! Redirecting...");
        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
        console.error("FormSubmit error:", result);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-black uppercase tracking-[.1em] text-muted">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-line bg-ink/50 px-4 py-3 text-white placeholder:text-muted/50 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-black uppercase tracking-[.1em] text-muted">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-line bg-ink/50 px-4 py-3 text-white placeholder:text-muted/50 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-black uppercase tracking-[.1em] text-muted">
          Subject <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project topic or question"
          className="mt-2 w-full rounded-xl border border-line bg-ink/50 px-4 py-3 text-white placeholder:text-muted/50 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-black uppercase tracking-[.1em] text-muted">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className="mt-2 w-full rounded-xl border border-line bg-ink/50 px-4 py-3 text-white placeholder:text-muted/50 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime resize-none"
          disabled={status === "loading"}
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
          <CheckCircle size={20} className="flex-shrink-0" />
          <p className="text-sm">{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          <AlertCircle size={20} className="flex-shrink-0" />
          <p className="text-sm">{message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-lime px-8 text-sm font-black text-ink transition hover:bg-lime/80 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
            Sending...
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}