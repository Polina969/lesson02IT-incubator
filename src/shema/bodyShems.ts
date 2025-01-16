import { validationResult, ValidationError, body } from "express-validator";

export const bodyShema = [
  body("name")
    .trim()
    .isLength({ max: 15 })
    .withMessage("Максимальная name длина 15"),
  body("description")
    .trim()
    .isLength({ max: 500 })
    .withMessage("Максимальная name длина 15"),
  body("websiteUrl")
    .trim()
    .isLength({ max: 100 })
    .withMessage("Максимальная name длина 15"),
];
