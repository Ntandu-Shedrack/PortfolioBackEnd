const mongoose = require("mongoose");
const Reference = require("../models/reference.model");

const getReferences = async (req, res) => {
  try {
    const reference = await Reference.find({});
    res.status(200).json(reference);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReference = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const reference = await Reference.findById(id);
    if (!reference) {
      return res.status(404).json({ message: "Reference not found" });
    }
    res.status(200).json(reference);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReference = async (req, res) => {
  try {
    const reference = await Reference.create(req.body);
    res.status(200).json(reference);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReference = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const reference = await Reference.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!reference) {
      return res.status(404).json({ message: "Reference not found" });
    }

    res.status(200).json(reference);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReference = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const reference = await Reference.findByIdAndDelete(id);

    if (!reference) {
      return res.status(404).json({ message: "Reference not found" });
    }
    res.status(200).json({ message: "Reference deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getReference,
  getReferences,
  createReference,
  updateReference,
  deleteReference,
};
