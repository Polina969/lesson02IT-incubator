import express, { NextFunction, Request, Response } from "express";
import { BlogsRouter } from "./router/blogs";
import { dbBlogs } from "./db/dbBlogs";
import cors from "cors";

export const app = express();
export const PORT = process.env.PORT || 2010;
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.get("/", (req, res) => {
  // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
  res.status(200).json({ version: "1.0" });
});
app.use("/blogs", BlogsRouter(dbBlogs));

// app.use(authMiddleware); // Добавление мидлвера перед роутами
// app.use(getVideoRouter(db));
//ойй
