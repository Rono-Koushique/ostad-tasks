import Comment from "@/components/Comment";
import Image from "next/image";
import React from "react";

async function getPost(slug) {
    const res = await fetch(`https://dummyjson.com/posts/${slug}`);
    const post = await res.json();
    return post;
}

async function getPostAuthor(userId) {
    const res = await fetch(`https://dummyjson.com/users/${userId}`);
    const author = await res.json();
    return author;
}

async function getPostComments(slug) {
    const res = await fetch(`https://dummyjson.com/posts/${slug}/comments`);
    const data = await res.json();
    const { comments } = data;
    return comments;
}

export default async function Page({ params }) {
    const { slug } = params;
    const post = await getPost(slug);
    const author = await getPostAuthor(post.userId);
    const comments = await getPostComments(slug);

    return (
        <>
            <div className="px-4 max-w-screen-md mx-auto">
                <h1 className="text-4xl  font-bold text-neutral-900 leading-tight">
                    {post.title}
                </h1>
            </div>
            <div className="mt-6 px-4 max-w-screen-md mx-auto flex items-center gap-2">
                <div className="relative w-6 aspect-square rounded-full border-2 border-neutral-700">
                    <Image src={author.image} fill={true} alt="author" />
                </div>
                <div>
                    <span className="font-light cursor-pointer hover:underline underline-offset-2">
                        {author.firstName} {author.lastName}
                    </span>
                </div>
            </div>
            <div className="mt-6 px-4 max-w-screen-md mx-auto">
                <p className="text-xl leading-relaxed text-justify">{post.body}</p>
            </div>
            <div className="mt-12 px-4 max-w-screen-md mx-auto">
                <h3 className="text-2xl font-medium">Comments:</h3>
                <div className="mt-6 flex flex-col gap-1 w-full">
                    {comments &&
                        comments.map((comment) => {
                            return <Comment comment={comment} key={comment.id} />;
                        })}
                </div>
            </div>
        </>
    );
}
