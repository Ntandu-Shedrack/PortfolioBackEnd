const mongoose = require("mongoose");
const Objective = require("../models/objective.model");

const getObjectives = async (req, res) => {
  try {
    const objective = await Objective.find({});
    res.status(200).json(objective);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getObjective = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const objective = await Objective.findById(id);
    if (!objective) {
      return res.status(404).json({ message: "Objective not found" });
    }
    res.status(200).json(objective);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createObjective = async (req, res) => {
  try {
    const objective = await Objective.create(req.body);
    res.status(200).json(objective);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateObjective = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const objective = await Objective.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!objective) {
      return res.status(404).json({ message: "Objective not found" });
    }

    res.status(200).json(objective);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteObjective = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const objective = await Objective.findByIdAndDelete(id);

    if (!objective) {
      return res.status(404).json({ message: "Objective not found" });
    }
    res.status(200).json({ message: "Objective deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getObjective,
  getObjectives,
  createObjective,
  updateObjective,
  deleteObjective,
};
