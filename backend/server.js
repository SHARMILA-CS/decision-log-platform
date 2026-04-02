// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// // Create Express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/decisions', require('./routes/decisionRoutes'));

// // Test route
// app.get('/', (req, res) => {
//   res.send('Decision Logging System API is running! 🚀');
// });

// // Server port
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/decisions', require('./routes/decisionRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes')); // NEW

app.get('/', (req, res) => {
  res.send('Decision Logging System API is running! 🚀');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});