import React from "react";

type Props = {};

export default function Footer({}: Props) {
    return (
        <footer className="h-8 bg-slate-300">
            <div className="flex items-center w-full h-full px-5">
                <h6 className="text-xs text-slate-700">Copyright Rono Koushique</h6>
            </div>
        </footer>
    );
}
