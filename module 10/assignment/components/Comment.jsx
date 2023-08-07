import Image from "next/image";
import React from "react";

async function getCommentAuthor(userId) {
    const res = await fetch(`https://dummyjson.com/users/${userId}`);
    const author = await res.json();
    return author;
}

export default async function Comment({ comment }) {
    const author = await getCommentAuthor(comment.user.id);
    return (
        <div className="relative z-auto p-3 rounded ">
            <div className="flex items-center gap-2">
                <div className="relative w-6 aspect-square rounded-full border-2 border-neutral-700">
                    <Image src={author.image} fill={true} alt="author" />
                </div>
                <div>
                    <span className="font-medium cursor-pointer hover:underline underline-offset-2">
                        {author.firstName} {author.lastName}
                    </span>
                </div>
            </div>
            <div className="mt-1 ml-8">
                <span className="font-light">{comment.body}</span>
            </div>
        </div>
    );
}
