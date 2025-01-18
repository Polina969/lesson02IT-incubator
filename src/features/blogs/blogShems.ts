import { validationResult, ValidationError, body } from "express-validator";

export const bodyShema = [
  body("name")
    .trim()
    .isLength({ min: 1, max: 15 })
    .notEmpty()
    .withMessage("Максимальная name длина 15"),
  body("description")
    .trim()
    .isLength({ min: 1, max: 500 })
    .notEmpty()
    .withMessage("Максимальная name длина 15"),
  body("websiteUrl")
    .trim()
    .isLength({ min: 1, max: 100 })
    .isURL()
    .withMessage("Максимальная name длина 15"),
];
