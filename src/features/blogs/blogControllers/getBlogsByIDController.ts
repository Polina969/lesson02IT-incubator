import { dbBlogs } from "../../../db/dbBlogs";

export const getBlogsByIDController = {
  findIDBlog(id: string) {
    const foundBlog = dbBlogs.blogs.find((p) => p.id === id);
    if (!foundBlog) return null;
    return foundBlog;
  },
};
