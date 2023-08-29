import React, { ButtonHTMLAttributes } from "react";

type Props = {
    children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function LargeBtn({ onClick, children }: Props) {
    return (
        <button
            onClick={onClick}
            className="px-5 py-3 text-base font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
        >
            {children}
        </button>
    );
}
