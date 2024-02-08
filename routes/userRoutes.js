const { Router } = require("express");
const {
  CreateUser,
  loginUser
} = require('../Controller/userController')
const router = Router();

router.post("/signup" , CreateUser);
router.post("/login", loginUser);


module.exports = router;
