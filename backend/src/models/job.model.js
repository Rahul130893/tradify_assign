const mongoose = require("mongoose")
//role, company, location, description
const jobSchema = mongoose.Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Job = mongoose.model("jobs", jobSchema)

module.exports= Job