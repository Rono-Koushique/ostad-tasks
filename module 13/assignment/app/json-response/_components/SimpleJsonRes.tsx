"use client";
import ResViewer from "@/components/ResViewer";
import { useState, useEffect } from "react";

const getSimpleJson = async () => {
    const res = await fetch("api/get-json-res");
    const result = await res.json();
    return result;
};

type Props = {};

export default function SimpleJsonRes({}: Props) {
    const [simpleJson, setSimpleJson] = useState();
    useEffect(() => {
        getSimpleJson()
            .then((data) => setSimpleJson(data))
            .catch((error) => console.log(error));
    }, []);

    return simpleJson && <ResViewer>{JSON.stringify(simpleJson, null, 2)}</ResViewer>;
}
