const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");

const {
  createPet,
  getUserPets,
  getPetById,
  updatePet,
  deletePet
} = require("../controllers/pet.controller");

router.post("/", authMiddleware, upload.single("image"), createPet);
router.get("/", authMiddleware, getUserPets);
router.get("/:id", authMiddleware, getPetById);
router.put("/:id", authMiddleware, upload.single("image"), updatePet);
router.delete("/:id", authMiddleware, deletePet);

module.exports = router;
