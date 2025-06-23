const Complaint = require('../models/Complaint');

// Create
exports.submitComplaint = async (req, res) => {
  try {
    const complaint = new Complaint({ ...req.body, user: req.user.id });
    await complaint.save();
    res.status(201).json(complaint);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate('user', 'name email');
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateComplaint = async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ message: 'Complaint deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.submitComplaint = async (req, res, next) => {
  try {
    const complaint = new Complaint({ ...req.body, user: req.user.id });
    await complaint.save();
    res.status(201).json(complaint);
  } catch (err) {
    next(err); // Pass error to middleware
  }
};
