# Web-Based Decision Logging System

A comprehensive decision logging system built with the MERN stack that allows organizations to record, track, and manage important decisions with complete audit trails.

## 🚀 Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Decision Management**: Create, read, update, and delete decisions
- **Status Tracking**: Track decision status (Pending, Approved, Rejected)
- **Audit Trail**: Complete history with timestamps and creator information
- **Role-Based Access**: User and Admin roles with appropriate permissions
- **Modern UI**: Beautiful gradient interface with responsive design
- **Real-time Updates**: Instant reflection of changes across the application

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3 with Gradient Backgrounds

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing

## 📋 Prerequisites

Before running this project, make sure you have installed:

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/SHARMILA-CS/decision-logging-system.git
cd decision-logging-system
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/decision-logging
JWT_SECRET=your_secret_key_here_12345
```

Start the backend server:
```bash
npm run dev
```

Backend will run on: `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:
```bash
cd frontend
npm install
```

Start the frontend:
```bash
npm start
```

Frontend will run on: `http://localhost:3000`

## 📁 Project Structure
```
decision-logging-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── decisionController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Decision.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── decisionRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   ├── Navbar.css
    │   │   └── PrivateRoute.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── Dashboard.js
    │   │   ├── AddDecision.js
    │   │   ├── EditDecision.js
    │   │   ├── Auth.css
    │   │   ├── Dashboard.css
    │   │   └── DecisionForm.css
    │   ├── utils/
    │   │   └── api.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

## 🎨 Color Palette

- Primary: `#8B5CF6` (Purple)
- Secondary: `#6366F1` (Indigo)
- Background: Gradient from Purple to Blue
- Text: `#111827` (Charcoal)
- Accent: `#A78BFA` (Light Purple)

## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGO_URI | MongoDB connection string | mongodb://localhost:27017/decision-logging |
| JWT_SECRET | Secret key for JWT tokens | your_secret_key_123 |

## 📸 Screenshots

### Login Page
Beautiful gradient background with secure authentication

### Dashboard
View all decisions with filtering options (All, Pending, Approved, Rejected)

### Add/Edit Decision
Comprehensive form to log decisions with all necessary details

## 🚦 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Decisions
- `GET /api/decisions` - Get all decisions (Protected)
- `GET /api/decisions/:id` - Get single decision (Protected)
- `POST /api/decisions` - Create decision (Protected)
- `PUT /api/decisions/:id` - Update decision (Protected)
- `DELETE /api/decisions/:id` - Delete decision (Protected)

## 👤 Default User Roles

- **User**: Can create, edit, and delete their own decisions
- **Admin**: Can manage all decisions in the system

## 🧪 Testing

1. Register a new account
2. Login with credentials
3. Create a new decision
4. View decision on dashboard
5. Edit decision details
6. Filter decisions by status
7. Delete a decision

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 👩‍💻 Author

**SHARMILA S**  
Bannari Amman Institute of Technology

## 🙏 Acknowledgments

- MERN Stack Community
- React Documentation
- MongoDB Documentation
- Express.js Team

---

**Made with ❤️ for efficient decision management**