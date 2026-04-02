const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['decision_created', 'decision_approved', 'decision_rejected'],
    required: true,
  },
  relatedDecision: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Decision',
  },
  isRead: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Notification', notificationSchema);