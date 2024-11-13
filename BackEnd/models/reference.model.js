const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");

const ReferenceSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    refereeName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
    companyName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ReferenceSchema.plugin(mongoosePaginate);
const Reference = mongoose.model("Reference", ReferenceSchema);

module.exports = Reference;
