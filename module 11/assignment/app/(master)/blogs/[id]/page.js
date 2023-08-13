import styles from "@/styles/page/blogPost.module.css";
import { getSingleBlog } from "@/utils/serverFunctions";

export default function BlogPost({ params }) {
    const blog = getSingleBlog(params.id);

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>{blog.title}</h1>
            </div>
            <div className={styles.container} style={{ marginTop: "1rem" }}>
                <p>
                    <span className={styles.author}>{blog.author}</span> on{" "}
                    <span className={styles.date}>{blog.date}</span>
                </p>
            </div>
            <div className={styles.container} style={{ marginTop: "2rem" }}>
                <p className={styles.content}>{blog.content}</p>
            </div>
        </main>
    );
}
