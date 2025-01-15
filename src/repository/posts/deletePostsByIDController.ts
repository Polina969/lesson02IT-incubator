import { dbPosts } from "../../db/dbPosts";

export const deletePostByIDController = {
  deleteIDPost(id: string) {
    const idPosts = dbPosts.posts.findIndex((v) => v.id === id);

    if (idPosts === -1) {
      return 404; // 404, если видео с таким id не найдено
    }

    dbPosts.posts.splice(idPosts, 1); // Удаляем видео из массива
    return 204; // 204, если видео успешно удалено
  },
};
