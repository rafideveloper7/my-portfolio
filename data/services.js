import { Code2, Gauge, LayoutDashboard, Layers3, Rocket, ServerCog, ShoppingBag, Workflow } from "lucide-react";

export const services = [
  {
    title: "Full Stack Web Development",
    icon: Layers3,
    summary: "Complete MERN and Next.js applications from frontend flows to backend APIs.",
    includes: ["Product architecture", "Responsive UI", "API integration", "Deployment setup"]
  },
  {
    title: "Frontend Development",
    icon: Code2,
    summary: "Fast, accessible interfaces with React, Next.js, Tailwind CSS, and polished motion.",
    includes: ["Landing pages", "Dashboards", "Reusable components", "Animation systems"]
  },
  {
    title: "Backend Development",
    icon: ServerCog,
    summary: "Secure Node.js and Express.js backends designed around real business rules.",
    includes: ["Auth flows", "Role permissions", "Data validation", "Production APIs"]
  },
  {
    title: "Custom Web Applications",
    icon: Rocket,
    summary: "SaaS tools, internal portals, booking systems, and project management platforms.",
    includes: ["MVP planning", "Feature modules", "User workflows", "Admin controls"]
  },
  {
    title: "REST API Development",
    icon: Workflow,
    summary: "Clean REST APIs with MongoDB, Mongoose models, and predictable response patterns.",
    includes: ["CRUD resources", "JWT auth", "Error handling", "Documentation-ready routes"]
  },
  {
    title: "Admin Dashboards",
    icon: LayoutDashboard,
    summary: "Operational panels for teams to manage users, content, orders, and reports.",
    includes: ["Charts and tables", "Filters", "Protected routes", "Role-based UI"]
  },
  {
    title: "Business Websites",
    icon: ShoppingBag,
    summary: "High-converting company websites with strong SEO foundations and clear CTAs.",
    includes: ["Service pages", "Contact forms", "CMS-ready sections", "Performance tuning"]
  },
  {
    title: "Website Optimization",
    icon: Gauge,
    summary: "Speed, accessibility, SEO, and UX improvements for existing web products.",
    includes: ["Core Web Vitals", "Image optimization", "Code cleanup", "Responsive fixes"]
  }
];

export const process = ["Discovery", "Design", "Development", "Testing", "Deployment", "Support"];
