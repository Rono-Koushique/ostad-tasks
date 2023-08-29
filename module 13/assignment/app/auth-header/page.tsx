import { checkEnvironment } from "@/utils/environment";
import React from "react";

type Props = {};

export default async function page({}: Props) {
    return (
        <section className="grow">
            <div className="py-24">
                <div className="container mx-auto p-4">
                    <h2 className="uppercase text-neutral-600 dark:text-neutral-400">
                        Module 13 &gt; Assignment
                    </h2>
                    <div className="mt-8 text-gray-900 dark:text-gray-50">
                        <h1 className="text-4xl font-bold">
                            Task 5: Header Modification
                        </h1>
                    </div>
                    <div className="md:w-7/12 mt-12">
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            <span className="text-emerald-600 dark:text-emerald-400">
                                {`Create a route that accepts an incoming request with an
                                "Authorization" header. Extract the token from the header,
                                prefix it with "Bearer ", and add it as a new
                                "Authorization" header.`}
                            </span>
                            <br />
                            {`Use NextResponse.next() to produce the response.`}
                        </p>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Output:
                        </h2>
                        <div className="mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
