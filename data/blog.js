// data/blog.js
export const posts = [
  {
    slug: "building-scalable-mern-apps",
    title: "Building Scalable MERN Applications",
    excerpt: "How clean architecture, feature boundaries, and API contracts keep full-stack products maintainable.",
    date: "June 2026",
    readTime: "5 min read",
    image: {
      src: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781869826/iPad-PRO-11-sharknutritionpk.store_mxboco.png",
      alt: "MERN stack architecture diagram",
      position: "center", // center, left, right, start, end
      caption: "MERN stack architecture overview"
    },
    content: `
      <h2>Introduction</h2>
      <p>Building scalable MERN (MongoDB, Express.js, React, Node.js) applications requires careful planning and architecture decisions. In this article, we'll explore best practices for creating maintainable and scalable full-stack applications.</p>
      
      <h2>Clean Architecture</h2>
      <p>Clean architecture separates your application into layers, making it easier to test, maintain, and scale. The key layers include:</p>
      <ul>
        <li><strong>Domain Layer:</strong> Contains business logic and entities</li>
        <li><strong>Application Layer:</strong> Orchestrates use cases</li>
        <li><strong>Infrastructure Layer:</strong> Handles external dependencies like databases and APIs</li>
        <li><strong>Presentation Layer:</strong> Manages UI and API endpoints</li>
      </ul>
      
      <h2>Feature Boundaries</h2>
      <p>Organize your code by features rather than technical roles. This approach, known as feature-based organization, makes it easier to navigate and maintain large codebases.</p>
      
      <h2>API Contracts</h2>
      <p>Define clear API contracts between your frontend and backend. Using tools like OpenAPI or GraphQL can help maintain consistency and provide automatic documentation.</p>
      
      <h2>Conclusion</h2>
      <p>By following these practices, you can build MERN applications that are scalable, maintainable, and ready for production use.</p>
    `
  },
  {
    slug: "nextjs-performance-checklist",
    title: "A Practical Next.js Performance Checklist",
    excerpt: "Image sizing, route structure, caching, font loading, and interaction details that make websites feel faster.",
    date: "June 2026",
    readTime: "4 min read",
    image: {
      src: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781870900/Screenshot_2026-06-19_170610_yjwb5f.png",
      alt: "Next.js performance optimization",
      position: "left",
      caption: "Next.js performance optimization strategies"
    },
    content: `
      <h2>Introduction</h2>
      <p>Next.js provides powerful performance optimizations out of the box, but there are several key areas you should focus on to ensure your application runs at peak performance.</p>
      
      <h2>Image Optimization</h2>
      <p>Use the Next.js Image component with proper sizing and optimization:</p>
      <ul>
        <li>Specify width and height attributes</li>
        <li>Use the 'fill' prop for responsive images</li>
        <li>Implement lazy loading for off-screen images</li>
        <li>Use WebP format when possible</li>
      </ul>
      
      <h2>Route Structure</h2>
      <p>Optimize your routing structure by:</p>
      <ul>
        <li>Using dynamic routes effectively</li>
        <li>Implementing ISR (Incremental Static Regeneration)</li>
        <li>Pre-fetching critical routes</li>
      </ul>
      
      <h2>Caching Strategies</h2>
      <p>Implement effective caching strategies for both static and dynamic content using Next.js caching mechanisms.</p>
      
      <h2>Font Loading</h2>
      <p>Optimize font loading by using Next.js Font optimization and implementing font-display: swap for better perceived performance.</p>
    `
  },
  {
    slug: "secure-rest-api-basics",
    title: "Secure REST API Basics for Business Apps",
    excerpt: "Authentication, authorization, validation, and error responses every production API should handle clearly.",
    date: "June 2026",
    readTime: "6 min read",
    image: {
      src: "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781869674/apidog-viewing-responses-api_o7asya.png",
      alt: "REST API security best practices",
      position: "start",
      caption: "REST API security best practices"
    },
    content: `
      <h2>Introduction</h2>
      <p>Security is paramount when building REST APIs for business applications. This guide covers the essential security practices you should implement.</p>
      
      <h2>Authentication</h2>
      <p>Implement robust authentication using:</p>
      <ul>
        <li>JWT (JSON Web Tokens) for stateless authentication</li>
        <li>OAuth 2.0 for third-party authentication</li>
        <li>Secure session management</li>
      </ul>
      
      <h2>Authorization</h2>
      <p>Implement role-based access control (RBAC) to ensure users only access resources they're permitted to.</p>
      
      <h2>Validation</h2>
      <p>Validate all input data to prevent injection attacks and ensure data integrity.</p>
      
      <h2>Error Responses</h2>
      <p>Provide clear, consistent error responses that don't expose sensitive information about your system.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these security practices, you can build REST APIs that are secure, reliable, and ready for business use.</p>
    `
  }
];