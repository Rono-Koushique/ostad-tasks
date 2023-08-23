import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    post: Post;
};

export default function PostCard({ post }: Props) {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-xl">
            <div className="w-full aspect-[16/9] relative">
                <Image
                    className="object-cover"
                    src={post.img}
                    alt={post.title}
                    fill={true}
                />
            </div>
            <div className="p-4">
                <div>
                    <Link href={`/blog/${post.id}`}>
                        <div>
                            <h2 className="text-neutral-900 font-semibold hover:underline underline-offset-2">
                                {post.title}
                            </h2>
                        </div>
                    </Link>
                    <div className="mt-2">
                        <p className="line-clamp-2 text-xs text-neutral-700 leading-relaxed">
                            {post.short}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
