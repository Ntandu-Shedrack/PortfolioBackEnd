const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");

const InterestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    interest: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

InterestSchema.plugin(mongoosePaginate);
const Interest = mongoose.model("Interest", InterestSchema);

module.exports = Interest;
