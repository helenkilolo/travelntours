// models/TourPlan.js
const mongoose = require('mongoose');

const TourPlanSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  fromDate: { type: String, required: true },
  toDate: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number },
  rooms: { type: Number },
  citizenship: { type: String, required: true },
  tripType: { type: String, required: true },
  package: { type: String, required: true },
  extraDetails: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TourPlan', TourPlanSchema);
