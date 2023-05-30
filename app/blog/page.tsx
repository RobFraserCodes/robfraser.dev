import Link from 'next/link';

export async function serverComponent() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perpage=5');
    const posts = await res.json();

    return (
        <BlogPage posts={posts} />
    );
}

function BlogPage({ posts }) {
    return (
        <section id="blog" className="min-h-screen">
            <h1>Posts</h1>
            <div>
                {posts?.map((post) => {
                    return <Post key={post.id} post={post} />;
                })} 
            </div>
        </section>
    )
}

function Post({post}) {
    const { id, title, blog} = post || {};

    return (
        <Link href={`/blog/${id}`} >
            <div>
                <h2>{title}</h2>
                <p>{blog}</p>
            </div>
        </Link>
    )
}
