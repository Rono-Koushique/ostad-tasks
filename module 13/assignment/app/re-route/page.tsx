import React from "react";
import RedirectBtn from "./_components/RedirectBtn";

type Props = {};

export default function page({}: Props) {
    return (
        <section className="grow">
            <div className="py-24">
                <div className="container mx-auto p-4">
                    <h2 className="uppercase text-neutral-600 dark:text-neutral-400">
                        Module 13 &gt; Assignment
                    </h2>
                    <div className="mt-8 text-gray-900 dark:text-gray-50">
                        <h1 className="text-4xl font-bold">Task 4: Redirection</h1>
                    </div>
                    <div className="md:w-7/12 mt-12">
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            <span className="text-emerald-600 dark:text-emerald-400">
                                Implement a route that redirects the user to a different
                                page within your application using
                                NextResponse.redirect().
                            </span>
                        </p>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Output:
                        </h2>
                        <div className="mt-2">
                            <RedirectBtn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
