# PRODUCTION-READY BUILD PROMPT
## Full Stack Software Agency Website — ""


---

## 1. PROJECT OVERVIEW

Build a **100% production-ready, fully responsive, animated marketing website** for a software development agency, inspired by the visual language of the reference screenshot (dark theme, bold oversized typography, lime/yellow accent CTA, top marquee strip, minimal pill navbar) — but reskinned and rewritten for a software/web development agency, not a generic creative agency.

This is NOT an MVP. Deliver a finished, polished, deploy-ready website with no placeholder Lorem Ipsum, no broken links, no missing responsive states, and no half-built animations.

---

## 2. TECH STACK (STRICT)

- **Framework:** Next.js (latest stable, App Router)
- **Language:** Plain **JavaScript only** — `.js` / `.jsx` files. **NO TypeScript, NO `.tsx` files, ever.**
- **Styling:** Tailwind CSS (with a custom `tailwind.config.js` theme — no inline style hacks for layout)
- **Animation:** Framer Motion (scroll reveals, page transitions, hover micro-interactions) + optionally GSAP/ScrollTrigger for the hero/marquee if Framer Motion isn't enough
- **Sliders/Carousels:** Swiper.js or Embla Carousel for testimonials, project showcase, logos
- **Icons:** lucide-react
- **Forms:** FormSubmit (no backend needed) — see Section 8
- **Images:** `next/image` everywhere (no raw `<img>` tags), with placeholder/blur loading
- **Fonts:** Use `next/font` with a bold display font (e.g., Space Grotesk / General Sans / Clash Display alternative) for headings + a clean sans (Inter/Manrope) for body text
- **Deployment target:** Vercel

---

## 3. DESIGN SYSTEM (derived from reference image + adapted for a dev agency)

### Color Palette
- **Background (primary):** near-black charcoal `#0B0E0A` / deep dark `#0A0A0A`
- **Background (secondary/cards):** `#14171A` or `#101314`
- **Accent (CTA / highlights):** lime-yellow `#D4FF3F` (use sparingly — buttons, underlines, bullet dots, marquee stars)
- **Secondary accent (optional alt):** electric blue `#3D5CFF` for tech/code-related icons or hover states (ties into MERN/dev theme)
- **Text primary:** off-white `#F5F5F2`
- **Text muted:** `#9A9A95`
- **Borders/dividers:** `#23262A`

### Typography
- Headings: huge, bold, tight line-height, uppercase or sentence case mixed (like "We Build Scalable Web Apps Everyday") — sizes scaling from `text-4xl` (mobile) to `text-7xl/8xl` (desktop)
- Body: comfortable 16–18px, muted gray
- Use a mix of weight (black headings, regular body) for contrast like the reference

### Components/Patterns to replicate from the image
- Floating rounded **pill navbar** with logo left, nav links center, search/CTA right
- **Hamburger menu** on mobile that opens a full-screen dark overlay menu with staggered link animations
- **Hero section**: big bold multi-line headline + short paragraph + lime CTA button + supporting image/visual on the right (replace photo with an animated code/dashboard mockup, laptop illustration, or abstract 3D/orbiting tech icons since this is a dev agency)
- **Infinite scrolling marquee strip** (like "We Give Unparalleled Flexibility ★") — repurpose as a tech-stack marquee: "MERN STACK ✦ REACT ✦ NODE.JS ✦ NEXT.JS ✦ MONGODB ✦ REST APIs ✦ FULL STACK DEVELOPMENT ✦"
- Footer-adjacent contact strip with address/phone/email in the hero area like the reference
- Generous padding, asymmetric grid layouts (not centered boxy cards everywhere)

### Animation requirements (must all be implemented, not described)
- Scroll-reveal (fade + slide up) on every section as it enters viewport (IntersectionObserver / Framer Motion `whileInView`)
- Marquee runs infinitely, pauses on hover
- Hamburger → full screen menu transition with staggered link entrance + smooth close
- Buttons: scale/glow hover, lime underline grow-on-hover for nav links
- Hero text: staggered word/line entrance animation on page load
- Project/portfolio cards: image zoom + overlay slide-up on hover (desktop), tap-to-reveal on mobile
- Testimonials: auto-playing slider with drag/swipe support
- Smooth page transition between routes (fade or slide) using Framer Motion `AnimatePresence`
- Subtle cursor-following glow or custom cursor on desktop (optional, disable on touch devices)
- Sticky navbar that shrinks/condenses on scroll down, reappears on scroll up

---

## 4. SITE STRUCTURE (PAGES)

