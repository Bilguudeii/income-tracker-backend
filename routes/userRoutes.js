const { Router } = require("express");
const {
  CreateUser,
  loginUser
} = require('../Controller/userController')

const userRouter = Router();

userRouter.post("/signup" , CreateUser);
userRouter.post("/login", loginUser);


module.exports = userRouter;
