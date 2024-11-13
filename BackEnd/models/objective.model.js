const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");

const ObjectiveSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    objective: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ObjectiveSchema.plugin(mongoosePaginate);
const Objective = mongoose.model("Objective", ObjectiveSchema);

module.exports = Objective;
