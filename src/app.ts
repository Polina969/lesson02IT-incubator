import express, { NextFunction, Request, Response } from "express";
import { BlogsRouter, VersionRouter } from "./features/blogs/blogsRouter";
import { dbBlogs } from "./db/dbBlogs";
import cors from "cors";
import { deleteTestsRouter } from "./features/testing/testingRouter";
import { PostsRouter } from "./features/posts/postsRouter";
import { dbPosts } from "./db/dbPosts";
import { config } from "dotenv";
config(); // добавление переменных из файла .env в process.env

export const app = express();
export const PORT = process.env.PORT || 2010;
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use(VersionRouter());
app.use("/blogs", BlogsRouter(dbBlogs));
app.use("/posts", PostsRouter(dbPosts));
app.use(deleteTestsRouter());
