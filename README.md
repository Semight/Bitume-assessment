# 📰 Bitume News App

A **Next.js + TailwindCSS** project that fetches news articles using the **GNews API** and displays them in a clean, responsive layout. Features include a breaking news section, recent articles, search functionality, and category filters.

---

## 🚀 Features

- Featured **Breaking News** section with image overlay
- **Recent Articles** section
- Search for news topics in real-time
- Filter news by categories: Top Stories, World, Politics, Business, Tech
- Fully responsive design for mobile, tablet, and desktop
- Clean and modern UI with TailwindCSS

---

## 🛠 Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS**
- **GNews API** for news data

---

## ⚡ Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Semight/Bitume-assessment.git
cd bitume-assessment
Install dependencies

bash
npm install
# or
yarn install
Create a .env.local file in the root directory:

env
NEXT_PUBLIC_GNEWS_API_KEY=your_api_key_here
Replace your_api_key_here with your actual GNews API key.

Run the development server

bash
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to view the app.

🌐 Deployment
This project can be deployed easily on Vercel:

Go to Vercel and import your GitHub repository.

Set your environment variable NEXT_PUBLIC_GNEWS_API_KEY in the Vercel dashboard.

Deploy the app and share the live URL.

📂 Folder Structure
php
.
├── app/             # Next.js App Router pages
├── public/          # Static assets like images
├── styles/          # Global CSS (Tailwind + custom)
├── lib/             # API functions (e.g., fetchNews)
├── components/      # Reusable React components
├── .env.local       # API keys and environment variables
└── package.json
📌 Notes
The breaking news section always displays the latest article fetched from the API.

The recent articles section shows all remaining articles, starting from index 1.

Remote images from the API are handled using Next.js next/image with configured remote hosts in next.config.js.