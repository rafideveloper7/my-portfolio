// components/ContactForm.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
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
      // Replace with your FormSubmit endpoint
      const response = await fetch("https://formsubmit.co/ajax/rafideveloper7@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: "false",
          _template: "table",
          _subject: "New Contact Form Submission",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Message sent successfully!");
        // Redirect to thank you page after successful submission
        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
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

      {/* Status Messages */}
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