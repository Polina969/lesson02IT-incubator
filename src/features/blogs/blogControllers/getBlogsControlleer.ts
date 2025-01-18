import { dbBlogs } from "../../../db/dbBlogs";

export const getBlogsController = {
  getBlog() {
    const videosGET = dbBlogs.blogs; // получаем видео из бд
    if (!videosGET) return null;
    return videosGET;
  },
};
