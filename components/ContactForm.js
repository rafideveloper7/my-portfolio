"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    formData.append("_template", "table");

    try {
      const res = await fetch("https://formsubmit.co/rafideveloper7@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-coal px-5 py-4 text-white placeholder:text-muted transition focus:border-lime focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New Inquiry from Portfolio Website" />
      <input type="text" name="name" placeholder="Your Name" required className={inputClass} />
      <input type="email" name="email" placeholder="Your Email" required className={inputClass} />
      <input type="text" name="subject" placeholder="Subject" className={inputClass} />
      <textarea name="message" rows={5} placeholder="Tell me about your project..." required className={inputClass} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-11 rounded-full border border-lime bg-lime px-8 py-4 font-bold text-black shadow-glow transition hover:scale-105 hover:border-paper hover:bg-paper disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && <p className="text-lime">Message sent! I&apos;ll get back to you soon.</p>}
      {status === "error" && <p className="text-red-400">Something went wrong. Try WhatsApp instead.</p>}
    </form>
  );
}
