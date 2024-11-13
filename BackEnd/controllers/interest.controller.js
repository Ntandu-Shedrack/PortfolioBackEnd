const mongoose = require("mongoose");
const Interest = require("../models/interest.model");

const getInterests = async (req, res) => {
  try {
    const interest = await Interest.find({});
    res.status(200).json(interest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInterest = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const interest = await Interest.findById(id);
    if (!interest) {
      return res.status(404).json({ message: "Interest not found" });
    }
    res.status(200).json(interest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createInterest = async (req, res) => {
  try {
    const interest = await Interest.create(req.body);
    res.status(200).json(interest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInterest = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const interest = await Interest.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!interest) {
      return res.status(404).json({ message: "Interest not found" });
    }

    res.status(200).json(interest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteInterest = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const interest = await Interest.findByIdAndDelete(id);

    if (!interest) {
      return res.status(404).json({ message: "Interest not found" });
    }
    res.status(200).json({ message: "Interest deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInterest,
  getInterests,
  createInterest,
  updateInterest,
  deleteInterest,
};
