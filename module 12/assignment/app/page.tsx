import Container from "@/components/Container";
import React from "react";

type Props = {};

export default function page({}: Props) {
    return (
        <>
            <section className="py-5 mt-12">
                <Container>
                    <h1 className="text-3xl">ওস্তাদ ব্লগে স্বাগতম</h1>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <p>বিশ্বের সাম্প্রতিক সকল তথ্য সম্পর্কে জানুন আমাদের সাথে</p>
                </Container>
            </section>
            <section className="py-5 mt-6   ">
                <Container>
                    <p>এই ওয়েবসাইটটি NextJS দিয়ে বানানো। এখানে যা যা ফিচার দেয়া হয়েছে</p>
                    <ul className="list-disc list-inside mt-3 leading-relaxed">
                        <li>
                            এখানে ৫ টি পেইজ দেয়া হয়েছে - Home, About, Blog, Single Blog
                            এবং Contact
                        </li>
                        <li>প্রতিটি পেইজেই Header এবং Footer কম্পোনেন্ট গুলো আছে</li>
                    </ul>
                </Container>
            </section>
        </>
    );
}
