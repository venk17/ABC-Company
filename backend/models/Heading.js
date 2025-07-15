const mongoose = require('mongoose');

const headingSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, 'Heading text is required'],
    trim: true,
    maxlength: [500, 'Heading cannot exceed 500 characters'],
    minlength: [1, 'Heading cannot be empty']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
headingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for better query performance
headingSchema.index({ createdAt: -1 });
headingSchema.index({ isActive: 1 });

module.exports = mongoose.model('Heading', headingSchema);