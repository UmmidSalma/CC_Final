# 🎂 Foreverfrost Cake Shop

Foreverfrost is a full-stack web application for an online cake ordering system with user authentication and order management.

## 📁 Project Structure

```
CC_Final-main/
├── frontend/                      # Frontend HTML pages
│   ├── index.html                # Home page
│   ├── login.html                # User login interface
│   ├── signup.html               # User registration interface
│   ├── ourcakes.html             # Cake catalog page
│   ├── online.html               # Online ordering interface
│   └── about.html                # About page
├── images/                        # Cake product images
│   ├── cake1.avif
│   ├── cake2.avif
│   ├── Chocolate Truffle.avif
│   └── Strawberry Delight.avif
├── models/                        # MongoDB database models
│   ├── User.js                   # User schema for authentication
│   └── Order.js                  # Order schema for cake orders
├── server.js                      # Express backend server
├── test.js                        # Test suite
├── package.json                   # Project dependencies
└── README.md                      # This file
```

## 🌐 Backend Features

**Express Server (server.js):**
- RESTful API for signup, login, and orders
- Static file serving for frontend and images
- CORS enabled for cross-origin requests
- Body parser middleware for JSON data
- Error handling and validation

**User Authentication:**
- Signup endpoint to create new user accounts
- Email validation to prevent duplicates
- Password hashing using bcryptjs
- Login endpoint for user authentication

**Order Management:**
- Order creation with cake details (name, type, weight, quantity)
- Support for special requests/customizations
- Two order types: delivery and pickup
- Delivery orders capture address
- Pickup orders capture date and time
- Automatic cost calculation: quantity × weight × price

**Database:**
- MongoDB Atlas integration
- User collection for storing user credentials
- Order collection for storing customer orders

## 🎨 Frontend Components

**Pages:**
- **index.html** - Home/landing page
- **login.html** - User login form
- **signup.html** - User registration form
- **ourcakes.html** - Displays available cake products
- **online.html** - Order placement interface
- **about.html** - Company information

**Assets:**
- 4 cake product images in AVIF format
  - Chocolate Truffle
  - Strawberry Delight
  - Cake 1
  - Cake 2

## 🏗️ Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Authentication:** Bcryptjs password hashing
- **Middleware:** CORS, body-parser, express middleware
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Testing:** Test suite in test.js

## 📝 Dependencies Included

- express (4.18) - Web framework
- mongoose - MongoDB ODM
- bcryptjs - Password encryption
- cors - Cross-origin support
- jsonwebtoken - JWT support
- body-parser - Request parsing
- path - File path utilities

---

**Made with ❤️ for Foreverfrost Cake Shop**
