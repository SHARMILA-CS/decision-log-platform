<!-- <!-- # Web-Based Decision Logging System

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

**Made with ❤️ for efficient decision management** -->


<!-- 
# Educational Institution Decision Management System

A comprehensive decision management system specifically designed for educational institutions to manage, track, and approve decisions across different departments with integrated leave management.

## 🎯 Problem Statement

Educational institutions make hundreds of decisions daily across different departments:
- **Academic decisions**: Syllabus changes, exam schedules, course modifications
- **Infrastructure decisions**: Building renovations, equipment purchases, lab upgrades
- **Administrative decisions**: Policy changes, event approvals, budget allocations
- **Leave management**: Faculty/staff leave applications with multi-level approval workflow
- **HR decisions**: Faculty hiring, salary revisions, promotions
- **Finance decisions**: Budget approvals, expenditure authorization

Currently, these decisions are scattered across emails, WhatsApp groups, and physical files, making it difficult to:
- Track decision history and audit trails
- Implement proper approval workflows
- Monitor leave balances and approvals
- Generate reports and analytics
- Ensure accountability and transparency

## ✨ Solution

Our system centralizes all institutional decisions with:
- ✅ **Department-wise categorization** (CSE, ECE, MECH, CIVIL, EEE, etc.)
- ✅ **Category-based organization** (Academic, Infrastructure, Administrative, Leave, Finance, HR)
- ✅ **Multi-level approval workflow** (Faculty → HOD → Principal → Management)
- ✅ **Integrated leave management** with automatic balance tracking
- ✅ **Role-based access control** (Faculty, HOD, Principal, Admin)
- ✅ **Priority-based decision handling** (Low, Medium, High, Urgent)
- ✅ **Complete audit trail** with timestamps and approver history

## 🚀 Key Features

### 1. Decision Management
- Create decisions with category, department, and priority
- Track decision status through approval workflow
- View decision history with complete audit trail
- Filter decisions by status, category, and department
- Department-wise access control

### 2. Leave Management System
- **Apply for Leave**: Faculty can apply for different leave types
- **Leave Types**: Casual, Sick, Earned, Maternity, Compensatory
- **Leave Balance Tracking**: Automatic tracking of available/used leaves
- **Multi-level Approval**: 
  - Faculty applies → HOD approves → Principal approves → Admin finalizes
- **Leave History**: Complete record of all leave applications
- **Approval Dashboard**: Separate dashboards for HOD, Principal, and Admin

### 3. Role-Based Access
- **Faculty**: Can create decisions, apply for leave, view their submissions
- **HOD**: Can approve department decisions and leaves, view department data
- **Principal**: Can approve all decisions and leaves, institution-wide visibility
- **Admin**: Full system access, final approval authority

### 4. Approval Workflow
- Pending → HOD Approved → Principal Approved → Approved
- Comments and notes at each approval stage
- Rejection with reason tracking
- Email notifications (planned for Phase 2)

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI
- **React Router DOM** - Navigation
- **Axios** - API communication
- **CSS3** - Modern gradient design

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing

## 📋 Prerequisites

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

Create `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/educational-decision-system
JWT_SECRET=your_secret_key_here_12345
```

Start backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 📁 Project Structure
```
educational-institution-decision-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── decisionController.js
│   │   └── leaveController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Decision.js
│   │   └── Leave.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── decisionRoutes.js
│   │   └── leaveRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   └── PrivateRoute.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── Dashboard.js
    │   │   ├── AddDecision.js
    │   │   ├── EditDecision.js
    │   │   ├── ApplyLeave.js
    │   │   ├── MyLeaves.js
    │   │   └── LeaveApproval.js
    │   ├── utils/
    │   │   └── api.js
    │   └── App.js
    └── package.json
```

