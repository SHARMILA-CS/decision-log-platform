# Decision Logging System

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for tracking and managing organizational decisions with role-based access control.

---

## 🚀 Quick Start

```bash
git clone https://github.com/SHARMILA-CS/decision-log-platform.git
cd decision-log-platform/backend
npm install
```

Create a `.env` file inside `backend/` and add:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm start
```

Open another terminal:

```bash
cd ../frontend
npm install
npm start
```

Frontend runs on: http://localhost:3000
Backend runs on: http://localhost:5000

---

## 👩‍💻 Developer

* **Name:** Sharmila S
* **College:** Bannari Amman Institute of Technology
* **Program:** Computer Science & Engineering

---

## ✨ Features

### Core Functionality

* User Authentication (Register, Login, Forgot Password)
* Role-Based Access (User & Admin)
* Decision Management (Create, Edit, Delete, View)
* Categories (Technical, Business, Personal, Financial, Strategic, Operational)
* Tags System
* Status Workflow (Pending → Approved/Rejected)
* Notifications (decision status updates)
* Filtering by status and category
* Responsive design

### User Capabilities

* Create and manage decisions
* Add categories and tags
* View own decisions
* Receive notifications

### Admin Capabilities

* View all users' decisions
* Approve/reject decisions
* Update decision status
* Full CRUD operations

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Context API
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt.js
* crypto

---

## 📂 Project Structure

```
decision-logging-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    └── src/
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

⚠️ `.env` is not included in this repository for security reasons.

---

## 🎯 Usage Guide

### Register & Login

* Go to http://localhost:3000/register
* Create account and login

### Admin Setup

* Open MongoDB
* Change user role from `"user"` to `"admin"`

### Create Decision

* Click “Add New Decision”
* Fill details and submit

### Admin Workflow

* Review pending decisions
* Approve or reject
* Users get notified

---

## 📝 API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login
* GET /api/auth/me
* POST /api/auth/forgot-password
* PUT /api/auth/reset-password/:token

### Decisions

* GET /api/decisions
* POST /api/decisions
* GET /api/decisions/:id
* PUT /api/decisions/:id
* DELETE /api/decisions/:id

### Notifications

* GET /api/notifications
* GET /api/notifications/unread-count
* PUT /api/notifications/:id/read
* PUT /api/notifications/mark-all-read

---

## 🔐 Security Features

* Password hashing with bcrypt
* JWT authentication
* Protected routes
* Role-based authorization
* Input validation

---

## 🚀 Future Enhancements

* Search functionality
* Date filtering
* Decision history
* Export to PDF/Excel
* Email notifications
* Analytics dashboard

---

## 🐛 Known Issues

* Email sending is simulated
* No file upload support
* Limited categories

---

## 📄 License

This project is for educational purposes.

---

## 📞 Contact

* GitHub: https://github.com/SHARMILA-CS
* Email: [s.sharmila.avp@gmail.com](mailto:s.sharmila.avp@gmail.com)

---
Made with ❤️ by SHARMILA S

