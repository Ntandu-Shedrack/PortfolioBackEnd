const mongoose = require("mongoose");
const Award = require("../models/award.model");

const getAwards = async (req, res) => {
  try {
    const award = await Award.find({});
    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAward = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const award = await Award.findById(id);
    if (!award) {
      return res.status(404).json({ message: "Award not found" });
    }
    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAward = async (req, res) => {
  try {
    const award = await Award.create(req.body);
    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAward = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const award = await Award.findByIdAndUpdate(id, req.body, { new: true });

    if (!award) {
      return res.status(404).json({ message: "Award not found" });
    }

    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAward = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const award = await Award.findByIdAndDelete(id);

    if (!award) {
      return res.status(404).json({ message: "Award not found" });
    }
    res.status(200).json({ message: "Award deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAward,
  getAwards,
  createAward,
  updateAward,
  deleteAward,
};
