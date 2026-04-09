# 🎂 Foreverfrost Cake Shop

A full-stack web application for an online cake ordering system with user authentication and order management.

## 📋 Overview

Foreverfrost is an e-commerce platform that allows customers to:
- Create accounts and authenticate securely
- Browse and order custom cakes
- Choose between delivery and pickup options
- Manage special requests for their orders

## 🛠️ Tech Stack

**Backend:**
- Node.js & Express.js
- MongoDB Atlas (Cloud Database)
- Bcrypt (Password Hashing)
- JWT (JSON Web Tokens)
- CORS support

**Frontend:**
- HTML5
- CSS3
- Vanilla JavaScript

**Development & Testing:**
- Jest / Testing framework

## 📁 Project Structure

```
CC_Final-main/
├── frontend/              # Frontend HTML pages
│   ├── index.html        # Home page
│   ├── login.html        # User login
│   ├── signup.html       # User registration
│   ├── ourcakes.html     # Cake catalog
│   ├── online.html       # Online ordering
│   ├── about.html        # About us
│   └── ...
├── models/               # Database schemas
│   ├── User.js          # User model
│   └── Order.js         # Order model
├── images/              # Cake images
│   ├── cake1.avif
│   ├── cake2.avif
│   └── ...
├── server.js            # Express server setup
├── test.js              # Test suite
├── package.json         # Dependencies
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd CC_Final-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.kl7rl8q.mongodb.net/usersdb?retryWrites=true&w=majority
   PORT=5000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

The application will be available at `http://localhost:5000`

## 📡 API Endpoints

### Authentication
- **POST** `/signup` - Register a new user
  - Body: `{ name, email, password }`
  
- **POST** `/login` - User login
  - Body: `{ email, password }`

### Orders
- **POST** `/order` - Create a new order
  - Body: `{ cakeName, cakeType, weight, quantity, specialReq, orderType, pickupDate, pickupTime, deliveryAddress, price }`
  - `orderType`: "pickup" or "delivery"

## 🎂 Available Cakes

- Chocolate Truffle
- Strawberry Delight
- Classic Cake 1
- Classic Cake 2

## 🔐 Security Features

- Password hashing with bcryptjs
- User email verification to prevent duplicates
- CORS enabled for cross-origin requests
- Input validation on all endpoints

## 👤 User Authentication

New users must:
1. Sign up with name, email, and password
2. Password is hashed using bcrypt (10 salt rounds)
3. Login with registered email and password

## 🛒 Ordering System

Customers can:
- Select cake type and weight
- Specify quantity
- Add special requests or customizations
- Choose delivery or pickup
- For pickup: Select date and time
- For delivery: Provide delivery address
- System calculates total cost: `quantity × weight × price`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 Environment Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `MONGO_URI` | MongoDB Atlas URI | Database connection string |
| `PORT` | 5000 | Server port number |

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Verify MONGO_URI in `.env` file
- Ensure MongoDB Atlas IP whitelist includes your IP

**Port Already in Use:**
- Change PORT in `.env` to an available port
- Or kill the process using port 5000

## 🚢 Deployment

For production deployment:
1. Set environment variables on your hosting platform
2. Update CORS origin to match your domain
3. Use a secure password for MongoDB
4. Enable HTTPS

## 📄 License

This project is part of the Foreverfrost Cake Shop business.

## 👨‍💻 Authors

Developed as a full-stack cake shop ordering system.

---

**Made with ❤️ for Foreverfrost Cake Shop**
