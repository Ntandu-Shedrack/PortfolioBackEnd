const mongoose = require("mongoose");
const PersonalDetail = require("../models/personalDetail.model");

const getPersonalDetails = async (req, res) => {
  try {
    const personaldetail = await PersonalDetail.find({});
    res.status(200).json(personaldetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPersonalDetail = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const personaldetail = await PersonalDetail.findById(id);
    if (!personaldetail) {
      return res.status(404).json({ message: "PersonalDetail not found" });
    }
    res.status(200).json(personaldetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPersonalDetail = async (req, res) => {
  try {
    const personaldetail = await PersonalDetail.create(req.body);
    res.status(200).json(personaldetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePersonalDetail = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const personaldetail = await PersonalDetail.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!personaldetail) {
      return res.status(404).json({ message: "PersonalDetail not found" });
    }

    res.status(200).json(personaldetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePersonalDetail = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const personaldetail = await PersonalDetail.findByIdAndDelete(id);

    if (!personaldetail) {
      return res.status(404).json({ message: "PersonalDetail not found" });
    }
    res.status(200).json({ message: "PersonalDetail deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPersonalDetail,
  getPersonalDetails,
  createPersonalDetail,
  updatePersonalDetail,
  deletePersonalDetail,
};
