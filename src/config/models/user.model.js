const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exist"],
    required: true,
  },
  email: {
    type: String,
    unique: [true, "Account already exits with this email"],
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
