const Pet = require("../models/pet.model");
const fs = require("fs");
const path = require("path");


// Helper: delete image file
const deleteImage = (filename) => {
  if (!filename) return;

  const filePath = path.join("uploads", filename);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};


// Create
exports.createPet = async (req, res, next) => {
  try {
    const { name, type, breed, age, weight } = req.body;

    const pet = await Pet.create({
      user: req.user._id,
      name,
      type,
      breed,
      age,
      weight,
      image: req.file ? req.file.filename : null
    });

    res.status(201).json({
      success: true,
      data: pet
    });

  } catch (error) {
    next(error);
  }
};


// Get all
exports.getUserPets = async (req, res, next) => {
  try {
    const pets = await Pet.find({ user: req.user._id })
      .select("-__v")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: pets
    });

  } catch (error) {
    next(error);
  }
};


// Get single
exports.getPetById = async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.id).select("-__v");

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found"
      });
    }

    if (pet.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Forbidden"
      });
    }

    res.status(200).json({
      success: true,
      data: pet
    });

  } catch (error) {
    next(error);
  }
};


// Update
exports.updatePet = async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found"
      });
    }

    if (pet.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Forbidden"
      });
    }

    const allowedUpdates = ["name", "type", "breed", "age", "weight"];

    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) {
        pet[field] = req.body[field];
      }
    });

    // If new image uploaded → delete old one
    if (req.file) {
      deleteImage(pet.image);
      pet.image = req.file.filename;
    }

    await pet.save();

    res.status(200).json({
      success: true,
      data: pet
    });

  } catch (error) {
    next(error);
  }
};


// Delete
exports.deletePet = async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found"
      });
    }

    if (pet.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Forbidden"
      });
    }

    deleteImage(pet.image);
    await pet.deleteOne();

    res.status(200).json({
      success: true,
      message: "Pet deleted successfully"
    });

  } catch (error) {
    next(error);
  }
};
