import Container from "@/components/Container";
import { getPostDetails } from "@/lib/api";
import Image from "next/image";
import React from "react";

type Props = {
    params: { id: string };
};

export default async function page({ params }: Props) {
    const post = await getPostDetails(parseInt(params.id));
    return (
        <>
            <div className="w-full aspect-[4/1] relative">
                <Image
                    className="object-cover"
                    src={post.img}
                    alt={post.title}
                    fill={true}
                />
            </div>
            <div className="py-24">
                <section className="py-5 flex flex-col w-full gap-8">
                    <Container>
                        <h1 className="text-3xl">{post.title}</h1>
                    </Container>
                    <Container>
                        <p>
                            Created at: {new Date(post.created_at).toLocaleDateString()}
                        </p>
                    </Container>
                    <Container>
                        <p className="leading-relaxed">{post.content}</p>
                    </Container>
                </section>
            </div>
        </>
    );
}
