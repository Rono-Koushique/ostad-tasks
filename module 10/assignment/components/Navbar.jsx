import Link from "next/link";
import React from "react";

const routes = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "blogs",
        href: "/blogs",
    },
    {
        title: "about",
        href: "/about",
    },
    {
        title: "contacts",
        href: "/contacts",
    },
];

export default function NavBar() {
    function NavLink({ href, title }) {
        return (
            <Link
                href={href}
                className="px-2 py-1 cursor-pointer border-b-2 border-transparent hover:border-neutral-500 "
            >
                <span className="capitalize text-neutral-700">{title}</span>
            </Link>
        );
    }

    return (
        <nav className="sticky top-0 left-0 z-50 h-20 shadow-md bg-white flex items-center px-4">
            <div className="flex items-center max-w-screen-xl w-full mx-auto">
                <div>
                    <span className="text-lg font-bold text-neutral-700">
                        Ostad Assignment
                    </span>
                </div>
                <div className="ml-auto">
                    <div className="flex items-center gap-2">
                        {routes.map((route, idx) => {
                            return (
                                <NavLink
                                    href={route.href}
                                    title={route.title}
                                    key={`route-${idx}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
