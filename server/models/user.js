const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    serviceId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    avatar: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "Aucune bio",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;


