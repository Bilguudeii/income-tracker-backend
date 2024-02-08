const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt")

const CreateUser = async (req, res) => {
  const body = req.body;

  const user = await UserModel.findOne({ email: body.email })
  if(user){
    res.status(404).send({message:"E-mail already in use"})
  }
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
const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password
  try {
    const user = await UserModel.findOne({ email: email })
    const hashedPassword = user.password
    const isUser = bcrypt.compareSync(password , hashedPassword)
    if (isUser) {
      res.status(200).send(user)
    } else {
      res.status(404).send({message: "Wrong password or email"})
    }
  } catch (error) {
    res.status(500).send("OHAHAH")
  }
};

module.exports = { CreateUser , loginUser };
