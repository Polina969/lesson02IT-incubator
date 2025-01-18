import {
  validationResult,
  ValidationError,
  body,
  CustomValidator,
} from "express-validator";
import express, { Request, Response, NextFunction } from "express";
import { validate as validateUUID } from "uuid"; //для проверки uuid
import { dbBlogs } from "../../db/dbBlogs";

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
  body("blogId")
    .isString()
    .withMessage("not string")
    .trim()
    .custom((blogId) => {
      const blog = dbBlogs.blogs.find((b) => b.id === blogId);
      // console.log(blog)
      return !!blog;
    })
    .withMessage("no blog"),
  // body("id").custom(validateImmutableField("id")), // Используем кастомный валидатор для свойства id
  // body("blogId").custom(validateImmutableField("blogId")),
];
