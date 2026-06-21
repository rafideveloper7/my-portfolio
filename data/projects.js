// data/projects.js
export const projects = [
  {
    id: 1,
    title: "Full Stack E-commerce Platform",
    category: "E-commerce",
    image: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781869826/iPad-PRO-11-sharknutritionpk.store_mxboco.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe-ready"],
    description: "A scalable storefront and admin workflow for products, carts, orders, and customer management.",
    liveLink: "https://www.aghaz.shop/", // Added live link
    githubLink: "" // Optional
  },
  {
    id: 2,
    title: "E-commerce REST API",
    category: "APIs",
    image: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781869674/apidog-viewing-responses-api_o7asya.png",
    tags: ["Express.js", "JWT", "Mongoose", "REST"],
    description: "A secure API layer with authentication, product resources, order flows, and clean route structure.",
    liveLink: "https://aghaz-api.vercel.app/",
    githubLink: ""
  },
  {
    id: 3,
    title: "Restaurant Management System",
    category: "Dashboards",
    image: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781869290/Screenshot_2026-04-09_104436_ufxzek.png",
    tags: ["React", "Tailwind", "Charts", "Admin"],
    description: "An operations dashboard for orders, tables, menu items, staff visibility, and daily reporting.",
    liveLink: "https://texas-navy-one.vercel.app/",
    githubLink: ""
  },
  {
    id: 4,
    title: "Dashboard for E-commerce",
    category: "Web Apps",
    image: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781870900/Screenshot_2026-06-19_170610_yjwb5f.png",
    tags: ["MERN", "Socket.io", "Auth", "Realtime"],
    description: "A modern messaging app structure with authenticated users, live conversations, and responsive UI.",
    liveLink: "https://aghaz-admin-z.vercel.app/dashboard",
    githubLink: ""
  },
  {
    id: 5,
    title: "Full Stack E-commerce Platform",
    category: "E-commerce",
    image: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781869826/iPad-PRO-11-sharknutritionpk.store_mxboco.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe-ready"],
    description: "A scalable storefront and admin workflow for products, carts, orders, and customer management.",
    liveLink: "https://sharknutritionpk.store/", // Added live link
    githubLink: "" // Optional
  },
  {
    id: 6,
    title: "Business Website System",
    category: "Web Apps",
    image: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781871420/Clarity-bootstrap-website-template-md_wy9whn.webp",
    tags: ["Next.js", "SEO", "FormSubmit", "Vercel"],
    description: "A production-ready business website structure with services, blog, contact, and fast deployment.",
    liveLink: "https://business-site.example.com",
    githubLink: "https://github.com/yourusername/business-website"
  }
];

export const filters = ["All", "Web Apps", "Dashboards", "E-commerce", "APIs"];