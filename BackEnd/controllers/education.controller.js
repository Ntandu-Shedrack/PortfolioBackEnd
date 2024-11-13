const mongoose = require("mongoose");
const Education = require("../models/education.model");

const getEducations = async (req, res) => {
  try {
    const education = await Education.find({});
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEducation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const education = await Education.findById(id);
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const education = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }

    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const education = await Education.findByIdAndDelete(id);

    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.status(200).json({ message: "Education deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEducation,
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
};
