export async function getPostsByCategory(categoryId: number) {
    const url = `https://basic-blog.teamrabbil.com/api/post-list/${categoryId}`;
    const res = await fetch(url);
    const posts = await res.json();
    return posts as Post[];
}

export async function getAllCategories() {
    const url = `https://basic-blog.teamrabbil.com/api/post-categories`;
    const res = await fetch(url);
    const categories = await res.json();
    return categories as Category[];
}

export async function getNewestPosts() {
    const url = `https://basic-blog.teamrabbil.com/api/post-newest`;
    const res = await fetch(url);
    const posts = await res.json();
    return posts as Post[];
}

export async function getPostDetails(postId: number) {
    const url = `https://basic-blog.teamrabbil.com/api/post-details/${53}`;
    const res = await fetch(url);
    const { postDetails } = await res.json();
    return postDetails as PostDetails;
}
