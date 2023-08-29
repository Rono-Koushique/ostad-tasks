import Link from "next/link";

type Props = {};

export default function RedirectBtn({}: Props) {
    return (
        <div>
            <Link
                href="api/goto-home"
                className="hover:underline text-gray-900 dark:text-gray-100"
            >
                Goto Homepage {`(Calls "api/goto-home")`}
            </Link>
        </div>
    );
}
