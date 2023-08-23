import Container from "@/components/Container";
import React from "react";

type Props = {};

export default function page({}: Props) {
    return (
        <>
            <section className="py-5 mt-12">
                <Container>
                    <h1 className="text-3xl">ওস্তাদঃ মডিউল ১২ অ্যাসাইনমেন্ট</h1>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <p>
                        এটি NextJS 13 দিয়ে বানানো একটি ওয়েবসাইট যাতে Dynamic Routing,
                        Custom Header, Custom BasePath সহ আরো অনেক গুলো concept ব্যাবহার
                        করা হয়েছে
                    </p>
                </Container>
            </section>
        </>
    );
}
