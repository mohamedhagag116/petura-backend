const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");

const {
  createPet,
  getUserPets,
  getPetById,
  updatePet,
  deletePet
} = require("../controllers/pet.controller");

const { createPetValidator } = require("../validators/pet.validator");

router.post(
  "/",
  authMiddleware,
  createPetValidator,
  validate,
  createPet
);

router.get("/", authMiddleware, getUserPets);

router.get("/:id", authMiddleware, getPetById);

router.put("/:id", authMiddleware, updatePet);

router.delete("/:id", authMiddleware, deletePet);

module.exports = router;
