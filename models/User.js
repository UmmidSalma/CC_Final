const mongoose = require("mongoose");

// Define the schema for users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],  // gives helpful error if missing
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  }
}, { timestamps: true }); // optional, stores createdAt and updatedAt automatically

// Export the model
module.exports = mongoose.model("User", userSchema);
