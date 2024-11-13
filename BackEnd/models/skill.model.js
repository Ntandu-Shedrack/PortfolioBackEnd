const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");

const SkillSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["1", "2", "3", "4", "5"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

SkillSchema.plugin(mongoosePaginate);
const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;
