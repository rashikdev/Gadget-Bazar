# 🛒 Gadget Bazar

Discover the latest gadgets at **Gadget Bazar** – your one-stop online shop for smart devices, wearables, and electronics.  
This project is built with **Next.js**, includes **NextAuth.js authentication**, a clean UI, and powerful eCommerce features.

![Gadget Bazar Preview](./public/preview.png)

---

## 🚀 Live Site

👉 [Visit Gadget Bazar Live site](https://gadget-bazar-pi.vercel.app/)

---

## ✨ Features

- 🔐 **Authentication & Authorization** with NextAuth.js (Login, Register)
- 🛍️ **Product Browsing** by category
- 🛒 **Cart & Checkout**
- 🛠️ **Admin Dashboard** to manage products & users
- 🎨 **Responsive UI** with Tailwind CSS

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: MongoDB (without Mongoose)
- **API Requests**: Axios
- **UI Components**: Custom components
- **Deployment**: Vercel

---

## ⚙️ Setup & Installation

Follow these steps to run **Gadget Bazar** locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/rashikdev/Gadget-Bazar.git
   cd Gadget-Bazar

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Setup environment variables**

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=secret-key-goes-here
   NEXT_PUBLIC_API_URL=http://localhost:3000
   NEXTAUTH_URL=http://localhost:3000

   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 🗺️ Route Summary

**Public Routes**

- / → Homepage


- /login → Login page

- /register → Register page

- /products → Browse all products

- /products/category/[categoryname] → Product Based on Category

- /products/[id] → Single Product Details

- /dashboard → Dashboard ( if admin )

- /my-cart → View cart items

- /my-cart/checkout → Checkout page

## 👨‍💻 Author

Rashik 💼 Frontend Developer | Passionate about building modern web apps

[Portfolio](https://portfolio-464da.web.app/) <br/>
[LinkedIn](https://www.linkedin.com/in/rashikdev)
