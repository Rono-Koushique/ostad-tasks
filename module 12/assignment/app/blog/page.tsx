import Container from "@/components/Container";
import { getPostsByCategory } from "@/lib/api";
import PostCard from "@/components/PostCard";
import React from "react";

type Props = {};

export default async function page({}: Props) {
    const posts = await getPostsByCategory(1);
    return (
        <div className="py-24">
            <section className="py-5">
                <Container>
                    <div className="grid grid-cols-4 gap-x-6 gap-y-10">
                        {posts.map((post: Post) => {
                            return <PostCard key={post.id} post={post} />;
                        })}
                    </div>
                </Container>
            </section>
        </div>
    );
}
