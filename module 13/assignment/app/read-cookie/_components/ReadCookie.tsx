"use client";
import ResViewer from "@/components/ResViewer";
import { useState, useEffect } from "react";

type Props = {};

const getThemeCookie = async () => {
    const res = await fetch("http://localhost:3000/api/get-theme");
    const result = await res.json();
    const { data } = result;
    return data;
};

type ThemeCookie = {
    name: string;
    value: string;
    path: string;
};

export default function ReadCookie({}: Props) {
    const [themeCookie, setThemeCookie] = useState<ThemeCookie>();

    useEffect(() => {
        getThemeCookie()
            .then((data) => {
                setThemeCookie(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return themeCookie ? (
        <ResViewer>{JSON.stringify(themeCookie, null, 2)}</ResViewer>
    ) : null;
}