1. **Home (`/`)**
   - Hero (headline, subtext, CTA "View Our Work" + "Hire Me")
   - Tech-stack marquee strip
   - About teaser (short intro + "Meet the team" link)
   - Services overview (grid of service cards, icon + title + short desc, link to full Services page)
   - Featured Projects (3–4 cards, "View All Projects" CTA)
   - Why Choose Us / Stats counter section (animated counting numbers: Projects Completed, Technologies, Years Coding, Happy Clients)
   - Testimonials slider
   - CTA banner ("Let's build something great together" + contact button)
   - Footer

2. **About (`/about`)**
   - Full bio (use Rafi's About Me content — Section 6 below)
   - Career objective
   - Skills breakdown by category (Frontend / Backend / Database / State Management / Tools) as animated skill pills or progress bars
   - "Meet the Team" section — see Section 5

3. **Services (`/services`)**
   - Full list of services as detailed cards/sections, each with icon, description, and what's included
   - Process/workflow timeline (Discovery → Design → Development → Testing → Deployment → Support)

4. **Portfolio / Projects (`/portfolio`)**
   - Filterable grid (All / Web Apps / Dashboards / E-commerce / APIs) — filter buttons with active-state animation
   - Each project card: image, title, tech stack tags, short description, "View Details" → can link out or open a modal
   - Use placeholder project structure ready for Rafi to swap in real project images/links (E-commerce API, Full Stack E-commerce Platform, Restaurant Management System, Real-Time Chat App, Admin Panel)

5. **Testimonials (`/testimonials`)** — optional full page, or keep as homepage section + footer link
   - Grid/slider of client feedback cards

6. **Blog (`/blog`)** — optional, structured but can launch with 2–3 placeholder articles about web dev topics (static MDX or local JSON array, easily extendable later)

7. **Contact (`/contact`)**
   - Contact form (FormSubmit — Section 8)
   - Direct contact info: phone, WhatsApp button (click-to-chat link), email, social links
   - Map or location text (Kohat / Orakzai, KPK, Pakistan)
   - FAQ accordion (optional, animated expand/collapse)

8. **404 page** — custom, on-brand, with a "Back to Home" CTA

---

## 5. "TEAM" PRESENTATION (single founder, presented as a capable team-style agency)

Even though this is a solo developer, present the site with an agency feel:
- Use language like "We" / "Our team" / "We build..." in copy (already matches reference tone)
- On the About page, include a "Meet the Developer" section styled like a team grid (single card, full width or centered, polished like a team member profile): photo placeholder, name, role, short bio, social icons
- Optionally add a "Core Strengths" team-style grid (Frontend Specialist / Backend Engineer / API Architect / UI Implementation) — same person, different hats, presented visually like team roles to reinforce full-stack capability

---

## 6. CONTENT TO USE (REAL — insert exactly, do not invent fake data)

**Name:** Rafi Ullah
**Role:** Full Stack MERN Developer
**Location:** Kohat / Orakzai, Khyber Pakhtunkhwa, Pakistan

**About Me:**
"I am a Full Stack MERN Developer focused on building modern, scalable, and high-performance web applications. I specialize in creating complete solutions from responsive frontend interfaces to secure backend systems and APIs.

My development approach focuses on clean code, performance, maintainability, and real-world business requirements. I enjoy working on challenging projects such as e-commerce platforms, project management systems, admin dashboards, social media applications, and SaaS products.

I continuously improve my skills through hands-on development, hackathons, and building production-ready applications while exploring advanced topics like software architecture, authentication, system design, and scalable backend development."

**Short Bio (use for meta description / footer / team card):**
"Rafi Ullah is a Full Stack MERN Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, and TypeScript. He builds scalable web applications with a strong focus on performance, clean architecture, and user experience. Currently focused on mastering advanced full-stack development, system design, and real-world software engineering."

**Career Objective:**
"My goal is to become a highly skilled software engineer with expertise in full-stack development, scalable systems, and software architecture. I am committed to building impactful digital products and continuously improving through real-world development experience."

**Technical Skills:**
- Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, Shadcn UI
- Backend: Node.js, Express.js, REST APIs, Authentication & Authorization
- Database: MongoDB, Mongoose
- State Management: Context API, Redux Toolkit, Custom Hooks
- Tools & Technologies: Git, GitHub, Vercel, Cloudinary, Figma, Axios, Fetch API

**Services:**
Full Stack Web Development, Frontend Development, Backend Development, Custom Web Applications, REST API Development, Admin Dashboards, Business Websites, Website Optimization

**Contact Information:**
- Phone: +92 336 5091321
- WhatsApp: +92 336 5091321 (use `https://wa.me/923365091321` for click-to-chat button)
- Email: rafideveloper7@gmail.com
- Social Username (all platforms): @rafideveloper7
- GitHub: github.com/rafideveloper7
- LinkedIn: linkedin.com/in/rafideveloper7

---

## 7. RESPONSIVENESS REQUIREMENTS (STRICT)

Must look correct and unbroken at every breakpoint, including very old/small devices:
- 300px (e.g., old Android/iPhone SE 1st gen)
- 320px / 360px / 375px / 390px / 414px (modern phones)
- 600px / 768px (tablets portrait)
- 1024px (tablets landscape / small laptops)
- 1280px / 1440px / 1920px+ (desktops)

Rules:
- No horizontal scroll/overflow at any width — test with `overflow-x-hidden` on body as a safety net but design so it's never needed
- Hero headline must scale down gracefully on 300–360px (use `clamp()` or Tailwind responsive text classes, not fixed huge font sizes)
- Hamburger menu kicks in below `lg` (1024px) — fully usable with thumb on small screens
- All grids collapse to single column below `sm`/`md` as appropriate
- Touch targets (buttons/links) minimum 44x44px on mobile
- Marquee and sliders must work via touch/swipe on mobile, not just hover

---

## 8. CONTACT FORM — FormSubmit INTEGRATION (use exactly this pattern)

Use FormSubmit.co's AJAX-friendly endpoint so it submits directly to email without a custom backend.

```jsx
// app/contact/page.js (relevant form snippet)
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formsubmit.co/rafideveloper7@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New Inquiry from Portfolio Website" />
      <input type="text" name="name" placeholder="Your Name" required
        className="w-full bg-[#101314] border border-[#23262A] rounded-xl px-5 py-4 text-white placeholder:text-[#9A9A95] focus:outline-none focus:border-[#D4FF3F] transition" />
      <input type="email" name="email" placeholder="Your Email" required
        className="w-full bg-[#101314] border border-[#23262A] rounded-xl px-5 py-4 text-white placeholder:text-[#9A9A95] focus:outline-none focus:border-[#D4FF3F] transition" />
      <input type="text" name="subject" placeholder="Subject"
        className="w-full bg-[#101314] border border-[#23262A] rounded-xl px-5 py-4 text-white placeholder:text-[#9A9A95] focus:outline-none focus:border-[#D4FF3F] transition" />
      <textarea name="message" rows={5} placeholder="Tell me about your project..." required
        className="w-full bg-[#101314] border border-[#23262A] rounded-xl px-5 py-4 text-white placeholder:text-[#9A9A95] focus:outline-none focus:border-[#D4FF3F] transition" />

      <button type="submit" disabled={status === 'sending'}
        className="bg-[#D4FF3F] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition disabled:opacity-50">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="text-[#D4FF3F]">Message sent! I'll get back to you soon.</p>}
      {status === 'error' && <p className="text-red-400">Something went wrong. Try WhatsApp instead.</p>}
    </form>
  );
}
```

Notes for the agent:
- First-ever submission from a new email/site on FormSubmit triggers a one-time confirmation email to `rafideveloper7@gmail.com` — must be clicked once to activate.
- Add `_subject`, optionally `_template=table` and a `_next` redirect field if you want FormSubmit's default redirect flow instead of pure AJAX.
- Also add a visible WhatsApp button (`https://wa.me/923365091321`) and `mailto:rafideveloper7@gmail.com` as fallback contact methods next to the form.

---

## 9. PRODUCTION-READINESS CHECKLIST (must all be done, not optional)

- [ ] SEO: proper `metadata` exports per page (title, description, OG tags, favicon)
- [ ] Accessibility: semantic HTML, alt text on all images, keyboard-navigable menu, visible focus states, sufficient color contrast
- [ ] Performance: `next/image` with proper sizing, lazy loading below the fold, font optimization via `next/font`, no layout shift
- [ ] No console errors/warnings, no unused imports, no commented-out dead code
- [ ] Clean folder structure: `/app`, `/components`, `/components/ui`, `/data` (for projects/testimonials/services as JS arrays/objects so content is easy to edit later), `/public`
- [ ] Reusable components (Button, Section, Container, Card, etc.) — avoid copy-pasted markup
- [ ] Dark theme consistent across every page (no white-flash unstyled pages)
- [ ] All animations smooth at 60fps, no jank on scroll, animations don't block interaction
- [ ] Working 404 page and graceful image fallbacks
- [ ] `README.md` explaining how to edit content (projects/services/testimonials data files) and how to deploy to Vercel
- [ ] Fully tested at all breakpoints from Section 7 before considered "done"

---

## 10. DELIVERABLE FORMAT

Build this as a complete Next.js project (App Router, JavaScript only) with all pages, components, animations, and the working FormSubmit contact form fully wired — ready to run with `npm install && npm run dev` and deployable to Vercel with zero further setup beyond the one-time FormSubmit email confirmation click.
