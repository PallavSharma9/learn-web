# 🚀 Learn-Web — Modern Course Platform

Learn-Web is a full-stack course platform built with **Vue 3, TypeScript, Pinia, and Appwrite** that allows users to browse courses, authenticate securely, and access structured learning content.

👉 **Live Demo:**  
https://learn-web-es5r-91zuagkkt-pallavsharma9s-projects.vercel.app/

---

## ✨ Features

✅ Secure Authentication (Signup / Login / Logout)  
✅ Cloud Backend powered by Appwrite  
✅ Dynamic Course Pages  
✅ Structured Syllabus System  
✅ Image Storage via Appwrite Buckets  
✅ Protected Content Architecture (ready for purchase gating)  
✅ Responsive UI (Mobile + Desktop)  
✅ Centralized State Management with Pinia  
✅ Production Deployment on Vercel  

---


This project follows a **frontend-first architecture** using Appwrite as a Backend-as-a-Service.

---

## 🛠 Tech Stack

### Frontend
- Vue 3
- TypeScript
- Pinia
- Vue Router
- Tailwind CSS

### Backend (BaaS)
- Appwrite Authentication
- Appwrite Database
- Appwrite Storage

### Deployment
- Vercel

---

## 🔐 Authentication Flow

- Users create an account via Appwrite.
- Secure sessions are maintained using cookies.
- Protected features can be gated based on authentication.

---

## 📚 Database Design

### Courses Collection
- title  
- description  
- price  
- discount  
- thumbnailId  
- instructor  

### Syllabus Collection
- courseId (relation)
- title  
- imageId  
- order  

This relational structure allows scalable course expansion.

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repo

git clone https://github.com/PallavSharma9/learn-web.git

### 2️⃣ Install dependencies

npm install

### 3️⃣ Create .env
VITE_APPWRITE_ENDPOINT=
VITE_APPWRITE_PROJECT_ID=
VITE_DB_ID=
VITE_COURSE_TABLE_ID=
VITE_SYLLABUS_TABLE_ID=
VITE_STORAGE_BUCKET_ID=

### 4️⃣ Run locally

npm run dev

## 🌍 Deployment

### The app is deployed on Vercel with environment variables configured for Appwrite.

🔥 Future Improvements

Payment Integration (Stripe/Razorpay)

Course Purchase System

Video Streaming Access Control

Admin Dashboard

Role-based Authorization

Email Notifications

Course Progress Tracking

## 👨‍💻 Author

## Pallav Sharma






