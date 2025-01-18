import {
  validationResult,
  ValidationError,
  body,
  CustomValidator,
} from "express-validator";
import express, { Request, Response, NextFunction } from "express";
import { validate as validateUUID } from "uuid"; //для проверки uuid

export const postsShema = [
  body("title")
    .trim()
    .isLength({ min: 1, max: 30 })
    .notEmpty()
    .withMessage("Максимальная name длина 15"),
  body("shortDescription")
    .trim()
    .isLength({ min: 1, max: 100 })
    .notEmpty()
    .withMessage("Максимальная name длина 15"),
  body("content")
    .trim()
    .isLength({ min: 1, max: 1000 })
    .notEmpty()
    .withMessage("Максимальная name длина 15"),
  // body("id").custom(validateImmutableField("id")), // Используем кастомный валидатор для свойства id
  // body("blogId").custom(validateImmutableField("blogId")),
];
