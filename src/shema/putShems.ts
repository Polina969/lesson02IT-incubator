import { validationResult, ValidationError, body } from "express-validator";

export const postsShema = [
  body("title")
    .trim()
    .isLength({ max: 30 })
    .withMessage("Максимальная name длина 15"),
  body("shortDescription")
    .trim()
    .isLength({ max: 100 })
    .withMessage("Максимальная name длина 15"),
  body("content")
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Максимальная name длина 15"),
];
