import Blog from "../models/Blog.js";

export async function getBlogs(req, res) {
  const blogs = await Blog.find();
  res.json({ blogs });
}
