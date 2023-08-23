import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import { getAllCategories, getPostsByCategory } from "@/lib/api";
import React from "react";

type Props = {
    params: { id: string };
};

export default async function page({ params }: Props) {
    const posts = await getPostsByCategory(parseInt(params.id));
    const categories = await getAllCategories();
    const category = categories.find((category: Category) => {
        return category.id === parseInt(params.id);
    });

    return (
        <div className="py-12">
            <section className="py-5">
                <Container>
                    <h1 className="text-3xl">{category!.name}</h1>
                </Container>
            </section>
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
