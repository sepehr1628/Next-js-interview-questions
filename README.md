# 🚀 Next.js Interview Questions

This repository contains a collection of **[Intermediate](#-questions-in-intermediate-level)** and **[Advanced](#-questions-in-advanced-level)** questions for **Next.js Developer** positions.  
All questions are provided in both **[Persian](#-questions-in-persian)** and **[English](#-questions-in-english)** to help you prepare effectively for technical interviews.

---

## **✨ Categories of Questions**

Questions are divided into two levels: **[Intermediate](#-questions-in-intermediate-level)** and **[Advanced](#-questions-in-advanced-level)**, with each containing **5 main topics**:

- **🟢 Next.js Core** – Fundamental and advanced Next.js concepts
- **⚡ Performance** – Optimization techniques and caching strategies
- **🔐 Authentication & Authorization** – Identity verification and access management
- **💾 State Management** – Managing state and data flow
- **🛡️ Security** – Security practices and preventing attacks

---

# **🌍 Questions in English**

## **🔰 [Intermediate](#-questions-in-intermediate-level) Level**

✅ These questions are designed for developers familiar with Next.js and looking to strengthen their skills.

### **🟢 Next.js Core**

1.  **What is Next.js, and what are its key features?**

**What is Next.js?**

Next.js is a React framework that enables server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) out of the box. It simplifies building optimized, production-ready React applications by handling routing, API integration, and performance optimizations.

**Key Features of Next.js**

♦ File-Based Routing

♦ Pre-Rendering (SSG & SSR)

♦ API Routes

♦ Image Optimization

♦ Middleware

♦ Internationalization (i18n)

♦ Incremental Static Regeneration (ISR)

♦ Built-in CSS and Sass Support

♦ Fast Refresh & Automatic Code Splitting

♦ Edge & Serverless Deployments

2.  **How does Next.js improve performance compared to traditional React apps?**

**Next.js optimizes performance by providing server-side rendering (SSR), static site generation (SSG), automatic code splitting, image optimization, and built-in API routes. These features enhance speed, SEO, and user experience compared to traditional React apps, which rely on client-side rendering (CSR).**

**Key Performance Enhancements**

♣ Pre-Rendering (SSG & SSR) – Generates pages ahead of time, reducing client-side work.

♣ Automatic Code Splitting – Loads only necessary JavaScript, reducing bundle size.

♣ Image Optimization – Uses next/image for responsive, lazy-loaded images.

♣ Built-in API Routes – Eliminates the need for a separate backend server.

♣ Middleware & Edge Functions – Executes logic closer to users, improving response times.

3.  **What is the difference between Static Site Generation (SSG) and Server-Side Rendering (SSR)?**
4.  **What is Incremental Static Regeneration (ISR), and how does it work?**
5.  **How do you create a new page in Next.js?**

### **⚡ Performance**

1. **How can you optimize a Next.js application?**
2. **What caching strategies are used in the browser?**
3. **How do you optimize images in Next.js?**

---

## **🚀 [Advanced](#-questions-in-advanced-level) Level**

✅ These questions are for developers aiming for a **Senior Next.js Developer** position.

### **🟢 Next.js Core**

1. **How do you build a design system for Next.js components?**
2. **How does `React Server Components (RSC)` work in Next.js?**
3. **Why should we use the `"use server"` directive in server actions?**

### **⚡ Performance**

1. **How should browser caching and Service Worker caching be handled?**
2. **How can bundle size be optimized in a Next.js project with more than 50 pages?**
3. **What rendering patterns exist in React, and when should each be used?**
4. **How do you efficiently render a chat application when the number of messages reaches 1000+ without performance issues?**

### **🔐 Authentication & Authorization**

1. **What authentication system can be implemented for a client-side app?**
2. **How should access tokens and refresh tokens be managed?**
3. **What are the best practices for Role-based access control (RBAC)?**
4. **What retry policies should be used for API network requests?**

### **💾 State Management**

1. **How can you share page state changes with another user?**
2. **How should Local Storage, Session Storage, IndexDB, and Cache be managed efficiently?**
3. **What is the Broadcast Channel API, and how can it be used?**

### **🛡️ Security**

1. **How can CSRF and XSS attacks be prevented?**
2. **What are important cookie flags? (`SameSite`, `HttpOnly`, `Secure`)**
3. **Can cookies be set from the server? Why and how?**

---

# **📝 Questions in Persian**

## **🔰 [Intermediate](#-questions-in-english-intermediate) Level**

✅ These questions are for developers familiar with Next.js who want to strengthen their skills.

### **🟢 Next.js Core**

1. **Next.js چیست و چه ویژگی‌هایی دارد؟**
2. **چگونه Next.js عملکرد بهتری نسبت به React سنتی ارائه می‌دهد؟**
3. **تفاوت بین Static Site Generation (SSG) و Server-Side Rendering (SSR) چیست؟**
4. **Incremental Static Regeneration (ISR) چیست و چگونه کار می‌کند؟**
5. **چگونه یک صفحه جدید در Next.js ایجاد می‌شود؟**

### **⚡ Performance**

1. **چگونه می‌توان عملکرد یک اپلیکیشن Next.js را بهبود داد؟**
2. **چه استراتژی‌هایی برای کش کردن داده‌ها در مرورگر وجود دارد؟**
3. **چگونه می‌توان تصاویر را در Next.js بهینه کرد؟**

---

## **🚀 [Advanced](#-questions-in-english-advanced) Level**

✅ These questions are for developers aiming for a **Senior Next.js Developer** position.

### **🟢 Next.js Core**

1. **چگونه می‌توان یک سیستم طراحی برای کامپوننت‌های Next.js ایجاد کرد؟**
2. **چگونه `React Server Components (RSC)` در Next.js کار می‌کند؟**
3. **چرا باید از `"use server"` در سرور اکشن‌ها استفاده کرد؟**

### **⚡ Performance**

1. **چگونه باید کش مرورگر و Service Worker را مدیریت کرد؟**
2. **چگونه می‌توان حجم باندل را در پروژه‌ای با بیش از ۵۰ صفحه مدیریت کرد؟**
3. **چه الگوهای رندرینگ در React وجود دارد و برای چه مواردی مناسب هستند؟**
4. **اگر در فرانت‌اند تعداد چت‌های یک سیستم به ۱۰۰۰ عدد برسد، چگونه باید آن‌ها را رندر کرد که صفحه laggy نشود؟**

### **🔐 Authentication & Authorization**

1. **چه سیستم احراز هویتی برای کلاینت می‌توان پیاده‌سازی کرد؟**
2. **چگونه باید توکن و رفرش توکن را مدیریت کرد؟**
3. **چه استراتژی‌هایی برای مدیریت Role-based access control (RBAC) در صفحات وجود دارد؟**
4. **چه سیاستی برای Retry کردن درخواست‌های API باید داشته باشیم؟**

### **💾 State Management**

1. **چگونه می‌توان تغییرات state صفحه را با یک شخص دیگر به اشتراک گذاشت؟**
2. **چگونه می‌توان داده‌های Local Storage، Session Storage، IndexDB و Cache را بهینه مدیریت کرد؟**
3. **Broadcast Channel API چیست و چه کاربردی دارد؟**

### **🛡️ Security**

1. **چگونه می‌توان از حملات CSRF و XSS جلوگیری کرد؟**
2. **چه flag‌هایی هنگام ست کردن کوکی اهمیت دارند؟ (`SameSite`, `HttpOnly`, `Secure`)**
3. **آیا می‌توان کوکی را از سمت سرور ست کرد؟ چرا و چگونه؟**

---

## **📌 Contributing to the Project**

❗

✅ If you have a new question, feel free to submit a **Pull Request** or open a **New Issue**.  
✅ Any edits or suggestions are welcome!  
✅ Star this repository to stay updated with the latest questions.

💡 **Author contact:** Sepehr1628@gmail.com
