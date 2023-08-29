"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {};

const routes = [
    { name: "home", path: "/" },
    { name: "set cookie", path: "/set-cookie" },
    { name: "read cookie", path: "/read-cookie" },
    { name: "json response", path: "/json-response" },
    { name: "reroute", path: "/re-route" },
    { name: "auth header", path: "/auth-header" },
];

export default function Navbar({}: Props) {
    const currentPath = usePathname();
    const activeRoute = "/" + currentPath.split("/")[1];

    return (
        <nav className="sticky top-0 left-0 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:md:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-4 mx-auto p-4">
                <a href="#" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                        Assignment
                    </span>
                </a>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
                        {routes.map((route) => {
                            return (
                                <li key={route.name}>
                                    <Link
                                        href={route.path}
                                        className={`block py-2 pl-3 pr-4 rounded md:p-0 capitalize ${
                                            route.path === activeRoute
                                                ? "md:bg-transparent text-white bg-emerald-700 md:text-emerald-700 md:dark:text-emerald-500 dark:bg-emerald-600 md:dark:bg-transparent"
                                                : "text-gray-500 md:hover:text-gray-900  md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        } `}
                                    >
                                        {route.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
