const mongoose = require("mongoose");

// Use this exact string if MongoDB is local
const uri = "mongodb://127.0.0.1:27017/myDatabase";

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected!"))
  .catch(err => console.error("❌ Connection error:", err));
