const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");

const LanguageSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    proficiency: {
      type: String,
      enum: ["Mother Tongue", "Fluent", "Professional"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

LanguageSchema.plugin(mongoosePaginate);
const Language = mongoose.model("Language", LanguageSchema);

module.exports = Language;
