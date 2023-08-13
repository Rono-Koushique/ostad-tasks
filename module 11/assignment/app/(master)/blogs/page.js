import BlogCard from "@/components/BlogCard";
import styles from "@/styles/page/blogs.module.css";
import { getAllBlogs } from "@/utils/serverFunctions";

export default function Blogs() {
    const allBlogs = getAllBlogs();
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>All Blogs</h1>
            </div>
            <div className={styles.container} style={{ marginTop: "2rem" }}>
                <div className={styles.cardList}>
                    {allBlogs.map((blog) => {
                        return <BlogCard key={blog.title} blog={blog} />;
                    })}
                </div>
            </div>
        </main>
    );
}
