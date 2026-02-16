const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate.middleware");
const {
  registerValidator,
  loginValidator
} = require("../validators/auth.validator.js");

const {
  register,
  login,
  getProfile
} = require("../controllers/auth.controller");

const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);
router.get("/profile", authMiddleware, getProfile);


module.exports = router;
