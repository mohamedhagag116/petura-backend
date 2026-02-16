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

/*
  All routes below are protected.
  User must be authenticated.
*/


// Create new pet (with optional image)
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createPet
);


// Get all pets for logged-in user
router.get(
  "/",
  authMiddleware,
  getUserPets
);


// Get single pet by ID
router.get(
  "/:id",
  authMiddleware,
  getPetById
);


// Update pet (supports image replacement)
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updatePet
);


// Delete pet (also deletes image from storage)
router.delete(
  "/:id",
  authMiddleware,
  deletePet
);


module.exports = router;
