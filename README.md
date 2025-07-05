# 💬 Fullstack Chat Application

A real-time chat web application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to register, log in, upload profile images, and chat with other online users in real-time using Socket.IO.

---

## 🚀 Features

- 👤 User authentication (JWT + Cookies)
- 📸 Profile image upload (Cloudinary integration)
- 💬 Real-time messaging with Socket.IO
- ✅ Online user detection
- 🔒 Protected routes with token-based access
- ⚡ Zustand for global state management
- 🎨 Tailwind CSS for responsive UI

---

## 🛠️ Tech Stack

| Frontend | Backend |
|----------|---------|
| React.js (Vite) | Node.js + Express.js |
| Zustand | MongoDB + Mongoose |
| Tailwind CSS | Socket.IO |
| Axios | JWT Authentication |
| React Router | Cloudinary for image hosting |

---

## 📂 Folder Structure
├── client/ # Frontend (React)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ ├── lib/axios.js
│ │ └── App.jsx
│ └── vite.config.js
│
├── server/ # Backend (Node + Express)
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── index.js


---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fullstack-chat-app.git
cd fullstack-chat-app

2. Setup Backend
cd server
npm install

Create .env in /server:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


3. Setup Frontend

cd ../client
npm install
▶️ Run the App


🖥 Start Backend

cd server
npm run dev


🌐 Start Frontend

cd client
npm run dev
