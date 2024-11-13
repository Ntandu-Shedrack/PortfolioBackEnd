const mongoose = require("mongoose");
const Publication = require("../models/publication.model");

const getPublications = async (req, res) => {
  try {
    const publication = await Publication.find({});
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPublication = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const publication = await Publication.findById(id);
    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPublication = async (req, res) => {
  try {
    const publication = await Publication.create(req.body);
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePublication = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const publication = await Publication.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }

    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePublication = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const publication = await Publication.findByIdAndDelete(id);

    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.status(200).json({ message: "Publication deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPublication,
  getPublications,
  createPublication,
  updatePublication,
  deletePublication,
};
