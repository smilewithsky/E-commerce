# 🛒 E-commerce Project

A modern full-stack e-commerce application built with Next.js, Tailwind CSS, Redux Toolkit, and (optionally) NestJS backend. This project demonstrates key features for a scalable online store including authentication, product management, and cart functionalities.

---

## 📦 Tech Stack

### Frontend (`my-app/`)
- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** App Router (Next.js 13+)

### Backend (`test-nestjs/`) *(optional)*
- **Framework:** NestJS
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Auth:** JWT with Guards & Middleware

---

## 🚀 Features

- 🔐 Authentication (Login/Register)
- 🎯 Middleware-protected routes
- 🛍 Product listing and detail pages
- 🛒 Cart with local state management
- ⚙️ Fully typed with TypeScript
- 🧱 Modular folder structure
- 🌐 Responsive design

---

## 🗂 Folder Structure

E-commerce/
├── my-app/ # Frontend (Next.js)
│ ├── public/ # Static files (images, SVGs)
│ ├── src/ # Main application source
│ │ ├── app/ # Pages and routing (App Router)
│ │ ├── components/ # Reusable UI components
│ │ ├── store/ # Redux setup and slices
│ │ ├── lib/ # Helper functions & services
│ │ └── types/ # TypeScript types
├── server/ # Backend (NestJS) - optional
└── README.md

yaml
Copy
Edit

---

## 📥 Getting Started

### 1. Clone Repository
git clone https://github.com/smilewithsky/E-commerce.git
cd E-commerce
2. Setup Frontend
bash
Copy
Edit
cd my-app
npm install
npm run dev
Visit: http://localhost:3000

3. Setup Backend (if used)
bash
Copy
Edit
cd server
npm install
npm run start:dev
Make sure PostgreSQL is running locally and .env is configured correctly.

🔧 Environment Variables
my-app/.env
ini
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:5000
server/.env
ini
Copy
Edit
DATABASE_URL=postgres://youruser:yourpass@localhost:5432/ecommerce_db
JWT_SECRET=your_jwt_secret
