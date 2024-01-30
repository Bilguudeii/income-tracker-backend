const { Router } = require("express");
const {
  createUser,
} = require('../Controller/userController')
const router = Router();

router.post("/signup" , createUser);


module.exports = router;
