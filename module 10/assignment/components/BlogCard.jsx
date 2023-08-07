import Image from "next/image";
import React from "react";
import "./blogCard.css";
import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

async function getPostAuthor(userId) {
    const res = await fetch(`https://dummyjson.com/users/${userId}`);
    const author = await res.json();
    return author;
}

export default async function BlogCard({ post }) {
    const author = await getPostAuthor(post.userId);

    return (
        <div className="p-6 rounded shadow-md bg-white">
            <div className="flex gap-3">
                <div className="flex flex-col items-center">
                    <div className="react-button">
                        <ArrowUpIcon />
                    </div>
                    <span>{post.reactions}</span>
                    <div className="react-button">
                        <ArrowDownIcon />
                    </div>
                </div>
                <div>
                    <Link href={`/blogs/${post.id}`}>
                        <h2 className="text-2xl font-bold text-neutral-700 hover:underline underline-offset-2">
                            {post.title}
                        </h2>
                    </Link>
                    <div className="mt-3 flex items-center gap-2">
                        <div>
                            <div className="relative z-0 w-6 aspect-square rounded-full border-2 border-neutral-700">
                                <Image src={author.image} fill={true} alt="author" />
                            </div>
                        </div>
                        <div>
                            <span className="font-light cursor-pointer hover:underline underline-offset-2">
                                {author.firstName} {author.lastName}
                            </span>
                        </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-neutral-900">{post.body}</p>
                    <div className="mt-5">
                        <Link
                            href={`/blogs/${post.id}`}
                            className="flex items-center gap-1 w-fit group"
                        >
                            <span className="text-neutral-700 font-medium group-hover:underline underline-offset-2">
                                Read More
                            </span>
                            <ArrowRightIcon className="h-4 aspect-square text-neutral-700 group-hover:translate-x-2 duration-500 ease-in-out" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
