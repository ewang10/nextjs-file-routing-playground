import { useRouter } from "next/router";

const BlogPostPage = () => {
    const router = useRouter();

    // This gives the dynamic segment as an array
    console.log(router.query)
    return (
        <div>
            <h1>The Blog Post Page</h1>
        </div>
    );
};

export default BlogPostPage;
