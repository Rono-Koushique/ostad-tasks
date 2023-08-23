import Container from "@/components/Container";
import MailForm from "@/components/MailForm";
import React from "react";

type Props = {};

export default function page({}: Props) {
    return (
        <div className="py-12">
            <section className="py-5">
                <Container>
                    <h1 className="text-3xl">আমাদের সাথে যোগাযোগ করুন</h1>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <MailForm />
                </Container>
            </section>
        </div>
    );
}
