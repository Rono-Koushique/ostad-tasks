import BlogCard from "@/components/BlogCard";
import React from "react";

async function getAllBlogs() {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    const { posts } = data;
    return posts;
}

export default async function page() {
    const posts = await getAllBlogs();
    return (
        <main className="py-24 bg-neutral-50">
            <div className="px-4 max-w-screen-md mx-auto">
                <h1 className="text-4xl font-light">All blogs</h1>
            </div>
            <div className="mt-12 px-4 max-w-screen-md mx-auto flex flex-col gap-6 w-full">
                {posts.map((post) => {
                    return <BlogCard post={post} key={`post-${post.id}`} />;
                })}
            </div>
        </main>
    );
}
