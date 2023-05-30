import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

async function BlogPage() {
    const posts = await pb.collection('posts').getFullList({
        sort: '-created',
    });

    return (
        <section id="blog" className="min-h-screen">
            <h1>Posts</h1>
            <div>
                {posts.map((post) => {
                    return <Post key={post.id} title={post.title} />
                })}
            </div>
        </section>
    )
}

function Post({title}) {
    return (
        <h1>{title}</h1>
    )
}

export default BlogPage;
