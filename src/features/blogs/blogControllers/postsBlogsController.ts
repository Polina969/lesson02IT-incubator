import { BlogsType } from "../../../db/dbBlogs";
import { dbBlogs } from "../../../db/dbBlogs";
import { v4 as uuidv4 } from "uuid";

export const postsBlogsController = {
  createBlog(name: string, description: string, websiteUrl: string): BlogsType {
    const createdBlog = {
      id: uuidv4(),
      name: name,
      description: description,
      websiteUrl: websiteUrl,
    };

    dbBlogs.blogs.push(createdBlog);
    return createdBlog;
  },
};
