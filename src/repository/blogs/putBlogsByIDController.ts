import { BlogsType, dbBlogs } from "../../db/dbBlogs";
import { HTTP_STATUSES } from "../../utils";

export const putBlogsByIDController = {
  updateBlog(
    id: string | number,
    name: string,
    description: string,
    websiteUrl: string
  ) {
    const foundBlog = dbBlogs.blogs.find((c) => c.id === id);
    if (!foundBlog) {
      return HTTP_STATUSES.NOT_FOUND_404;
    }
    foundBlog.name = name;
    foundBlog.description = description;
    foundBlog.websiteUrl = websiteUrl;

    return foundBlog;
  },
};
