const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const { getHomeData } = require("../controllers/home.controller");

router.get("/", authMiddleware, getHomeData);

module.exports = router;
