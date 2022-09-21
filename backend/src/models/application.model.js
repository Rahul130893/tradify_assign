const mongoose = require("mongoose");
//Name, Email, experience, expected CTC, resume attachment
const ApplicationSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Experience: { type: Number, required: true },
    Expected_ctc: { type: String, required: true },
    Resume: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("application", ApplicationSchema);
