const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  createdAt: { type : Date, default:Date.now() },
  updateAt: Date,
  picture: String,
  currency_type: String,
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
