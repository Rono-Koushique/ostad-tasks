import styles from "@/styles/navlink.module.css";
import Link from "next/link";

export default function Navlink({ route }) {
    return (
        <Link className={styles.navLink} href={route.href}>
            {route.title}
        </Link>
    );
}
