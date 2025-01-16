import { validationResult, ValidationError, body } from "express-validator";

export const postsShema = [
  body("title")
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage("Максимальная name длина 15"),
  body("shortDescription")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("Максимальная name длина 15"),
  body("content")
    .trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage("Максимальная name длина 15"),
];
