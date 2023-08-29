import { ReactNode } from "react";

type Props = {
    children: ReactNode | ReactNode[];
};

export default function ResViewer({ children }: Props) {
    return (
        <div>
            <pre className="text-lg text-gray-900 dark:text-gray-100">{children}</pre>
        </div>
    );
}
