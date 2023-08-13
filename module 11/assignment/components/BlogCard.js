import styles from "@/styles/blogCard.module.css";
import Link from "next/link";

export default function BlogCard({ blog }) {
    return (
        <article className={styles.card}>
            <Link href={`/blogs/${blog.id}`}>
                <h1 className={styles.title}>{blog.title}</h1>
            </Link>
            <div style={{ marginTop: "0.5rem" }}>
                <p>
                    <span className={styles.author}>{blog.author}</span> on{" "}
                    <span className={styles.date}>{blog.date}</span>
                </p>
            </div>
        </article>
    );
}
