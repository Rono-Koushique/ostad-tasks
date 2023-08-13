import Link from "next/link";
import styles from "@/styles/page/home.module.css";

export default function Home() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome to Astral Insights</h1>
            </div>
            <div className={styles.container} style={{ marginTop: "1rem" }}>
                <h2 className={styles.subTitle}>A blog website</h2>
            </div>
            <div className={styles.container} style={{ marginTop: "2rem" }}>
                <Link className={styles.blogsLink} href="/blogs">
                    Go to Blogs
                </Link>
            </div>
        </main>
    );
}
