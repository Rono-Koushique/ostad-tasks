import React from "react";
import "@/styles/form-control.css";

type Props = {
    children: React.ReactNode | React.ReactNode[];
};

export default function FormControl({ children }: Props) {
    return <div className="form-control">{children}</div>;
}
