import { BlogsType } from "../../db/dbBlogs";
import { dbBlogs } from "../../db/dbBlogs";

export const postsBlogsController = {
  createBlog(name: string, description: string, websiteUrl: string): BlogsType {
    const createdBlog = {
      id: String(new Date()),
      name: name,
      description: description,
      websiteUrl: websiteUrl,
    };

    dbBlogs.blogs.push(createdBlog);
    return createdBlog;
  },
};
