import styles from "@/styles/navbar.module.css";
import Navlink from "./Navlink";
import Link from "next/link";

const routes = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "blogs",
        href: "/blogs",
    },
];

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <Link href="/" className={styles.brand}>
                    <h1>Astral Insights</h1>
                </Link>
                <div className={styles.navLinks} style={{ marginLeft: "auto" }}>
                    <div>
                        {routes.map((route) => {
                            return <Navlink key={`${route.title}-link`} route={route} />;
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