## 🎨 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: Enum ['faculty', 'hod', 'principal', 'admin'],
  department: Enum ['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', ...],
  employeeId: String (unique),
  leaveBalance: {
    casual: Number (default: 12),
    sick: Number (default: 12),
    earned: Number (default: 15),
    maternity: Number (default: 180),
    compensatory: Number (default: 0)
  }
}
```

### Decision Model
```javascript
{
  title: String,
  description: String,
  category: Enum ['academic', 'infrastructure', 'administrative', 'leave', 'finance', 'hr'],
  department: Enum ['CSE', 'ECE', ...],
  priority: Enum ['low', 'medium', 'high', 'urgent'],
  optionsConsidered: String,
  finalDecision: String,
  reason: String,
  status: Enum ['pending', 'hod_approved', 'principal_approved', 'approved', 'rejected'],
  approvedBy: Array of approver objects,
  createdBy: ObjectId (ref: User)
}
```

### Leave Model
```javascript
{
  employee: ObjectId (ref: User),
  leaveType: Enum ['casual', 'sick', 'earned', 'maternity', 'compensatory'],
  fromDate: Date,
  toDate: Date,
  numberOfDays: Number,
  reason: String,
  status: Enum ['pending', 'hod_approved', 'principal_approved', 'approved', 'rejected'],
  approvedBy: Array of approver objects,
  department: String
}
```

## 📸 Use Cases

### 1. Academic Decision Example
**Title**: Update Computer Networks Syllabus  
**Category**: Academic  
**Department**: CSE  
**Priority**: High  
**Workflow**: Faculty creates → HOD reviews → Principal approves

### 2. Infrastructure Decision Example
**Title**: Purchase New Lab Equipment  
**Category**: Infrastructure  
**Department**: ECE  
**Priority**: Urgent  
**Workflow**: HOD proposes → Principal approves → Management finalizes

### 3. Leave Application Example
**Type**: Casual Leave  
**Duration**: 3 days  
**Workflow**: Faculty applies → HOD approves → Principal approves → Admin finalizes → Leave balance updated

## 🚦 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Decisions
- `GET /api/decisions` - Get all decisions
- `POST /api/decisions` - Create decision
- `PUT /api/decisions/:id` - Update decision
- `DELETE /api/decisions/:id` - Delete decision

### Leaves
- `POST /api/leaves/apply` - Apply for leave
- `GET /api/leaves/all` - Get all leaves (for approvers)
- `GET /api/leaves/my-leaves` - Get my leave applications
- `GET /api/leaves/balance` - Get leave balance
- `PUT /api/leaves/:id/approve` - Approve/Reject leave

## 👤 User Roles & Permissions

| Role | Can Create Decisions | Can Approve Decisions | Can Apply Leave | Can Approve Leave | View Scope |
|------|---------------------|----------------------|-----------------|-------------------|------------|
| **Faculty** | ✅ | ❌ | ✅ | ❌ | Own submissions |
| **HOD** | ✅ | ✅ (Department) | ✅ | ✅ (Department) | Department-wide |
| **Principal** | ✅ | ✅ (All) | ✅ | ✅ (All) | Institution-wide |
| **Admin** | ✅ | ✅ (All) | ✅ | ✅ (Final approval) | Institution-wide |

## 🎯 Phase 2 Roadmap

- [ ] Email notifications for approvals
- [ ] Advanced analytics and reporting
- [ ] Export decisions to PDF/Excel
- [ ] Mobile app (React Native)
- [ ] Real-time notifications (WebSocket)
- [ ] File attachments for decisions
- [ ] Calendar integration for leaves
- [ ] SMS notifications
- [ ] Dashboard widgets and charts
- [ ] Deployment to cloud (AWS/Heroku)

## 📝 License

ISC License

## 👩‍💻 Author

**SHARMILA S**  
Bannari Amman Institute of Technology

## 🙏 Acknowledgments

- MERN Stack Community
- Bannari Amman Institute of Technology
- Project Guide and Faculty

---

**Made with ❤️ for efficient institutional decision management** --> 

# Decision Logging System

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for tracking and managing organizational decisions with role-based access control.

## 👩‍💻 Developer
**Name:** SHARMILA S  
**College:** Bannari Amman Institute of Technology  
**Program:** Computer Science & Engineering

---

## ✨ Features

### Core Functionality
- ✅ **User Authentication** - Register, Login, Forgot Password
- ✅ **Role-Based Access** - User and Admin roles
- ✅ **Decision Management** - Create, Edit, Delete, View decisions
- ✅ **Categories System** - Technical, Business, Personal, Financial, Strategic, Operational
- ✅ **Tags System** - Add multiple tags to organize decisions
- ✅ **Status Workflow** - Pending → Approved/Rejected (Admin only)
- ✅ **Notifications** - Real-time notifications for decision status changes
- ✅ **Filtering** - Filter by status and category
- ✅ **Responsive Design** - Works on desktop and mobile

### User Capabilities
- Create decisions with detailed information
- Categorize decisions with predefined categories
- Add custom tags for better organization
- View own decisions
- Receive notifications when admin approves/rejects decisions

### Admin Capabilities
- View all decisions from all users
- Approve or reject pending decisions
- Edit decision status
- Receive notifications when users create decisions
- Full CRUD operations on all decisions

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Framework
- **React Router** - Navigation
- **Axios** - HTTP Client
- **Context API** - State Management
- **CSS3** - Styling with Gradients

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt.js** - Password Hashing
- **crypto** - Token Generation

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- Git

### 1. Clone Repository
```bash
git clone https://github.com/SHARMILA-CS/decision-log-platform.git
cd decision-log-platform
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in `backend/` folder:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/decision-logging
JWT_SECRET=your_secret_key_here_12345
```

Start backend server:
```bash
npm run dev
```
Backend runs on: `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on: `http://localhost:3000`

