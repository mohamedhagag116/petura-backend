const { body } = require("express-validator");

exports.createPetValidator = [
  body("name")
    .notEmpty()
    .withMessage("Pet name is required"),

  body("type")
    .isIn(["DOG", "CAT", "BIRD", "OTHER"])
    .withMessage("Invalid pet type"),

  body("age")
    .optional()
    .isNumeric()
    .withMessage("Age must be a number"),

  body("weight")
    .optional()
    .isNumeric()
    .withMessage("Weight must be a number")
];
