import allBlogs from "@/data/blogData.json";

export const getAllBlogs = () => {
    return allBlogs;
};

export const getSingleBlog = (id) => {
    const blog = allBlogs.find((blog) => blog.id.toString() === id);
    return blog;
};
