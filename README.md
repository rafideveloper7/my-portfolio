# Rafi Ullah Agency Portfolio

Production-ready Next.js App Router website for Rafi Ullah, Full Stack MERN Developer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

- Profile, navigation, contact, skills, logo, hero image, hero text, and profile image: `data/site.js`
- Services and workflow: `data/services.js`
- Projects and filters: `data/projects.js`
- Testimonials: `data/testimonials.js`
- Blog article cards: `data/blog.js`
- Project image paths or remote URLs: `data/projects.js`
- Local visual assets: `public/`

For images, set `src` to a local public path like `/projects/ecommerce.svg` or a full HTTPS URL. Logo, hero image, profile image, favicon, and Open Graph image are configured in `data/site.js` under `assets`.

## Contact form

The contact form posts to FormSubmit:

```txt
https://formsubmit.co/rafideveloper7@gmail.com
```

The first submission may require a one-time confirmation email click from FormSubmit before messages are delivered.

## Deploy

Deploy directly to Vercel. No backend or environment variables are required for the current build.
