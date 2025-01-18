import { BlogsType, dbBlogs, dbBlogsType } from "../../db/dbBlogs";
import { postsBlogsController } from "./blogControllers/postsBlogsController";
import express, { Request, Response } from "express";
import { HTTP_STATUSES } from "../../utils";
import { putBlogsByIDController } from "./blogControllers/putBlogsByIDController";
import { getBlogsController } from "./blogControllers/getBlogsControlleer";
import { getBlogsByIDController } from "./blogControllers/getBlogsByIDController";
import { deleteBlogsByIDController } from "./blogControllers/deleteBlogsByIDController";
import { adminMiddleware } from "../../middlewares/middlewares";
import { validationResult, ValidationError, body } from "express-validator";
import { bodyShema } from "./blogShems";
import { inputCheckErrorsMiddleware } from "../../middlewares/valdate-request-shema";

export const VersionRouter = () => {
  const versionRouter = express.Router();
  versionRouter.get("/", (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({ version: "1.0" });
    return;
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
  blogRouter.use(adminMiddleware);
  blogRouter.post(
    "/",
    bodyShema,
    inputCheckErrorsMiddleware,
    (req: Request, res: Response): void => {
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
    }
  );
  blogRouter.put(
    "/:id",
    bodyShema,
    inputCheckErrorsMiddleware,
    (req: Request, res: Response): void => {
      const blogIndex = dbBlogs.blogs.findIndex((v) => v.id === req.params.id);

      if (blogIndex === -1) {
        res.sendStatus(404); // 404, если видео с таким id не найдено
        return;
      }

      const putCours = putBlogsByIDController.updateBlog(
        req.params.id,
        req.body.name,
        req.body.description,
        req.body.websiteUrl
      ); // импорт к репозиторию
      res.status(HTTP_STATUSES.NO_CONTENT_204).json(putCours);
    }
  );

  blogRouter.delete("/:id", (req: Request, res: Response): void => {
    const status = deleteBlogsByIDController.deleteIDBlog(req.params.id);
    res.sendStatus(status);
  });

  return blogRouter;
};
