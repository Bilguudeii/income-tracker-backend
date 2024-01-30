const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
  const body = req.body;
  const password = body.password
  const hashPassword = bcrypt.hashSync(password, 15);
  const data = { ...body , password : hashPassword}
  try {
    await UserModel.create(data);
    res.status(200).send("Account has been created");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser };
