import { dbBlogs } from "../../../db/dbBlogs";

export const deleteBlogsByIDController = {
  deleteIDBlog(id: string) {
    const videoIndex = dbBlogs.blogs.findIndex((v) => v.id === id);

    if (videoIndex === -1) {
      return 404; // 404, если видео с таким id не найдено
    }

    dbBlogs.blogs.splice(videoIndex, 1); // Удаляем видео из массива
    return 204; // 204, если видео успешно удалено
  },
};
