const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");

const EducationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseOrDegree: {
      type: String,
      required: true,
    },
    schoolOrUniversity: {
      type: String,
      required: true,
    },
    gradeOrScore: {
      type: String,
    },
    admissionYear: {
      type: String,
      required: true,
    },
    graduationYear: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

EducationSchema.plugin(mongoosePaginate);
const Education = mongoose.model("Education", EducationSchema);

module.exports = Education;