---

## 🎯 Usage Guide

### First Time Setup

1. **Register Account**
   - Go to http://localhost:3000/register
   - Fill: Name, Email, Password
   - Click Register

2. **Create Admin User** (Optional)
   - Register normally
   - Open MongoDB Compass
   - Database: `decision-logging`
   - Collection: `users`
   - Find your user and change `role: "user"` to `role: "admin"`

3. **Login**
   - Use your credentials
   - Start creating decisions!

### Creating a Decision

1. Click **"Add New Decision"**
2. Fill required fields:
   - **Title** - Decision name
   - **Category** - Select from dropdown
   - **Tags** - Add custom tags (optional)
   - **Description** - Problem description
   - **Options Considered** - Alternative options
   - **Final Decision** - What was decided
   - **Reason** - Justification
3. Click **"Create Decision"**

### Admin Workflow

1. Login as admin
2. View all pending decisions on dashboard
3. Click **"Edit"** on any decision
4. Change **Status** to Approved/Rejected
5. Save changes
6. User receives notification automatically

---

## 📂 Project Structure
```
decision-logging-system/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Auth logic (register, login, forgot password)
│   │   ├── decisionController.js # Decision CRUD operations
│   │   └── notificationController.js # Notification management
│   ├── middleware/
│   │   └── auth.js               # JWT verification
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Decision.js           # Decision schema with categories & tags
│   │   └── Notification.js       # Notification schema
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── decisionRoutes.js
│   │   └── notificationRoutes.js
│   ├── .env                      # Environment variables
│   ├── package.json
│   └── server.js                 # Entry point
│
└── frontend/
    ├── public/
    └── src/
        ├── components/
        │   ├── Navbar.js         # Navigation bar
        │   └── PrivateRoute.js   # Protected route wrapper
        ├── context/
        │   └── AuthContext.js    # Authentication context
        ├── pages/
        │   ├── Login.js
        │   ├── Register.js
        │   ├── ForgotPassword.js
        │   ├── ResetPassword.js
        │   ├── Dashboard.js      # Main dashboard with filters
        │   ├── AddDecision.js    # Create new decision
        │   └── EditDecision.js   # Edit existing decision
        ├── utils/
        │   └── api.js            # Axios configuration
        ├── App.js                # Main app component
        └── index.js              # Entry point
```

---

## 🔐 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ Protected API routes
- ✅ Password reset with time-limited tokens
- ✅ Role-based authorization
- ✅ Input validation

---

## 📸 Screenshots

### Login Page
Clean authentication interface with forgot password link

### Dashboard
Categorized decision cards with status badges and filtering options

### Add Decision
Comprehensive form with categories, tags, and detailed fields

### Notifications
Real-time updates on decision status changes

---

## 🚀 Future Enhancements

- [ ] Search functionality
- [ ] Date range filtering
- [ ] Decision history/version tracking
- [ ] Export decisions to PDF/Excel
- [ ] Email notifications (currently console-logged)
- [ ] Advanced analytics dashboard
- [ ] File attachments for decisions

---

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Request password reset
- `PUT /api/auth/reset-password/:token` - Reset password

### Decisions
- `GET /api/decisions` - Get all decisions (filtered by role)
- `POST /api/decisions` - Create decision
- `GET /api/decisions/:id` - Get single decision
- `PUT /api/decisions/:id` - Update decision
- `DELETE /api/decisions/:id` - Delete decision

### Notifications
- `GET /api/notifications` - Get my notifications
- `GET /api/notifications/unread-count` - Get unread count
- `PUT /api/notifications/:id/read` - Mark as read
- `PUT /api/notifications/mark-all-read` - Mark all as read

---

## 🐛 Known Issues

- Email sending is simulated (check console for reset links)
- No file upload capability yet
- Limited to 6 predefined categories

---

## 📄 License

This project is for educational purposes as part of college coursework.

---

## 🙏 Acknowledgments

- Bannari Amman Institute of Technology
- MERN Stack Community
- MongoDB Documentation
- React Documentation

---

## 📞 Contact

For any queries regarding this project:
- **GitHub:** [@SHARMILA-CS](https://github.com/SHARMILA-CS)
- **Email:** [Your Email]

---

**Made with ❤️ by SHARMILA S**
