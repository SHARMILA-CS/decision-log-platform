const Notification = require('../models/Notification');

// Get my notifications
const getMyNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.user._id })
      .populate('relatedDecision', 'title')
      .sort({ createdAt: -1 })
      .limit(10);
    
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get unread count
const getUnreadCount = async (req, res) => {
  try {
    const count = await Notification.countDocuments({ 
      recipient: req.user._id, 
      isRead: false 
    });
    
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark as read
const markAsRead = async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
    res.json({ message: 'Marked as read' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark all as read
const markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      { recipient: req.user._id, isRead: false },
      { isRead: true }
    );
    res.json({ message: 'All marked as read' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Helper function to create notification
const createNotification = async (recipientId, type, message, decisionId) => {
  try {
    await Notification.create({
      recipient: recipientId,
      type,
      message,
      relatedDecision: decisionId,
    });
  } catch (error) {
    console.error('Error creating notification:', error);
  }
};

module.exports = {
  getMyNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  createNotification,
};