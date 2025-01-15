import { NextFunction } from "express";
import { HTTP_STATUSES } from "../utils";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

// export const ADMIN_AUTH = "admin:qwerty"; // get from SETTINGS
// const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const auth = req.headers["authorisation"] as string; // 'Basic xxxx'
//   console.log(auth);
//   if (!auth) {
//     res.status(401).json({});
//     return;
//   }
//   const buff = Buffer.from(auth.slice(6), "base64");
//   const decodedAuth = buff.toString("utf8");

//   const buff2 = Buffer.from(ADMIN_AUTH, "utf8");
//   const codedAuth = buff2.toString("base64");

//   // if (decodedAuth === ADMIN_AUTH || auth.slice(0, 5) !== 'Basic ') {
//   if (auth.slice(6) !== codedAuth || auth.slice(0, 5) !== "Basic ") {
//     res.status(401).json({});
//     return;
//   }

//   next();
// };

// АУТЕНДИФИКАЦИЯ
export const ADMIN_AUTH = "admin:qwerty"; // get from SETTINGS

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
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
