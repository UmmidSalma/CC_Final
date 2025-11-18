const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  cakeName: String,
  cakeType: String,
  weight: Number,
  quantity: Number,
  specialReq: String,
  orderType: String,
  pickupDateTime: Date,
  deliveryAddress: String,
  pricePerKg: Number,
  totalCost: Number
});

module.exports = mongoose.model("Order", OrderSchema);
