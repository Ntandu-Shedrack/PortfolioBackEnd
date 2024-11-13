const mongoose = require("mongoose");
const Language = require("../models/language.model");

const getLanguages = async (req, res) => {
  try {
    const language = await Language.find({});
    res.status(200).json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const language = await Language.findById(id);
    if (!language) {
      return res.status(404).json({ message: "Language not found" });
    }
    res.status(200).json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLanguage = async (req, res) => {
  try {
    const language = await Language.create(req.body);
    res.status(200).json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const language = await Language.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!language) {
      return res.status(404).json({ message: "Language not found" });
    }

    res.status(200).json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const language = await Language.findByIdAndDelete(id);

    if (!language) {
      return res.status(404).json({ message: "Language not found" });
    }
    res.status(200).json({ message: "Language deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLanguage,
  getLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage,
};
