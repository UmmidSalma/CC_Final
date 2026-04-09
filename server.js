const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const path = require("path");

const User = require("./models/User");
const Order = require("./models/Order");

const app = express();

/* -------------------- MIDDLEWARE -------------------- */
// Allow requests from any origin for testing; restrict in production if needed
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- FRONTEND STATIC -------------------- */
app.use(express.static(path.join(__dirname, "frontend")));
app.use("/images", express.static(path.join(__dirname, "images")));

/* -------------------- MONGO CONNECT -------------------- */
// Use MongoDB Atlas for deployment
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://ummid:Salmaummid%4057@cluster0.kl7rl8q.mongodb.net/usersdb?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

/* -------------------- SIGNUP -------------------- */
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: "Please fill all fields" });

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(409).json({ error: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashed });

    return res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

/* -------------------- LOGIN -------------------- */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Please fill all fields" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ error: "Incorrect password" });

    return res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

/* -------------------- ORDER -------------------- */
app.post("/order", async (req, res) => {
  try {
    const { cakeName, cakeType, weight, quantity, specialReq, orderType, pickupDate, pickupTime, deliveryAddress, price } = req.body;

    if (!cakeName || !cakeType || !weight || !quantity || !orderType || !price)
      return res.status(400).json({ error: "Missing required fields" });

    if (orderType === "delivery" && (!deliveryAddress || deliveryAddress.trim() === ""))
      return res.status(400).json({ error: "Delivery address required" });

    let pickupDateTime = null;
    if (orderType === "pickup" && pickupDate && pickupTime) {
      pickupDateTime = new Date(`${pickupDate}T${pickupTime}`);
    }

    const totalCost = quantity * weight * price;

    const order = await Order.create({
      cakeName,
      cakeType,
      weight,
      quantity,
      specialReq,
      orderType,
      pickupDateTime,
      deliveryAddress: orderType === "pickup" ? "" : deliveryAddress,
      price,
      totalCost
    });

    return res.status(201).json({
      message: "Order saved successfully!",
      totalCost: order.totalCost
    });
  } catch (err) {
    console.error("Order Error:", err);
    return res.status(500).json({ error: "Failed to save order" });
  }
});

/* -------------------- FALLBACK -------------------- */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "login.html"));
});

/* -------------------- START SERVER -------------------- */
// Use PORT from environment for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
