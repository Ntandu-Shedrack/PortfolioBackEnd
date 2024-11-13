const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");

const PersonalDetailsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    maritalStatus: {
      type: String,
      enum: ["Married", "Single"],
    },
    religion: {
      type: String,
    },
    passport: {
      type: String,
    },
    socialMedia: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

PersonalDetailsSchema.plugin(mongoosePaginate);
const PersonalDetails = mongoose.model(
  "PersonalDetails",
  PersonalDetailsSchema
);

module.exports = PersonalDetails;
