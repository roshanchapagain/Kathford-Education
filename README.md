# Kathford React Frontend + Kathford-Admin

Complete frontend-only rebuild based on the original Kathford Education Consultancy files.

## Stack
- React 19 + TypeScript
- Vite
- React Router
- CSS (no Tailwind requirement)
- Browser localStorage CMS persistence

## Run
```bash
npm install
npm run dev
```

## CMS capabilities
Kathford-Admin can edit hero/banner images, logo, countries/flags/banners, services, process, visa content/images, testimonials, branches, navigation, footer/social content, SEO, homepage section visibility/order, light/dark/system mode, and **per-section fonts/colors/radius**.

## Persistence now
All CMS changes are stored in localStorage. They survive dev-server restarts in the same browser/origin.

## Backend later
When your Express + TypeScript + Mongoose/Prisma backend is ready, replace the localStorage logic in `src/context/CmsContext.tsx` with API GET/PATCH/POST calls. Public pages and admin UI can stay the same.

## Important
Large uploaded photos are converted to base64 for frontend-only testing, so localStorage is not suitable for production media. In production upload images to Cloudinary/S3 and store URLs through your backend/database.
