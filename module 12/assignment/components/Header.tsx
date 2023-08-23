import { getAllCategories } from "@/lib/api";
import Link from "next/link";
import React from "react";

type Props = {};

export default async function Header({}: Props) {
    const categories = await getAllCategories();

    const navLinks = ["Home", "About", "Blog", "Contact"];

    return (
        <header>
            <div className="h-20 bg-blue-500">
                <div className="flex items-center w-full container mx-auto h-full px-5">
                    <div>
                        <Link href="/home">
                            <h1 className="text-xl font-semibold text-white">
                                ওস্তাদ ব্লগ
                            </h1>
                        </Link>
                    </div>
                    <div className="ml-auto">
                        <nav className="flex items-center">
                            {navLinks.map((navlink: string, id: number) => {
                                return (
                                    <Link key={id} href={`/${navlink.toLowerCase()}`}>
                                        <div className="px-4 py-2 rounded hover:bg-blue-600">
                                            <span className="text-white">{navlink}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                            <div className="px-4 py-2 rounded hover:bg-blue-600 cursor-pointer relative group">
                                <span className="text-white">Categories</span>
                                <div className="absolute top-full right-0 z-50 pt-2">
                                    <div className="hidden group-hover:flex hover:flex flex-col shadow-xl p-2 bg-white rounded overflow-hidden w-fit">
                                        {categories.map((category) => {
                                            return (
                                                <Link
                                                    href={`/blog/category/${category.id}`}
                                                    key={category.id}
                                                >
                                                    <div
                                                        key={category.id}
                                                        className="px-4 py-2 w-full rounded hover:bg-neutral-200 flex justify-center"
                                                    >
                                                        <span className="text-center break-keep whitespace-nowrap">
                                                            {category.name}
                                                        </span>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
