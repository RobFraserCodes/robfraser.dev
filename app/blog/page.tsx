'use client';

import useSWR from 'swr';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
const fetcher = url => pb.collection(url).getFullList({ sort: '-created' });

function BlogPage() {
    const { data: posts, error } = useSWR('posts', fetcher);

    if (error) return <div>Failed to load</div>
    if (!posts) return <div>Loading...</div>

    return (
        <section id="blog" className="min-h-screen">
            <h1>Posts</h1>
            <div>
                {posts.map((post) => {
                    return <Post key={post.id} img={post.images} title={post.title} blurb={post.blurb} author={post.author} content={post.blog} />
                })}
            </div>
        </section>
    );
}

function Post({img, title, blurb, content, author}) {
    return (
        <div>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{blurb}</p>
            <p>{content}</p>
            <p>{author}</p>
        </div>
    )
}

export default BlogPage;
