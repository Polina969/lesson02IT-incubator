import { NextFunction } from "express";
import { HTTP_STATUSES } from "../utils";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

// АУТЕНДИФИКАЦИЯ
export const ADMIN_AUTH = "admin:qwerty"; // get from SETTINGS

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Authorization header required" });
    return;
  }

  if (!authHeader.startsWith("Basic ")) {
    res.status(401).json({ message: "Invalid authorization header format" });
    return;
  }

  const encodedCredentials = authHeader.slice(6);

  try {
    const decodedCredentials = Buffer.from(
      encodedCredentials,
      "base64"
    ).toString("utf8");
    const [username, password] = decodedCredentials.split(":");

    if (username === "admin" && password === "qwerty") {
      next();
    } else {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
  } catch (error) {
    console.error("Error decoding authorization header:", error);
    res.status(400).json({ message: "Error decoding authorization header" });
    return;
  }
};

////////////////////////////////////////////////////////////
