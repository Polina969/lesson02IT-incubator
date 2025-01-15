import { BlogsType, dbBlogs, dbBlogsType } from "../db/dbBlogs";
import { postsBlogsController } from "../repository/blogs/postsBlogsController";
import express, { Request, Response } from "express";
import { HTTP_STATUSES } from "../utils";
import { putBlogsByIDController } from "../repository/blogs/putBlogsByIDController";
import { getBlogsController } from "../repository/blogs/getBlogsControlleer";
import { getBlogsByIDController } from "../repository/blogs/getBlogsByIDController";
import { deleteBlogsByIDController } from "../repository/blogs/deleteBlogsByIDController";
import { authMiddleware } from "../middlewares/middlewares";

export const VersionRouter = () => {
  const versionRouter = express.Router();
  versionRouter.get("/", (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({ version: "1.0" });
  });
  return versionRouter;
};

export const BlogsRouter = (dbBlogs: dbBlogsType) => {
  const blogRouter = express.Router();

  blogRouter.get("/", (req: Request, res: Response): void => {
    const blogsGET = getBlogsController.getBlog(); // получаем видео из бд
    res.status(200).json(blogsGET);
  });
  blogRouter.get("/:id", (req: Request, res: Response): void => {
    const video = getBlogsByIDController.findIDBlog(req.params.id);
    if (!video) {
      res.sendStatus(404);
    } else {
      res.status(200).json(video);
    }
  });
  blogRouter.use(authMiddleware);
  blogRouter.post("/", (req: Request, res: Response) => {
    try {
      const createdBlog: BlogsType = postsBlogsController.createBlog(
        req.body.name,
        req.body.description,
        req.body.websiteUrl
      ); // импорт к репозиторию
      res.status(HTTP_STATUSES.CREATED_201).json(createdBlog);
    } catch (error: any) {
      res
        .status(HTTP_STATUSES.BAD_REQUEST_400)
        .send({ message: error.message });
    }
  });
  blogRouter.put("/:id", (req: Request, res: Response): void => {
    const putCours = putBlogsByIDController.updateBlog(
      req.params.id,
      req.body.name,
      req.body.description,
      req.body.websiteUrl
    ); // импорт к репозиторию
    res.status(HTTP_STATUSES.NO_CONTENT_204).json(putCours);
  });

  blogRouter.delete("/:id", (req: Request, res: Response): void => {
    const status = deleteBlogsByIDController.deleteIDBlog(req.params.id);
    res.sendStatus(status);
  });

  return blogRouter;
};
